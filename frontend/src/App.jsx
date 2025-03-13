import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddTask from "./pages/AddTask.jsx"
import TaskList from "./pages/TaskList.jsx"
import Navbar from "./Layout/Navbar.jsx"
import TaskDetail from "./pages/TaskDetail.jsx"
import { GlobalProvider } from "./Context/GlobalContext.jsx"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <GlobalProvider>
        <Routes>
          <Route path="/addtask" element={<AddTask />} />
          <Route path="/task" element={<TaskList />}>
            <Route path=":id" element={<TaskDetail />} />
          </Route>
        </Routes>
      </GlobalProvider>
    </BrowserRouter>

  )
}

export default App
