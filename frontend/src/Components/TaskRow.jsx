import React, { memo } from "react";
import { Link } from "react-router-dom";

const TaskRow = memo(({ title, status, createdAt, id }) => {
    return (
        <tr
            style={{
                background: status === "Done" ? "green" : status === "Doing" ? "yellow" : "red",
                color: status === "Doing" ? "black" : "white"
            }}>
            <td>
                <Link style={{ color: status === "Doing" ? "black" : "white" }} to={`${id}`}>{title}</Link>
            </td>
            <td>{status}</td>
            <td>{new Date(createdAt).toLocaleDateString()}</td>
        </tr>
    );
});

export default TaskRow;