import { Link } from "react-router-dom";
import "./Home.css";


function Home() {
  return (
    <div className="home">
      <h1>AI Study Assistant</h1>
      <p>Learn smarter. Practice better.</p>

      <Link to="/chat" className="home-btn">Ask AI</Link>
      <button>Quiz</button>
      

               <h2>Your Subjects</h2>

      <div className="subjects">
        <p>React</p>
                   <p>JavaScript</p>
        <p>Python</p>
        <p>HTML & CSS</p>
      </div>

    <h2>Continue Learning</h2>

      <div className="continue">
        <p>React → useEffect</p>
        <p>Progress: 60%</p>
      </div>
    </div>
  );
}

export default Home;

