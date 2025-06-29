import { useEffect, useState } from "react";
import {
  AndroidMessage,
  APISummaryResponse,
  getBundle,
  getConversationStatus,
  getSummary,
  setSummary,
} from "./MAL";
import { apiEndpoint } from "./api";

export const useSummary = (
  conversationId: string,
  setStat: (a: string) => void
) => {
  const [status, setStatus] = useState<string>("loading");
  const [bundle, setBundle] = useState<AndroidMessage[]>([]);

  const [extract, setExtract] = useState<string | null>(null);

  const generateSummarize = async () => {
    const summariseReq = await fetch(`${apiEndpoint}/summarize`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bundle),
    });

    if (!summariseReq.ok) {
      console.log(await summariseReq.text());
      return;
    }

    const summary = (await summariseReq.json()) as APISummaryResponse;

    console.log("SUMMARY IS", summary.extract.extract);
    setSummary(conversationId, summary.extract.extract);
    localStorage.setItem(`summary-${conversationId}`, JSON.stringify(summary));
    setStatus("done");
    setStat("done");
    setExtract(summary.extract.extract);
  };

  useEffect(() => {
    console.log(JSON.stringify(bundle));
    if (bundle.length > 0) {
      generateSummarize();
    }
  }, [bundle]);

  useEffect(() => {
    console.log("THE STATUS IS", status);
    if (status == "unsent") {
      setBundle(getBundle(conversationId));
    }

    if (status == "done") {
      setStat("done");
      setStatus("done");
      console.log("SUMMARY IS", getSummary(conversationId));
      setExtract(getSummary(conversationId));
    }
  }, [status]);

  useEffect(() => {
    setStatus(getConversationStatus(conversationId));
  }, [conversationId]);

  return extract;
};
