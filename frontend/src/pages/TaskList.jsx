import { useEffect, useContext, useState, useMemo, useCallback } from "react";
import GlobalContext from "../Context/GlobalContext";
import TaskRow from "../Components/TaskRow";
import "bootstrap/dist/css/bootstrap.min.css";

function debounce(callback, delay) {
    let timer;
    return (value) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(value);
        }, delay);
    };
}

function TaskList() {
    const { useTasks } = useContext(GlobalContext);
    const { tasks, getTasks } = useTasks();
    const [sortBy, setSortBy] = useState("createdAt");
    const [sortOrder, setSortOrder] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        getTasks();
    }, []);

    function handleSort(col) {
        if (sortBy === col) {
            setSortOrder((prev) => -prev);
        } else {
            setSortBy(col);
            setSortOrder(1);
        }
    }

    const sortedTask = useMemo(() => {
        return [...tasks].sort((a, b) => {
            let i = 0;
            if (sortBy === "title") {
                i = a.title.localeCompare(b.title);
            } else if (sortBy === "status") {
                const obj = { "To do": 1, "Doing": 2, "Done": 3 };
                i = obj[a.status] - obj[b.status];
            } else if (sortBy === "createdAt") {
                i = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
            }
            return i * sortOrder;
        });
    }, [tasks, sortBy, sortOrder]);

    const searchTask = useMemo(() => {
        return sortedTask.filter((task) => task.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery, sortedTask]);

    const callBackDebounce = useCallback(
        debounce((value) => {
            setSearchQuery(value);
        }, 300),
        []
    );

    return (
        <div className="container mt-4">
            <div className="card p-4 shadow">
                <h3 className="text-center mb-3">Lista Task</h3>
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Cerca per titolo..."
                    onChange={(e) => callBackDebounce(e.target.value)}
                />
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col" onClick={() => handleSort("title")} className="sortable">Nome</th>
                            <th scope="col" onClick={() => handleSort("status")} className="sortable">Stato</th>
                            <th scope="col" onClick={() => handleSort("createdAt")} className="sortable">Data di Creazione</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchTask.length > 0 ? (
                            searchTask.map((task) => <TaskRow key={task.id} {...task} />)
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center">Nessun Task trovato...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TaskList;