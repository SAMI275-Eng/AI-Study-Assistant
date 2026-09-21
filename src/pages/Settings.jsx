import "./Settings.css"
import { useState } from "react"
function Settings({subject,setSubject,
                  darkMode,setDarkMode,
                  language,setLanguage,
                  rstyle,setRstyle,
                  examples,setExamples,
                  messages,setMessages,
                  chatHistory,setChatHistory}){

    // const [darkMode,setDarkMode]= useState(false);
    // const [language,setLanguage] =useState("English");
    // const [rstyle,setRstyle] = useState("Beginner");
    // const [examples,setExamples] =useState(false);
    // const [subject,setSubject] =useState("react");
    
   const[examType,setExamType]=useState("Easy");
   const [chat,setChat] =useState(false);
   const [dailyGoal,setDailyGoal]=useState("30 min");
   const [studyremineder,setStudyreminder]=useState(false);
   const [quizreminder,setQuizreminder]=useState(false);

   function rest(){
     setDarkMode(false);
     setLanguage("English");
     setRstyle("Beginner");
     setExamples(false);
     setSubject("React");
     setExamType("Easy");
     setChat(false);
     setDailyGoal("30 min");
     setQuizreminder(false)
     setStudyreminder(false)
    
   }
   function clearHistory(){
    setMessages([])
    setChatHistory([])
   }
    
    return(
        <>
        <div  className={darkMode ? "Settings-main dark" : "Settings-main"}>

          <div className="Dark-mode">
            <label htmlFor="Dark">
                <input type="checkbox" id="Dark" checked={darkMode}
                onChange={(e)=>setDarkMode(e.target.checked)} />
                Dark on/off
            </label>
                
          </div>

        <div className="language">
            <h3>Languages</h3>
            <select name="" id="" value={language} onChange={(e)=>setLanguage(e.target.value)}> 
                
                <option value="Pashto">Pashto</option>
                <option value="Dari">Dari</option>
                <option value="English">English</option>
                
            </select>
            <p>Selected: {language}</p>
        </div>    

            <div className="Response">
                <h3>Response</h3>
                <select name="" id="" value={rstyle} onChange={(e)=>setRstyle(e.target.value)}>
                    <option value="Beginner">Beginner</option>
                    <option value="Normal">Normal</option>
                    <option value="Detailed">Detailed</option>
                </select>
                <p> R - Style : {rstyle}</p>
            </div>

            <div className="show-examples">
                <h3>Show example</h3>
                <label htmlFor="x">
                    <input type="checkbox" id="x" checked={examples}
                    onChange={(e)=>{setExamples(e.target.checked)}}/>
                     Include example
                </label>
                {examples ? <p>True</p> : <p>False</p>}
            </div>


            <div className="Subjects">
                <h3>Choose Subject</h3>
                <select name="" id="" value={subject} onChange={(e)=>setSubject(e.target.value)}>
                    <option value="React">React</option>
                    <option value="Java">Java</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Python">Python</option>
                    <option value="C#">C#</option>
                </select>
                <p>Subject : {subject}</p>
            </div>

                <div className="Quiz-type">
                    <h3>Exam Type</h3>
                    <select name="" id="" value={examType} onChange={(e)=>setExamType(e.target.value)}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>   
                    <p>Exam Type :{examType}</p>
                </div>
            
            <div className="History">
                <h3>Save Chat ?</h3>
                <label htmlFor="">
                    <input type="checkbox" checked={chat}
                    onChange={(e)=>setChat(e.target.checked)} />
                    save on /off
                </label>
               {chat ? <p>True</p> : <p>False</p>}
            </div>

            <div className="Daily-study-goal">
                <h3>Daily goal</h3>
                <select name="" id="" value={dailyGoal} onChange={(e)=>setDailyGoal(e.target.value)}>
                    <option value="30 min">30 min</option>
                    <option value="1 Hour">1 Hour</option>
                    <option value="2 Hour">2 Hour</option>
                    <option value="3 Hour">3 Hour</option>
                    <option value="4 Hour">4 Hour</option>
                    <option value="5 Hour">5 Hour</option>
                </select>
                <p>Spend-Time : {dailyGoal}</p>
            </div>

            <div className="study-reminder">
                <h3>Study reminder</h3>
                <label htmlFor="z">
                    <input type="checkbox" id="z" checked={studyremineder}
                    onChange={(e)=>setStudyreminder(e.target.checked)}/>
                    On/Off
                </label>
                {studyremineder ? <p>True</p> : <p>False</p>}
            </div>

            <div className="quiz-reminder">
                <h3>quiz reminder</h3>
                <label htmlFor="y">
                    <input type="checkbox" id="y" checked={quizreminder}
                    onChange={(e)=>setQuizreminder(e.target.checked)}/>
                    On/Off
                </label>
                {quizreminder ? <p>True</p> : <p>False</p>}
            </div>

            <div className="clear-H-R">
                
                <button className="Clear-History" onClick={clearHistory}>Clear History</button>
                <button className="Reset" onClick={rest}>Reset Progress</button>
            </div>
        

        </div>
        </>
    )
}

export default Settings