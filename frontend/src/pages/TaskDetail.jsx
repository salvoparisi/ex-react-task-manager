import { useContext, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import GlobalContext from "../Context/GlobalContext"
function TaskDetail() {
    const navigate = useNavigate()
    const { id } = useParams()
    const { useTasks } = useContext(GlobalContext)
    const { tasks, getTasks, removeTask } = useTasks()
    const [task, setTask] = useState({})
    const [verify, setVerify] = useState(0)

    useEffect(() => {
        getTasks()
    }, [])
    useEffect(() => {
        setTask(tasks.find(e => e.id == id))
    }, [tasks])

    function handleDelete() {
        removeTask(id)
        navigate("/task")
    }
    function handleVerify() {
        setVerify(prev => prev + 1)
    }

    return (
        <div>
            {task ? (
                <>
                    <h1>{task.title}</h1>
                    <p>Descrizione: {task.description}</p>
                    <p>Stato: {task.status}</p>
                    <p>Data creazione: {new Date(task.createdAt).toLocaleDateString()}</p>
                    <button onClick={handleVerify}>Elimina Task</button>
                    <div style={{ display: verify % 2 == 0 ? "none" : "block" }}>
                        <div>Vuoi Eliminare la Task?</div>
                        <button onClick={handleVerify} className="btn">NO</button>
                        <button onClick={handleDelete} className="btn btn-primary">SI</button>
                    </div>
                </>

            ) : <div>Id non trovato</div>}
        </div>
    )
}

export default TaskDetail