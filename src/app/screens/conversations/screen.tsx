import { useEffect, useState } from "react";
import screenStyles from "../screen.module.css";
import { Conversation } from "./_components/conversation";
import { getConversationIDs } from "@/libs/MAL";
import { SpecialTip } from "./_components/specialTip";

export const ConversationsScreen = () => {
  const [conversationIDs, setConversationIDs] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState<boolean>(true);

  const fetchConversationIDs = () => {
    setConversationIDs(getConversationIDs().reverse());
  };

  useEffect(() => {
    fetchConversationIDs();
  }, []);

  return (
    <div className={screenStyles.screen}>
      <h1>What happened?</h1>
      <SpecialTip
        title="Still generating"
        description="These conversations were not sent to the server. You can still listen to the audio and review the summaries."
      />
      <div className={screenStyles.list}>
        {conversationIDs.map((id, index) => (
          <Conversation conversationId={id} />
        ))}
      </div>
      <p style={{ textAlign: "center" }}>That&apos;s all for today!</p>
    </div>
  );
};
