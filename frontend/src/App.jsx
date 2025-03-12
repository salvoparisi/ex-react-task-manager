import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddTask from "./pages/AddTask.jsx"
import TaskList from "./pages/TaskList.jsx"
import Navbar from "./Layout/Navbar.jsx"
import ContextApi from "./Context/ContextApi.jsx"
import './App.css'

function App() {
  const apiUrl = import.meta.env.VITE_API_URL
  return (
    <BrowserRouter>
      <Navbar />
      <ContextApi.Provider value={apiUrl}>
        <Routes>
          <Route path="/addtask" element={<AddTask />} />
          <Route path="/tasklist" element={<TaskList />} />
        </Routes>
      </ContextApi.Provider>
    </BrowserRouter>

  )
}

export default App
