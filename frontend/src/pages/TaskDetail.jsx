import { useParams, Link } from "react-router-dom"
function TaskDetail() {
    const id = useParams(id)
    return (
        <div>{id}</div>
    )
}

export default TaskDetail