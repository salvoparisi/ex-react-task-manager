import { useState, useRef, useContext } from "react";
import GlobalContext from "../Context/GlobalContext";
import "bootstrap/dist/css/bootstrap.min.css";

function AddTask() {
    const { useTasks } = useContext(GlobalContext);
    const { addTask } = useTasks();
    const [title, setTitle] = useState("");
    const description = useRef();
    const status = useRef();
    const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

    function handleSubmit() {
        if (validateTitle()) {
            alert("Non sono consentiti simboli nel titolo");
        } else if (title.length < 1) {
            alert("Inserire un Titolo");
        } else if (!description.current.value) {
            alert("Inserire una descrizione");
        } else if (!status.current.value) {
            alert("Inserire uno stato");
        } else {
            try {
                addTask({
                    title: title,
                    description: description.current.value,
                    status: status.current.value
                });
                setTitle("");
                description.current.value = "";
                status.current.value = "";
                alert("Task Inviata con Successo!");
            }
            catch (err) {
                console.log(err);
            }
        }
    }

    function validateTitle() {
        return [...symbols].some(symbol => title.includes(symbol));
    }

    return (
        <div className="container mt-4">
            <div className="card p-4 shadow">
                <h3 className="text-center mb-3">Aggiungi Task</h3>
                <div className="mb-3">
                    <label className="form-label">Titolo:</label>
                    <input
                        type="text"
                        className={`form-control ${validateTitle() || title.length < 1 ? "is-invalid" : "is-valid"}`}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Descrizione:</label>
                    <textarea className="form-control" ref={description}></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Stato:</label>
                    <select className="form-select" ref={status} defaultValue="">
                        <option value="" disabled>Seleziona uno stato</option>
                        <option value="To do">To do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
                <button className="btn btn-primary w-100" onClick={handleSubmit}>Invia</button>
            </div>
        </div>
    );
}

export default AddTask;