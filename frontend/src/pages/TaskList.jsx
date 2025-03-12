import { useEffect } from "react"

function TaskList() {
    const apiUrl = import.meta.env.VITE_API_URL
    useEffect(() => {
        console.log(import.meta.env);

    }, [])
    return (
        <div>tasklist</div>
    )
}

export default TaskList