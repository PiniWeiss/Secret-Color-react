import { createContext, useState } from "react";
import { useToggle } from "../hooks/useToggle";

 export const InformationContext = createContext(null);

export default function InformationContextProvider({children}){
      const {message, keepSearching, success} = useToggle()
        return(
            <InformationContext.Provider value ={{message, keepSearching, success}}>
                {children}
            </InformationContext.Provider>
        )
}
