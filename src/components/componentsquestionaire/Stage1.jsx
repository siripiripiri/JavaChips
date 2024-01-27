import { useContext } from "react"
import { MyContext } from "../../context"

const Stage1 = () => {

  const context = useContext(MyContext);

  return (
            <>
              <div  className="form-outline mb-4">
              <h4>What is your Gender</h4>
              <div className="d-flex">
                <button id="male" className="btn btn-lg login" onClick={() => context.setGender("Male")}>Male</button>
                <button id="female" className="btn btn-lg login" onClick={() => context.setGender("Female")}>Female</button>
                <input type="text" className="form-control form-control-md other" placeholder="Other" onChange={(e) => context.setGender(e.target.value)} />
              </div>
              </div>
                <div  className="form-outline mb-4">
                <h4>How old are you?</h4>
                <input className="form-control other" type="number" id="age" onChange={(e) => context.setAge(e.target.value)} />
              </div>
              <div className="wandh">
                <h4>Enter your Height and Weight</h4>
                <input className="form-control other" placeholder="Height in Cms" type="number" id="weight" onChange={(e) => context.setWeight(e.target.value)} /><br />
                <input className="form-control other" placeholder="Weight in Kgs" type="number" id="height" onChange={(e) => context.setHeight(e.target.value)} />
              </div>
            </>

  )
}

export default Stage1
