import { useState } from "react"
function useTasks() {
    const [tasks, setTasks] = useState([])

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