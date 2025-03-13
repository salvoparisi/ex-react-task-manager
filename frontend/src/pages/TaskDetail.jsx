import { useParams } from "react-router-dom"
function TaskDetail() {
    const { id } = useParams()
    return (
        <div>{id}</div>
    )
}

export default TaskDetail