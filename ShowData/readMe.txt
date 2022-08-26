1) 
We have datas in data.js

2)
App.js imports datas from data.js
import data from "./data";

and converts this data usestate object as questions
const [questions, setQuestions] = useState(data);



and mapping this object and sent to Question.js page

{questions.map((question) => (
        <Question key={question.id} {...question} />
      ))}
      
      
Please dont forget you need to import     
  import Question from "./Question";
  
  
3) 
Question.js firstly takes its props as
const Question = ({ id, title, info })

sets usestate for showing info
we choice firstly "false", when user clicks the button, this turns to true
const [showInfo, setShowInfo] = useState(false);

When user clicks the button showInfo turns to counterparty
<button onClick={() => setShowInfo(!showInfo)}>

If showInfo is true, sign will be "TRUE" in the screen
If showInfo is false, sign will be "FALSE" in the screen
{showInfo ? "TRUE" : "FALSE"}
      </button>
      
If showInfo is true, info variable will open
 {showInfo && <h6>{info}</h6>}
 
 repeat again
 
 This is only showing the state 
 {showInfo ? "TRUE" : "FALSE"}
 
 This is showing the "info" variable if showInfo is true;
 {showInfo && <h6>{info}</h6>}
 
 When we click the button showInfo turns to TRUE and we can see "info" variable.
 
 Doç.Dr. Engin YILMAZ
 




