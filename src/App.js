import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import FilterTask from "./components/FilterTask";

function App() {
  return (
    <div className="App">

<BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />}></Route>
          <Route path="/TaskForm" element={<TaskForm />}></Route>
          <Route path="/FilterTask" element={<FilterTask />}></Route>
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
