import React, { useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import styles from "./ChatInput.module.css";
import { IoSend } from "react-icons/io5";

const ChatInput = ({ handleSendMessage, inputValue, setInputValue }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEmojiSelect = (event) => {
    setInputValue(inputValue + event.native);
    setShowEmojiPicker(false);
  };

  return (
    <div className={styles.typeMessage}>
      <input
        type="text"
        placeholder="Type Message"
        value={inputValue}
        onChange={handleChange}
        className={styles.input}
        onFocus={() => setShowEmojiPicker(false)}
      />
      <button
        onClick={() => setShowEmojiPicker((prev) => !prev)}
        className={styles.emojibutton}
      >
        😀
      </button>
      {showEmojiPicker && <Picker data={data} onSelect={handleEmojiSelect} />}
      <button onClick={handleSendMessage} className={styles.sendbutton}>
        <IoSend />
      </button>
    </div>
  );
};

export default ChatInput;
