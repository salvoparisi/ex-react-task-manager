import { useEffect, useContext, memo } from "react";
import GlobalContext from "../Context/GlobalContext";
import TaskRow from "../Components/TaskRow";

function TaskList() {
    const { tasks, fetchTasks } = useContext(GlobalContext);

    useEffect(() => {
        fetchTasks();
    }, []);

    const ListMemo = memo(({ title, status, createdAt }) => {
        return <TaskRow title={title} status={status} createdAt={createdAt} />
    });

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
                    <ListMemo key={task.id} {...task} />
                ))}
            </tbody>
        </table>
    );
}

export default TaskList;