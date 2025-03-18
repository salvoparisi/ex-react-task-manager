import { useEffect, useContext, useState, useMemo } from "react";

import GlobalContext from "../Context/GlobalContext";
import TaskRow from "../Components/TaskRow";

function TaskList() {
    const { useTasks } = useContext(GlobalContext);
    const { tasks, getTasks } = useTasks()
    const [sortBy, setSortBy] = useState("createdAt")
    const [sortOrder, setSortOrder] = useState(1)

    useEffect(() => {
        getTasks();
    }, []);

    function handleSort(col) {
        if (sortBy === col) {
            setSortOrder(prev => -prev)
        } else {
            setSortBy(col)
            setSortOrder(1)
        }
    }

    const sortedTask = useMemo(() => {
        return [...tasks].sort((a, b) => {
            let i = 0
            if (sortBy === "title") {
                i = a.title.localeCompare(b.title)
            } else if (sortBy === "status") {
                const obj = { "To do": 1, "Doing": 2, "Done": 3 }
                i = obj[a.status] - obj[b.status]
            } else if (sortBy === "createdAt") {
                i = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            }

            return i * sortOrder
        })
    }, [tasks, sortBy, sortOrder])

    return (

        <table border="1" width="50%">
            <thead>
                <tr>
                    <th onClick={() => handleSort("title")}>Nome</th>
                    <th onClick={() => handleSort("status")}>Stato</th>
                    <th onClick={() => handleSort("createdAt")}>Data di Creazione</th>
                </tr>
            </thead>
            <tbody>
                {sortedTask.map((task) => (
                    <TaskRow key={task.id} {...task} />
                ))}
            </tbody>
        </table>

    );
}

export default TaskList;