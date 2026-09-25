import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Settings from "./pages/Settings";

function App() {
  const translations = {
  English: {  
              title: "AI Study Assistant",
              subtitle: "Learn smarter. Practice better.",
              ready: "Ready to learn?",
              askAI: "Ask AI",
              subjects: "Your Subjects",
              // ============for chat===========
              chatTitle: "AI Tutor",
              askAnything: "Ask anything...",
              noHistory: "No previous chats",
              newChat: "New Chat",
              settings: "Settings",
              howCanIHelp: "How can I help you?",
              chatDescription: "Ask your AI tutor about your subjects, programming, or anything you're learning.",
              aiWarning: "AI Study Assistant can make mistakes. Check important information.",
              // ==============for settings ===================
              settingsTitle: "Settings",
              appearance: "Appearance",
              darkMode: "Dark Mode",
              language: "Language",
              learningPreferences: "Learning Preferences",
              subject: "Subject",
              difficulty: "Difficulty",
              responseStyle: "Response Style",
              examples: "Show Examples",
              studyGoals: "Study Goals",
              dailyGoal: "Daily Study Goal",
              notifications: "Notifications",
              studyReminder: "Study Reminder",
              quizReminder: "Quiz Reminder",
              data: "Data",
              clearHistory: "Clear Chat History",
              resetSettings: "Reset Settings"
           },

  Pashto: {   
              title: "د AI د مطالعې مرستیال",
              subtitle: "هوښیار زده کړه. ښه تمرین وکړه.",
              ready: "زده کړې ته چمتو یې؟",
              askAI: " څخه وپوښته AI له",
              subjects: "ستاسو مضمونونه",
              // ============for chat===========
              chatTitle: "AI ښوونکی",
              askAnything: "هر څه وپوښتئ...",
              noHistory: "پخوانۍ خبرې نشته",
              newChat: "نوې خبرې",
              settings: "تنظیمات",
              howCanIHelp: "څنګه درسره مرسته وکړم؟",
              chatDescription: "له خپل AI ښوونکي څخه د خپلو مضامینو، پروګرامینګ یا هر هغه څه په اړه پوښتنه وکړئ چې زده کوئ.",
              aiWarning: "د AI مطالعې مرستیال ممکن تېروتنې وکړي. مهم معلومات وڅېړئ.",
              // =============for settings==========================
              settingsTitle: "تنظیمات",
              appearance: "بڼه",
              darkMode: "تیاره حالت",
              language: "ژبه",
              learningPreferences: "د زده کړې غوره توبونه",
              subject: "مضمون",
              difficulty: "کچه",
              responseStyle: "د ځواب ډول",
              examples: "مثالونه ښکاره کول",
              studyGoals: "د مطالعې موخې",
              dailyGoal: "د ورځنۍ مطالعې موخه",
              notifications: "خبرتیاوې",
              studyReminder: "د مطالعې یادونه",
              quizReminder: "د کوییز یادونه",
              data: "ډاټا",
              clearHistory: "د خبرو تاریخ پاکول",
              resetSettings: "تنظیمات بېرته لومړني حالت ته"
              
          },

  Dari: {   
            title: "دستیار مطالعه هوش مصنوعی",
            subtitle: "هوشمندانه یاد بگیرید. بهتر تمرین کنید.",
            ready: "برای یادگیری آماده‌اید؟",
            askAI: "از هوش مصنوعی بپرسید",
            subjects: "مضامین شما",

            // ============for chat===========
            chatTitle: "معلم هوش مصنوعی",
            askAnything: "هر چیزی بپرسید...",
            noHistory: "گفتگوهای قبلی وجود ندارد",
            newChat: "گفتگوی جدید",
            settings: "تنظیمات",
            howCanIHelp: "چگونه می‌توانم کمک کنم؟",
            chatDescription: "از معلم هوش مصنوعی خود درباره مضامین، برنامه‌نویسی یا هر چیزی که یاد می‌گیرید بپرسید.",
            aiWarning: "دستیار مطالعه هوش مصنوعی ممکن است اشتباه کند. اطلاعات مهم را بررسی کنید.",
            // =============for setings==================
            settingsTitle: "تنظیمات",
            appearance: "ظاهر",
            darkMode: "حالت تاریک",
            language: "زبان",
            learningPreferences: "تنظیمات یادگیری",
            subject: "مضمون",
            difficulty: "سطح دشواری",
            responseStyle: "نوع پاسخ",
            examples: "نمایش مثال‌ها",
            studyGoals: "اهداف مطالعه",
            dailyGoal: "هدف مطالعه روزانه",
            notifications: "اعلان‌ها",
            studyReminder: "یادآوری مطالعه",
            quizReminder: "یادآوری آزمون",
            data: "داده‌ها",
            clearHistory: "پاک کردن تاریخچه گفتگو",
            resetSettings: "بازنشانی تنظیمات"
        }
};
  
  const [subject, setSubject] = useState("");
  
  const [rstyle, setRstyle] = useState("Beginner");
  const [examples, setExamples] = useState(false);

  const [language, setLanguage] = useState(() => {
  const savedLanguage = localStorage.getItem("language");

  if (savedLanguage) {
    return savedLanguage;
  }

  return "English";
});
useEffect(() => {
  localStorage.setItem("language", language);
}, [language]);


  const [darkMode, setDarkMode] = useState(() => {
  const savedDarkMode = localStorage.getItem("darkMode");
  if (savedDarkMode) {
    return JSON.parse(savedDarkMode);
  }
  return false;
   });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

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
        <Route 
             path="/" element={
             <Home  
                translations={translations}
                language={language}
                darkMode={darkMode}
                                 />}  />

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
              translations={translations}
              
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
              translations={translations}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;