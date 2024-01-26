import { createContext, useState } from "react";

const MyContext = createContext();
const MyProvider = (props) => {
    

    
    return(
        <MyContext.Provider value={{
            stage: stage
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export {MyContext,MyProvider}