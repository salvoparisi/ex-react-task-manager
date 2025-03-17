function Modal({ show, title, content, onClose, onConfirm }) {

    return show && (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={onClose}>Annulla</button>
            <button onClick={onConfirm}>Conferma</button>
        </div>
    )
}

export default Modal