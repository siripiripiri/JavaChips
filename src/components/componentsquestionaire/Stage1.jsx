const Stage1 = () => {
  return (
    <div className="basicinfo">
            <div className='gender'>
                <h4>What is your Gender</h4>
                <button id="male">Male</button>
                <button id="female">Female</button>
            </div>
            <div className="age">
                <h4>How old are you?</h4>
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" />
            </div>
            <div className="wandh">
                <h4>Enter your Height and Weight</h4>
                <label htmlFor="weight">Weight:</label>
                <input type="number" id="weight" /><br />
                <label htmlFor="height">Height:</label>
                <input type="number" id="height" />
            </div>
    </div>
  )
}

export default Stage1
