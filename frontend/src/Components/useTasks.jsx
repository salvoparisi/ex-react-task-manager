import { useContext, useState } from "react"
import GlobalContext from "../Context/GlobalContext";
function useTasks() {
    const { apiUrl } = useContext(GlobalContext);
    const [tasks, setTasks] = useState([])
    function getTasks() {
        fetch(`${apiUrl}/tasks`)
            .then((res) => res.json())
            .then((data) => setTasks(data))
            .catch((error) => console.error("Errore nel fetch:", error))
    }
    function addTask() {

    }
    function removeTask() {

    }
    function updateTask() {

    }
    return { tasks, getTasks, addTask, removeTask, updateTask }
}

export default useTasks