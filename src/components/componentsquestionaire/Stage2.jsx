import { useContext } from "react";
import { MyContext } from "../../context";

const Stage2 = () => {
  const context = useContext(MyContext);
  return (
    <div className="medcond">
                <h4>Do you have any existing medical conditions?</h4>
                <input className="form-control" type="text" id="medicalconditions" placeholder="Diabetes, Skill issue" onChange={(e)=>context.setMediConditions(e.target.value)} />
    </div>
  )
}

export default Stage2