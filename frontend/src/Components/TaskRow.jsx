import React, { memo } from "react";
import { Link } from "react-router-dom";

const TaskRow = memo(({ title, status, createdAt, id }) => {
    const statusClasses = {
        "Done": "table-success",
        "Doing": "table-warning",
        "To do": "table-danger"
    };

    return (
        <tr className={statusClasses[status]}>
            <td>
                <Link className="text-black fw-bold" to={`/task/${id}`}>{title}</Link>
            </td>
            <td>{status}</td>
            <td>{new Date(createdAt).toLocaleDateString()}</td>
        </tr>
    );
});

export default TaskRow;