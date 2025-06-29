import { useEffect, useState } from "react";
import styles from "./conversation.module.css";
import {
  APISummaryResponse,
  getBundle,
  getConversationStatus,
} from "@/libs/MAL";
import { Skeleton } from "@/app/_components/skel/skel";
import { useSummary } from "@/libs/useSummary";

export const Conversation = ({
  conversationId,
}: {
  conversationId: string;
}) => {
  const [senderName, setSenderName] = useState<string>("");
  const [figureRandom, setFigureRandom] = useState<string>(
    "Figuring out what happened"
  );

  const whatHappenedText = [
    "Figuring out what happened",
    "We will be reporting on this soon!",
    "What happened here? We're finding out...",
    "Recalling what happened...",
  ];
  const [status, setStatus] = useState<string>("loading");
  const summary = useSummary(conversationId, setStatus);

  // useEffect(() => {
  //   if (status == "unsent") {
  //     console.log(JSON.stringify(getBundle(conversationId)));
  //   }
  // }, [status]);
  useEffect(() => {
    setFigureRandom(
      whatHappenedText[Math.floor(Math.random() * whatHappenedText.length)]
    );
  }, []);

  useEffect(() => {
    setStatus(getConversationStatus(conversationId));
  }, [conversationId]);

  const playExtracts = async () => {
    const object = JSON.parse(
      localStorage.getItem(`summary-${conversationId}`)!!
    ) as APISummaryResponse;

    console.log(JSON.stringify(object));
    const allAudio = [
      object.extract.mp3Path,
      ...object.speakers.map((s) => s.mp3Path).filter(Boolean),
    ];

    for (const audioPath of allAudio) {
      console.log("Playing audio:", audioPath, "of", JSON.stringify(allAudio));
      await new Promise((resolve) => {
        const audio = new Audio(audioPath);
        console.log("Playing audio from path:", audioPath);
        audio.onpause = () => {
          resolve(null);
        };

        audio.play();
      });
    }
  };

  // if (summary == null) {
  //   return (
  //     <div className={styles.conversation}>
  //       <div className="conversation-header">
  //         <Skeleton width={300} height={16} />
  //       </div>
  //       <div className="conversation-content">
  //         <p>Loading conversation details...</p>
  //       </div>
  //     </div>
  //   );
  // }

  if (summary == null) {
    return (
      <button className={styles.conversation}>
        {/* <div className="conversation-header"> */}
        <p>{figureRandom}</p>
        <Skeleton width={"100%"} height={16} />
        {/* </div> */}
      </button>
    );
  }

  return (
    <button onClick={() => playExtracts()} className={styles.conversation}>
      {/* <div className="conversation-header">
        <img src={profileImage} alt={`${senderName}'s profile`} className="profile-image" />
        <h2 className="sender-name">{senderName}</h2>
      </div> */}
      <p>{summary}</p>
      <p style={{ fontSize: 12, opacity: "0.5" }}>Tap to listen</p>
    </button>
  );
};
