import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context"
import Stage1 from "./componentsquestionaire/Stage1";
import Stage2 from "./componentsquestionaire/Stage2";
import Stage3 from "./componentsquestionaire/Stage3";
import Stage4 from "./componentsquestionaire/Stage4";
import Stage5 from "./componentsquestionaire/Stage5";


const Questionaire = () => {
    const context = useContext(MyContext);
    const navigate = useNavigate()
    const [stage, setStage] = useState(1);
  return (
    <>
        <div>
            {
                stage === 1 ? 
                <Stage1 />
                :
                stage === 2 ?
                <Stage2 />
                :
                stage === 3 ?
                <Stage3 />
                :
                stage === 4 ?
                <Stage4 />
                :
                stage === 5 ?
                <Stage5 />
                :
                null
            }
            {
              stage === 1 ? null : <button onClick={()=>setStage(stage-1)}>Back</button>
            }
            {
              stage === 5 ? null : <button onClick={()=>setStage(stage+1)}>Next</button>
            }
            {
              stage === 5 ? <button onClick={()=>{
                context.submitQuestionaire();
                navigate('/home')
              }}>Submit</button> : null
            }
        </div>
    </>
  )
}

export default Questionaire