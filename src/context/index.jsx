import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore"; 
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../config/firebase";

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

    console.log(auth?.currentUser?.uid)


    
    const getUserData = async () => {
        
        console.log("UID" + uid)
        const docRef = doc(db,"Users", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data()
            console.log(data)
          } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
          }
    }




    const submitQuestionaire = async () => {
        console.log(uid)
        try{
        await setDoc(doc(db, "Users", uid), {
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
            setUsername:setUsername,
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
            getUserData:getUserData,
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export {MyContext,MyProvider}