
import { Link } from "react-router-dom";
import "./Home.css";

function Home({language,translations,darkMode}) {
  return (
    <div className={darkMode ? "home dark" : "home"}>

      <div className="home-header">
        <div>
          <h1>{translations[language].title}</h1>
          <p>{translations[language].subtitle}</p>
        </div>
      </div>

      <div className="hero-card">
        <div>
          <h2>{translations[language].ready}</h2>
          <p>Ask your AI tutor anything about your studies.</p>
        </div>

        <Link to="/chat" className="home-btn">
          {translations[language].askAI} →
        </Link>
      </div>

      <h2>{translations[language].subjects}</h2>

      <div className="subjects">

        <div className="subject-card">
          <h3>⚛ React</h3>
          <p>Build modern user interfaces.</p>
        </div>

        <div className="subject-card">
          <h3>🟨 JavaScript</h3>
          <p>Learn programming for the web.</p>
        </div>

        <div className="subject-card">
          <h3>🐍 Python</h3>
          <p>Learn programming and problem solving.</p>
        </div>

        <div className="subject-card">
          <h3>🌐 HTML & CSS</h3>
          <p>Build and design web pages.</p>
        </div>

      </div>

      <h2>Continue Learning</h2>

      <div className="continue">

        <div className="continue-info">
          <h3>React → useEffect</h3>
          <p>You're making good progress.</p>
        </div>

        <div className="progress-section">
          <div className="progress-top">
            <span>Progress</span>
            <span>60%</span>
          </div>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;

