import { createContext } from "react";
import useTasks from "../Components/useTasks";
const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const apiUrl = import.meta.env.VITE_API_URL

    return (
        <GlobalContext.Provider value={{ apiUrl, useTasks }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext