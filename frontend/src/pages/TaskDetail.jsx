import { useContext, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import GlobalContext from "../Context/GlobalContext"
import Modal from "../Components/Modal"
function TaskDetail() {
    const navigate = useNavigate()
    const { id } = useParams()
    const { useTasks } = useContext(GlobalContext)
    const { tasks, getTasks, removeTask } = useTasks()
    const [task, setTask] = useState({})
    const [show, setShow] = useState(false)

    useEffect(() => {
        getTasks()
    }, [])
    useEffect(() => {
        setTask(tasks.find(e => e.id == id))
    }, [tasks])



    return (
        <div>
            {task ? (
                <>
                    <h1>{task.title}</h1>
                    <p>Descrizione: {task.description}</p>
                    <p>Stato: {task.status}</p>
                    <p>Data creazione: {new Date(task.createdAt).toLocaleDateString()}</p>
                    <button onClick={() => setShow(true)}>Elimina Task</button>
                    <Modal
                        title="Modale Rimozione"
                        content="Sei sicuro di voler Eliminare questa Task?"
                        show={show}
                        onClose={() => setShow(false)}
                        onConfirm={() => {
                            try {
                                removeTask(id)
                                alert("Task Eliminata con Successo")
                            } catch {
                                alert("Errore, Task non Eliminata")
                            } finally {
                                navigate('/task')
                            }
                        }}
                    />
                </>

            ) : <div>Id non trovato</div>}
        </div>
    )
}

export default TaskDetail