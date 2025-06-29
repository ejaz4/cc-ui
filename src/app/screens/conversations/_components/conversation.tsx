import { useEffect, useState } from "react";
import styles from "./conversation.module.css";
import { getConversationStatus } from "@/libs/MAL";
import { Skeleton } from "@/app/_components/skel/skel";

export const Conversation = ({
  conversationId,
}: {
  conversationId: string;
}) => {
  const [senderName, setSenderName] = useState<string>("");
  const [extract, setExtract] = useState<string>("");

  const [status, setStatus] = useState<string>("loading");

  useEffect(() => {
    setStatus(getConversationStatus(conversationId));
  }, [conversationId]);

  if (status == "loading") {
    return (
      <div className={styles.conversation}>
        <div className="conversation-header">
          <Skeleton width={300} height={16} />
        </div>
        <div className="conversation-content">
          <p>Loading conversation details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.conversation}>
      <div className="conversation-header">
        {/* <img src={profileImage} alt={`${senderName}'s profile`} className="profile-image" /> */}
        <h2 className="sender-name">{senderName}</h2>
      </div>
      <div className="conversation-content">
        <p>{extract}</p>
      </div>
    </div>
  );
};
