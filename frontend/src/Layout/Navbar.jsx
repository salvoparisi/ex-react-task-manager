import { Link } from "react-router-dom"
function Navbar() {
    return (
        <div className='navBar'>
            <div className='addtask'>
                <Link to="/addtask">Add Task</Link>
            </div>
            <div className='tasklist'>
                <Link to="/task">Task List</Link>
            </div>

        </div>
    )
}

export default Navbar