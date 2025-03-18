import { useState } from "react"
function EditTaskModal({ show, task, onSave, onClose }) {
    const [title, setTitle] = useState(task.title)
    const [description, setDescription] = useState(task.description)
    const [status, setStatus] = useState(task.status)
    function onConfirm() {
        try {
            onSave(task.id, { title, description, status })
            alert("Task modificata con Successo!")
        } catch {
            alert("Errore nella Modifica")
        }
    }
    return show && (
        <div>
            <h2>Modifica Task</h2>

            <div>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea name="" id="" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <select name="" id="" defaultValue={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="To do"> To do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
            </div>

            <button onClick={onConfirm}>Salva</button>
            <button onClick={onClose}>Annulla</button>
        </div>
    )
}

export default EditTaskModal