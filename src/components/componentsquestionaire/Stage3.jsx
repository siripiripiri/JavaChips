import { useContext } from "react";
import { MyContext } from "../../context";

const Stage3 = () => {
  const context = useContext(MyContext);
  return (
    <div  className="allergies">
                <h4>Do you have allergies?</h4>
                <input className="form-control" type="text" id="allergies" placeholder="Peanut allergy" onChange={(e)=>context.setAllergies(e.target.value)}/>
    </div>
  )
}

export default Stage3