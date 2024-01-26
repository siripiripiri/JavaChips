import { useContext } from "react"
import { MyContext } from "../../context"

const Stage1 = () => {

  const context = useContext(MyContext);

  return (
    <div className="basicinfo">
            <div className='gender'>
                <h4>What is your Gender</h4>
                <button id="male" onClick={()=>context.setGender("Male")}>Male</button>
                <button id="female" onClick={()=>context.setGender("Female")}>Female</button>
            </div>
            <div className="age">
                <h4>How old are you?</h4>
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" onChange={(e)=>context.setAge(e.target.value)} />
            </div>
            <div className="wandh">
                <h4>Enter your Height and Weight</h4>
                <label htmlFor="weight">Weight:</label>
                <input type="number" id="weight"  onChange={(e)=>context.setWeight(e.target.value)}/><br />
                <label htmlFor="height">Height:</label>
                <input type="number" id="height"  onChange={(e)=>context.setHeight(e.target.value)}/>
            </div>
    </div>
  )
}

export default Stage1
