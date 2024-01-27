import { useContext } from "react";
import { MyContext } from "../../context";

const Stage4 = () => {
  const context = useContext(MyContext);
  return (
    <div className="fammedhis">
                <h4>Notable Medical History</h4>
                <input className="form-control" type="text" id="medicalhistory" placeholder="Heridatory disease, severe cured disease " onChange={(e)=>context.setMediHistory(e.target.value)}/> 
    </div>
  )
}

export default Stage4