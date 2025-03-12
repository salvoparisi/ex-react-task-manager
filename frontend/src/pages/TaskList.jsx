import { useEffect, useContext, useState } from "react"
import ContextApi from "../Context/ContextApi";

function TaskList() {
    const apiUrl = useContext(ContextApi)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch(`${apiUrl}/tasks`)
            .then((res) => res.json())
            .then((data) => setTasks(data))
    })

    return (
        <div>tasklist</div>
    )
}

export default TaskList