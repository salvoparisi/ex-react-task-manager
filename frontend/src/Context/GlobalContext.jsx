import { createContext, useState } from "react";
const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])
    const apiUrl = import.meta.env.VITE_API_URL

    function fetchTasks() {
        fetch(`${apiUrl}/tasks`)
            .then((res) => res.json())
            .then((data) => setTasks(data))
    }


    return (
        <GlobalContext.Provider value={{ tasks, fetchTasks }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext