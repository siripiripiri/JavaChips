import { createContext, useState } from "react";

const MyContext = createContext();
const MyProvider = (props) => {

    const [stage, setStage] = useState(1);

    
    return(
        <MyContext.Provider value={{
            stage: stage
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export {MyContext,MyProvider}