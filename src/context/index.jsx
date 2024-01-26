import { createContext } from "react";

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