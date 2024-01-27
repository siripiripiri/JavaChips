import { useContext } from "react";
import { MyContext } from "../../context";

const Stage5 = () => {
  const context = useContext(MyContext);
  return (
    <div className="psycho">
                <h4>Psychological Factors</h4>
                <input className="form-control" type="text" id="psycho" placeholder="Anxiety, Depression, etc."  onChange={(e)=>context.setPsychologicalCond(e.target.value)}/>
    </div>
  )
}

export default Stage5