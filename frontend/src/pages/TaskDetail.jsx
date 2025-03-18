import { useContext, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import GlobalContext from "../Context/GlobalContext"
import Modal from "../Components/Modal"
import EditTaskModal from "../Components/EditTaskModal"
function TaskDetail() {
    const navigate = useNavigate()
    const { id } = useParams()
    const { useTasks } = useContext(GlobalContext)
    const { tasks, getTasks, removeTask, updateTask } = useTasks()
    const [task, setTask] = useState({})
    const [showDelete, setShowDelete] = useState(false)
    const [showUpdate, setShowUpdate] = useState(false)

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
                    <button onClick={() => setShowDelete(true)}>Elimina Task</button>
                    <Modal
                        title="Modale Rimozione"
                        content="Sei sicuro di voler Eliminare questa Task?"
                        show={showDelete}
                        onClose={() => setShowDelete(false)}
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
                    <button onClick={() => setShowUpdate(true)}>Modifica</button>
                    <EditTaskModal
                        show={showUpdate}
                        onClose={() => setShowUpdate(false)}
                        task={task}
                        onSave={updateTask}
                    />
                </>

            ) : <div>Id non trovato</div>}
        </div>
    )
}

export default TaskDetail