import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../config/firebase";

const MyContext = createContext();
const MyProvider = (props) => {

 

    
    return(
        <MyContext.Provider value={{
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export {MyContext,MyProvider}