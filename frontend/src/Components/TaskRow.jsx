export default function TaskRow({ title, status, createdAt }) {
    return (
        <tr style={{ background: status === "Done" ? "green" : status === "Doing" ? "yellow" : "red" }}>
            <td>{title}</td>
            <td>{status}</td>
            <td>{new Date(createdAt).toLocaleDateString()}</td>
        </tr>
    )
}