import { useContext } from "react"
import GlobalContext from "../Context/GlobalContext";
function useTasks() {
    const { tasks, setTasks, apiUrl } = useContext(GlobalContext);
    function getTasks() {
        fetch(`${apiUrl}/tasks`)
            .then((res) => res.json())
            .then((data) => setTasks(data))
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