
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
  setChatHistory,
  translations
}) {
  const [message, setMessage] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);

  // Controls the sidebar
  const [sidebarOpen, setSidebarOpen] = useState(true);

  function getAIResponse(message) {
    const text = message.toLowerCase();
    if (text.includes("abdurhman" )){
      return "he is from afg and live paktia province and he is play cricket and is in paktia univercity and some thing mor about he ";
    }
    if(text.includes("majeed")){
      return "he is your classmate "
    }

    if (text.includes("react")) {
      return "React is a JavaScript library for building user interfaces.";
    }
    if (text.includes("sami")){
      return "Sami  is a Computer Science student and aspiring softwae engineer from Afghanistan. He is passionate about software development, web technologies, and artificial intelligence. He has been learning HTML, CSS, JavaScript, React, Python, SQL, and databases, and is continuously improving his programming and problem-solving skills. Sami is currently building an AI Study Assistant as a serious project to strengthen his practical development skills. His long-term goal is to become a highly skilled software engineer and build useful technology that can help students and people around him."
    }

    if (text.includes("python")) {
      return "Python is a high-level programming language.";
    }

    if (text.includes("javascript")) {
      return "JavaScript is a programming language used in browsers and on servers.";
    }

    return "I'm still learning, but I don't have enough information to answer that question accurately yet. Try asking me about Sami, programming, or your studies.";
  }

  function sendMessage() {
    if (message.trim() === "" || isThinking) {
      return;
    }

    const userMessage = message.trim();
    const aiResponse = getAIResponse(userMessage);

    // Add user's message
    setMessages((prevMessages) => [...prevMessages,
      {
        text: userMessage,
        sender: "user"
      }
    ]);

    setMessage("");
    setIsThinking(true);

    // Simulate AI thinking
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: aiResponse,
          sender: "ai"
        }
      ]);

      setIsThinking(false);
    }, 1500);
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
          }

          return chat;
        })
      );
    }
  }

  function handleNewChat() {
    chat_history();
    newChat();
  }

  function openChat(chat, index) {
    setMessages(chat);
    setSelectedChat(index);
    setSidebarOpen(false);
  }

  return (
    <div className={darkMode ? "Chat-main dark" : "Chat-main"}>

      {/* SIDEBAR */}

      <aside
        className={
          sidebarOpen
            ? "side-bar open"
            : "side-bar closed"
        }
      >

        <div className="sidebar-top">

          <h2>{translations[language].title}</h2>

          <button
            className="close-sidebar-btn"
            onClick={() => setSidebarOpen(false)}
            // aria-label="Close sidebar"
          >
            ✕
          </button>

        </div>

        {/* NEW CHAT */}

        <button
          className="new-chat-btn"
          onClick={handleNewChat}
        >
          + {translations[language].newChat}
        </button>

        {/* CHAT HISTORY */}

        <div className="chat-history">

          {chatHistory.length === 0 ? (

            <p className="no-history">
             {translations[language].noHistory}
            </p>

          ) : (

            chatHistory.map((chat, index) => (

              <button
                className={
                  selectedChat === index
                    ? "history-item active"
                    : "history-item"
                }
                key={index}
                onClick={() => openChat(chat, index)}
              >
                {chat[0]?.text || "New Chat"}
              </button>

            ))

          )}

        </div>

        {/* SETTINGS */}

        <Link
          to="/Settings"
          className="settings-btn"
        >
          ⚙ {translations[language].settings}
        </Link>

      </aside>


      {/* MOBILE OVERLAY */}

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}


      {/* CHAT AREA */}

      <main className="chat-area">

        {/* HEADER */}

        <header className="chat-header">

          <button
            className="menu-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            ☰
          </button>

          <div className="chat-title">

            <h3>{translations[language].chatTitle}</h3>

            {subject && (
              <span>{subject}</span>
            )}

          </div>

        </header>


        {/* CHAT CONTENT */}

        <div className="chat-messages">

          {messages.length === 0 && !isThinking ? (

            <div className="empty-chat">

              <div className="empty-icon">
                ✨
              </div>

              <h1>
                {translations[language].howCanIHelp}
              </h1>

              <p>
                {translations[language].chatDescription}
              </p>

            </div>

          ) : (

            <div className="messages-container">

              {messages.map((msg, index) => (

                <div
                  key={index}
                  className={
                    msg.sender === "user"
                      ? "message-row user-row"
                      : "message-row ai-row"
                  }
                >

                  <div
                    className={
                      msg.sender === "user"
                        ? "message-bubble user-message"
                        : "message-bubble ai-message"
                    }
                  >
                    {msg.text}
                  </div>

                </div>

              ))}


              {/* THINKING */}

              {isThinking && (

                <div className="message-row ai-row">

                  <div className="message-bubble ai-message thinking">

                    <span></span>
                    <span></span>
                    <span></span>

                  </div>

                </div>

              )}

            </div>

          )}

        </div>


        {/* INPUT AREA */}

        <div className="input-area">

          <div className="input-box">

            <input
              type="text"
              value={message}
              placeholder={translations[language].askAnything}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              disabled={isThinking}
            />

            <button
              className="send-btn"
              onClick={sendMessage}
              disabled={
                isThinking || message.trim() === ""
              }
              aria-label="Send message"
            >
              ➤
            </button>

          </div>

          <p className="input-note">
            {translations[language].aiWarning}
          </p>

        </div>

      </main>

    </div>
  );
}

export default Chat;

