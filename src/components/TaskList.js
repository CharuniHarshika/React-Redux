import React from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function TaskList() {
    const tasks = useSelector((state) => state.tasks);
  return (
    <div className="container">
      <div className="text"><h1>Task List</h1></div>
      <Link to="/TaskForm" className="btn btn-success mu-3">
        Add +
      </Link>
     
      <table className="table">
        <thead>
          <tr>
            <th>TNo</th>
            <th>TaskName</th>
            <th>States</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.TaskNo}</td>
              <td>{task.TaskName}</td>
              <td>{task.States}</td>
              <td>{task.Action}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/TaskForm" className="btn btn-primary mu-3">
        Search
      </Link>

    </div>
  );
}

export default TaskList
