import { useEffect, useContext } from "react"
import ContextApi from "../Context/ContextApi";

function TaskList() {
    const apiUrl = useContext(ContextApi)
    useEffect(() => {
        console.log(apiUrl);

    }, [])
    return (
        <div>tasklist</div>
    )
}

export default TaskList