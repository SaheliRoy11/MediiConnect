import { createContext, useContext } from "react";
import {doctors} from "../assets/assets";

const AppContext = createContext();

function AppContextProvider({children}) {
    const value={doctors};

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

function useAppContext() {
    const context = useContext(AppContext);

    if(context === undefined)
        throw new Error("App Context accessed outside of AppContext Provider");

    return context;
}

export {AppContextProvider, useAppContext};