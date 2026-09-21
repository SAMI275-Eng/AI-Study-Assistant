import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Settings from "./pages/Settings";

function App() {
  const [language, setLanguage] = useState("English");
  const [subject, setSubject] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [rstyle, setRstyle] = useState("Beginner");
  const [examples, setExamples] = useState(false);

  const [messages, setMessages] = useState(() => {
    
    const savedData = localStorage.getItem("messages");

    if (savedData) {
      return JSON.parse(savedData);
    }

    return [];
    
  });
  
  const [chatHistory, setChatHistory] = useState(() => {
    const savedHistory = localStorage.getItem("chatHistory");

    if (savedHistory) {
      return JSON.parse(savedHistory);
    }

    return [];
  });
  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
  }, [chatHistory]);
  
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/chat"
          element={
            <Chat
              subject={subject}
              darkMode={darkMode}
              language={language}
              rstyle={rstyle}
              examples={examples}
              messages={messages}
              setMessages={setMessages}
              chatHistory={chatHistory}
              setChatHistory={setChatHistory}
            />
          }
        />

        <Route
          path="/Settings"
          element={
            <Settings
              subject={subject}
              setSubject={setSubject}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              language={language}
              setLanguage={setLanguage}
              rstyle={rstyle}
              setRstyle={setRstyle}
              examples={examples}
              setExamples={setExamples}
              setMessages={setMessages}
              chatHistory={chatHistory}
              setChatHistory={setChatHistory}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;