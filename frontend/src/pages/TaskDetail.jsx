import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GlobalContext from "../Context/GlobalContext";
import Modal from "../Components/Modal";
import EditTaskModal from "../Components/EditTaskModal";
import "bootstrap/dist/css/bootstrap.min.css";

function TaskDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { useTasks } = useContext(GlobalContext);
    const { tasks, getTasks, removeTask, updateTask } = useTasks();
    const [task, setTask] = useState(null);
    const [showDelete, setShowDelete] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);

    useEffect(() => {
        getTasks();
    }, []);

    useEffect(() => {
        setTask(tasks.find(e => e.id == id));
    }, [tasks, id]);

    return (
        <div className="container mt-4">
            {task ? (
                <div className="card p-4 shadow">
                    <h1 className="text-center mb-3">{task.title}</h1>
                    <p><strong>Descrizione:</strong> {task.description}</p>
                    <p><strong>Stato:</strong> {task.status}</p>
                    <p><strong>Data creazione:</strong> {new Date(task.createdAt).toLocaleDateString()}</p>
                    <div className="d-flex justify-content-between mt-3">
                        <button className="btn btn-danger" onClick={() => setShowDelete(true)}>Elimina Task</button>
                        <button className="btn btn-warning" onClick={() => setShowUpdate(true)}>Modifica</button>
                    </div>
                    <Modal
                        title="Modale Rimozione"
                        content="Sei sicuro di voler Eliminare questa Task?"
                        show={showDelete}
                        onClose={() => setShowDelete(false)}
                        onConfirm={() => {
                            try {
                                removeTask(id);
                                alert("Task Eliminata con Successo");
                            } catch {
                                alert("Errore, Task non Eliminata");
                            } finally {
                                navigate('/task');
                            }
                        }}
                    />
                    <EditTaskModal
                        show={showUpdate}
                        onClose={() => setShowUpdate(false)}
                        task={task}
                        onSave={updateTask}
                    />
                </div>
            ) : (
                <div className="alert alert-danger text-center">Id non trovato</div>
            )}
        </div>
    );
}

export default TaskDetail;