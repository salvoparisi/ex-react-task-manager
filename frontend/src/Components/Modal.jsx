import { createPortal } from "react-dom"
function Modal({ show, title, content, onClose, onConfirm }) {

    return show && createPortal(
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={onClose}>Annulla</button>
            <button onClick={onConfirm}>Conferma</button>
        </div>,
        document.body
    )
}

export default Modal