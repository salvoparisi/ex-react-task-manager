import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import GlobalContext from "../Context/GlobalContext"
function TaskDetail() {
    const { id } = useParams()
    const { useTasks } = useContext(GlobalContext)
    const { tasks, getTasks } = useTasks()
    const [task, setTask] = useState({})

    useEffect(() => {
        getTasks()
    }, [])
    useEffect(() => {
        setTask(tasks.find(e => e.id == id))
    }, [tasks])

    function handleDelete() {
        console.log("Elimina");

    }
    return (
        <div>
            {task ? (
                <>
                    <h1>{task.title}</h1>
                    <p>Descrizione: {task.description}</p>
                    <p>Stato: {task.status}</p>
                    <p>Data creazione: {new Date(task.createdAt).toLocaleDateString()}</p>
                </>

            ) : <div>Caricamento...</div>}
            <button onClick={handleDelete}>Elimina Task</button>
        </div>
    )
}

export default TaskDetail