
import "./Settings.css";

function Settings({
  subject,
  setSubject,
  darkMode,
  setDarkMode,
  language,
  setLanguage,
  rstyle,
  setRstyle,
  examples,
  setExamples,
  messages,
  setMessages,
  chatHistory,
  setChatHistory,
  translations
}) {

  // CLEAR CHAT HISTORY
  function clearHistory() {
    setMessages([]);
    setChatHistory([]);
  }

  // RESET SETTINGS
  function resetSettings() {
    setDarkMode(false);
    setLanguage("English");
    setRstyle("Beginner");
    setExamples(false);
    setSubject("React");
  }

  return (
    <div className={darkMode ? "Settings-main dark" : "Settings-main"}>

      {/* PAGE HEADER */}

      <div className="settings-header">
        <h1>{translations[language].settingsTitle}</h1>

        <p>
          {translations[language].settingsDescription}
        </p>
      </div>


      {/* APPEARANCE */}

      <section className="settings-section">

        <h2>{translations[language].appearance}</h2>

        <div className="setting-card">

          <div className="setting-info">
            <h3>{translations[language].darkMode}</h3>

            <p>
              {translations[language].darkModeDescription}
            </p>
          </div>

          <label className="switch">

            <input
              type="checkbox"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
            />

            <span className="slider"></span>

          </label>

        </div>

      </section>


      {/* LANGUAGE */}

      <section className="settings-section">

        <h2>{translations[language].language}</h2>

        <div className="setting-card">

          <div className="setting-info">

            <h3>{translations[language].language}</h3>

            <p>
              {translations[language].selectedLanguage} {language}
            </p>

          </div>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Pashto">Pashto</option>
            <option value="Dari">Dari</option>
          </select>

        </div>

      </section>


      {/* LEARNING */}

      <section className="settings-section">

        <h2>{translations[language].learningPreferences}</h2>


        {/* SUBJECT */}

        <div className="setting-card">

          <div className="setting-info">

            <h3>{translations[language].subject}</h3>

            <p>
              {translations[language].selectedSubject} {subject}
            </p>

          </div>

          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="React">React</option>
            <option value="Java">Java</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="C#">C#</option>
          </select>

        </div>


        {/* RESPONSE STYLE */}

        <div className="setting-card">

          <div className="setting-info">

            <h3>{translations[language].responseStyle}</h3>

            <p>
              {translations[language].selectedResponse} {rstyle}
            </p>

          </div>

          <select
            value={rstyle}
            onChange={(e) => setRstyle(e.target.value)}
          >
            <option value="Beginner">Beginner</option>
            <option value="Normal">Normal</option>
            <option value="Detailed">Detailed</option>
          </select>

        </div>


        {/* EXAMPLES */}

        <div className="setting-card">

          <div className="setting-info">

            <h3>{translations[language].examples}</h3>

            <p>
              {translations[language].includeExamples}
            </p>

          </div>

          <label className="switch">

            <input
              type="checkbox"
              checked={examples}
              onChange={(e) => setExamples(e.target.checked)}
            />

            <span className="slider"></span>

          </label>

        </div>

      </section>


      {/* STUDY */}

      <section className="settings-section">

        <h2>{translations[language].studyGoals}</h2>

        <div className="setting-card">

          <div className="setting-info">

            <h3>{translations[language].dailyGoal}</h3>

            <p>
              {translations[language].currentGoal}
            </p>

          </div>

          <select defaultValue="30 min">
            <option value="30 min">30 min</option>
            <option value="1 Hour">1 Hour</option>
            <option value="2 Hours">2 Hours</option>
            <option value="3 Hours">3 Hours</option>
            <option value="4 Hours">4 Hours</option>
            <option value="5 Hours">5 Hours</option>
          </select>

        </div>

      </section>


      {/* DATA */}

      <section className="settings-section">

        <h2>{translations[language].data}</h2>

        <div className="setting-card danger-card">

          <div className="setting-info">

            <h3>{translations[language].clearHistory}</h3>

            <p>
              {translations[language].clearHistoryDescription}
            </p>

          </div>

          <button
            className="Clear-History"
            onClick={clearHistory}
          >
            {translations[language].clearHistory}
          </button>

        </div>

      </section>


      {/* RESET */}

      <section className="settings-section reset-section">

        <button
          className="Reset"
          onClick={resetSettings}
        >
          {translations[language].resetSettings}
        </button>

      </section>

    </div>
  );
}

export default Settings;

