
import "./Chat.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Chat({
  subject,
  darkMode,
  language,
  rstyle,
  examples,
  messages,
  setMessages,
  chatHistory,
  setChatHistory
}) {
  const [message, setMessage] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);

  function getAIResponse(message) {
    if (message.toLowerCase().includes("react")) {
      return "React is a JavaScript library for building user interfaces.";
    } else if (message.toLowerCase().includes("python")) {
      return "Python is a high-level programming language.";
    } else if (message.toLowerCase().includes("javascript")) {
      return "JavaScript is a programming language used in browsers and on servers.";
    }

    return "I'm still learning how to answer this question.";
  }

  function sendMessage() {
    if (message.trim() === "") {
      return;
    }

    setIsThinking(true);

    const aiResponse = getAIResponse(message);

    
    setMessages([...messages, { text: message, sender: "user" }]);

    setMessage("");

   
    setTimeout(() => {
      setMessages([
        ...messages,
        { text: message, sender: "user" },
        { text: aiResponse, sender: "ai" }
      ]);

      setIsThinking(false);
    }, 2000);
  }

  function newChat() {
    setMessages([]);
    setSelectedChat(null);
  }

function chat_history() {

  if (messages.length === 0) {
    return;
  }

  if (selectedChat === null) {

    setChatHistory([...chatHistory, messages]);

  } else {

    setChatHistory(
      chatHistory.map((chat, index) => {

        if (index === selectedChat) {
          return messages;
        } else {
          return chat;
        }

      })
    );

  }
}

  return (
    <>
      <div className={darkMode ? "Chat-main dark" : "Chat-main"}>

        <nav className="side-bar">
          <h2>AI Study Assistant</h2>

          <button
            onClick={() => {
              chat_history();
              newChat();
            }}
          >
            New Chat
          </button>

          {chatHistory.map((chat, index) => {
            return (
              <p
                key={index}
                onClick={() =>{setMessages(chat) ; setSelectedChat(index)
                } }
              >
                {chat[0].text}
              </p>
            );
          })}

          <Link to="/Settings" className="home-btn">
            Settings
          </Link>
        </nav>

        <div className="chat-area">

          <h3>AI Tutor</h3>

          <div className="chat-messages">

            {messages.map((msg, index) => (
              <p key={index} className={msg.sender === "user"
                    ? "user-message"
                    : "ai-message"
                }
              >
                {msg.text}
              </p>
            ))}

            {isThinking && (
              <p className="ai-message">
                ...
              </p>
            )}

          </div>

          <div className="input-area">

            <input
              type="text"
              value={message}
              placeholder="Ask anything..."
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />

            <button
              className="send-btn"
              onClick={sendMessage}
            >
              📩 Send
            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default Chat;
