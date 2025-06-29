import { useEffect, useState } from "react";
import screenStyles from "../screen.module.css";
import { Conversation } from "./_components/conversation";
import { getConversationIDs } from "@/libs/MAL";

export const ConversationsScreen = () => {
  const [conversationIDs, setConversationIDs] = useState<string[]>([]);

  const fetchConversationIDs = () => {
    setConversationIDs(getConversationIDs());
  };

  useEffect(() => {
    console.log(conversationIDs);
  }, [conversationIDs]);

  return (
    <div className={screenStyles.screen}>
      <h1>Conversations</h1>
      <div>
        <button onClick={fetchConversationIDs}>
          <p>bingusd</p>
        </button>

        {conversationIDs.map((id, index) => (
          <Conversation conversationId={id} />
        ))}
      </div>
    </div>
  );
};
