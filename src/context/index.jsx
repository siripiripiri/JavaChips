
import { createContext, useState } from "react";

const MyContext = createContext({showModal:()=>{}});
const MyProvider = (props) => {
    const [uid,setUid] = useState("")
    const [username,setUsername] = useState("")
    const [age,setAge] = useState(0);
    const [allergies,setAllergies] = useState("");
    const [gender,setGender] = useState("");
    const [height,setHeight] = useState(0);
    const [weight,setWeight] = useState(0);
    const [mediConditions, setMediConditions] = useState("");
    const [mediHistory, setMediHistory] = useState("");
    const [psychologicalCond, setPsychologicalCond] = useState("");

    console.log(gender);


    
    return(
        <MyContext.Provider value={{
            setGender: ()=> setGender("Male"),
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export {MyContext,MyProvider}