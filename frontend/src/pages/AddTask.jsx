import { useState, useRef, useContext } from "react"
import GlobalContext from "../Context/GlobalContext"
function AddTask() {
    const { useTasks } = useContext(GlobalContext)
    const { addTask } = useTasks()
    const [title, setTitle] = useState("")
    const description = useRef()
    const status = useRef()
    const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

    function handleSubmit() {
        if (validateTitle()) {
            alert("Non sono consentiti simboli nel titolo");
        } else if (title.length < 1) {
            alert("Inserire un Titolo")
        } else if (!description.current.value) {
            alert("Inserire una descrizione")
        } else if (!status.current.value) {
            alert("Inserire uno stato")
        } else {
            try {
                addTask({
                    title: title,
                    description: description.current.value,
                    status: status.current.value
                })
                setTitle("");
                description.current.value = "";
                status.current.value = "";
                alert("Task Inviata con Successo!")
            }
            catch (err) {
                console.log(err);
            }
        }
    }
    function validateTitle() {
        const titleBoolean = [...symbols].some(symbol => title.includes(symbol))
        return titleBoolean
    }

    return (
        <div className="d-flex">
            <div>
                <div>Titolo:</div>
                <input value={title} type="text" onChange={(e) => setTitle(e.target.value)} style={{ background: validateTitle() ? "red" : title.length < 1 ? "red" : "green" }} />
            </div>
            <div>
                <div>Descrizione:</div>
                <textarea name="description" id="" ref={description}></textarea>
            </div>

            <select name="status" id="" ref={status} defaultValue="">
                <option value="" disabled selected>Seleziona uno stato</option>
                <option value="To do"> To do</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
            </select>
            <button onClick={handleSubmit}>Invia</button>
        </div>
    )
}

export default AddTask