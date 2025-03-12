import { useEffect } from "react"

function TaskList() {
    const apiUrl = import.meta.env.VITE_API_URL
    useEffect(() => {
        console.log(apiUrl);

    }, [])
    return (
        <div>tasklist</div>
    )
}

export default TaskList