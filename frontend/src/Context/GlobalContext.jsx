import { createContext, useState } from "react";
import useTasks from "../Components/useTasks";
const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])
    const apiUrl = import.meta.env.VITE_API_URL


    return (
        <GlobalContext.Provider value={{ apiUrl, tasks, setTasks, useTasks }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext