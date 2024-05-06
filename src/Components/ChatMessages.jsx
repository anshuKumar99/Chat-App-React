import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import styles from "./ChatMessages.module.css";

const ChatMessages = ({ messages, handleLike, likeCounts }) => {
  return (
    <div className={styles.messageContainer}>
      {messages.map((msg, index) => (
        <div key={index}>
          <div>
            <span className={styles.username}>{msg.username}</span>
            <span className={styles.time}>{msg.timestamp}</span>
          </div>
          <span className={styles.message}>{msg.message}</span>
          <button
            onClick={() => handleLike(index)}
            className={styles.likebutton}
          >
            <AiOutlineLike /> {likeCounts[index] || 0}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
