import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context"
import Stage1 from "./componentsquestionaire/Stage1";
import Stage2 from "./componentsquestionaire/Stage2";
import Stage3 from "./componentsquestionaire/Stage3";
import Stage4 from "./componentsquestionaire/Stage4";
import Stage5 from "./componentsquestionaire/Stage5";
import Questionaireimage from "../images/Thinking face-cuate.png"

const Questionaire = () => {
    const context = useContext(MyContext);
    const navigate = useNavigate()
    const [stage, setStage] = useState(1);
  return (
        <section className="vh-100">
          <div className="container-fluid h-custom">
              <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
              <img src={Questionaireimage} className="img-fluid"/>
              </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
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
                    stage === 1 ? null : <button className="btn btn-lg login" onClick={()=>setStage(stage-1)}>Back</button>
                  }
                  {
                    stage === 5 ? null : <button className="btn btn-lg login" onClick={()=>setStage(stage+1)}>Next</button>
                  }
                  {
                    stage === 5 ? <button className="btn btn-lg login" onClick={()=>{context.submitQuestionaire(); navigate("/home")}}>Submit</button> : null
                  }
                </div>
              </div>
           </div>
        </section>
  )
}

export default Questionaire