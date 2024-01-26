import { addDoc, collection, doc, setDoc } from "firebase/firestore"; 
import { createContext, useEffect, useState } from "react";
import { db } from "../config/firebase";

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

    const userCollectionRef = collection(db,"Users");

    const submitQuestionaire = async () => {
        console.log("Hi")
        try{
        await addDoc(userCollectionRef,{
            name:username,
            age:age,
            allergies:allergies,
            gender:gender,
            height:height,
            medical_conditions:mediConditions,
            medical_history:mediHistory,
            psychological:psychologicalCond,
            uid:uid,
            weight:weight,

        })}
        catch (err) {
            console.error(err)
        }
    }
    
    return(
        <MyContext.Provider value={{
            setGender:setGender,
            setUid:setUid,
            setAge:setAge,
            setAllergies,setAllergies,
            setHeight:setHeight,
            setWeight:setWeight,
            setMediConditions:setMediConditions,
            setMediHistory:setMediHistory,
            setPsychologicalCond:setPsychologicalCond,
            submitQuestionaire:submitQuestionaire,
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export {MyContext,MyProvider}