import { useEffect, useContext, memo } from "react";
import GlobalContext from "../Context/GlobalContext";
import TaskRow from "../Components/TaskRow";

function TaskList() {
    const { useTasks } = useContext(GlobalContext);
    const { tasks, getTasks } = useTasks()

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <table border="1" width="50%">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Stato</th>
                    <th>Data di Creazione</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <TaskRow key={task.id} {...task} />
                ))}
            </tbody>
        </table>
    );
}

export default TaskList;