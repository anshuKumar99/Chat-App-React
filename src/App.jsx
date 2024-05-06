import React, { useState } from "react";
import ChatInput from "./Components/ChatInput";
import ChatMessages from "./Components/ChatMessages";
import Container from "./Components/Container";

const users = ["Alan", "Bob", "Carol", "Dean", "Elin"];

function App() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [likeCounts, setLikeCounts] = useState({});

  const handleSendMessage = () => {
    const randomUser = getRandomUsername();
    let time = new Date();
    const newMessage = {
      username: randomUser,
      message: inputValue,
      timestamp: time.toLocaleTimeString(),
      likes: 0,
    };
    setMessages([...messages, newMessage]);
    setInputValue("");
  };

  const handleLike = (index) => {
    const newLikeCounts = { ...likeCounts };
    newLikeCounts[index] = (newLikeCounts[index] || 0) + 1;
    setLikeCounts(newLikeCounts);
  };

  const getRandomUsername = () => {
    const randomIndex = Math.floor(Math.random() * users.length);
    return users[randomIndex];
  };

  return (
    <Container>
      <ChatMessages
        messages={messages}
        handleLike={handleLike}
        likeCounts={likeCounts}
      />
      <div
        ref={(el) => {
          el && el.scrollIntoView({ behavior: "smooth" });
        }}
      ></div>
      <ChatInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSendMessage={handleSendMessage}
      />
    </Container>
  );
}

export default App;
