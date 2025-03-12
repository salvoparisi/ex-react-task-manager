import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddTask from "./pages/AddTask.jsx"
import TaskList from "./pages/TaskList.jsx"
import Navbar from "./Layout/Navbar.jsx"
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/tasklist" element={<TaskList />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
