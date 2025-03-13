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

    function addTask(task) {
        fetch(`${apiUrl}/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    function removeTask(id) {
        fetch(`${apiUrl}/tasks/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert("Task Eliminata con Successo")
            })
            .catch(err => console.log(err))
    }
    function updateTask() {

    }
    return { tasks, getTasks, addTask, removeTask, updateTask }
}

export default useTasks