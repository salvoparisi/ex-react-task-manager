import { useState } from "react";
import { createPortal } from "react-dom";

function EditTaskModal({ show, task, onSave, onClose }) {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [status, setStatus] = useState(task.status);

    function onConfirm() {
        try {
            onSave(task.id, { title, description, status });
            alert("Task modificata con Successo!");
            onClose();
        } catch {
            alert("Errore nella Modifica");
        }
    }

    return show && createPortal(
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modifica Task</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label className="form-label">Titolo</label>
                            <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Descrizione</label>
                            <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Stato</label>
                            <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="To do">To do</option>
                                <option value="Doing">Doing</option>
                                <option value="Done">Done</option>
                            </select>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Annulla</button>
                        <button type="button" className="btn btn-primary" onClick={onConfirm}>Salva</button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}

export default EditTaskModal;