import React, {useState, useContext, createContext} from 'react';

const GlobalContext = createContext();



const UseGlobalContext = ({children})=>{
const [mode, setMode] = useState("light");
    return (
      <GlobalContext.Provider value={{ mode, setMode }}>
        {children}
      </GlobalContext.Provider>
    );
}

const UseGlobalContext2 = ()=>{
    return useContext(GlobalContext);
}

export { UseGlobalContext, UseGlobalContext2 };