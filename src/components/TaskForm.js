
import React, { useState } from 'react'
import { addTask} from '../taskReducer'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function TaskForm() {
  const [TaskName, setName]=useState('');
  const [States, setStates]=useState('');
  const [Action, setAction]=useState('');
  
  

  const tasks = useSelector((state)=> state.tasks);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask({TaskNo: tasks[tasks.length -1].TaskNo + 1 , TaskName, States, Action }))
    navigate('/')
  }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 boarder bg-secondary text-white p-5'>
        <h2>Add New User</h2>
        <form onSubmit={handleSubmit}>
        
          <div>
            <label htmlFor="name">Task Name</label>
            <input type ="text" name='name' className='form-control' onChange={e=> setName(e.target.value)}/>
          </div>


          <div>
          <label htmlFor="States">States</label>
            <input type ="States" name='States' className='form-control' onChange={e=> setStates(e.target.value)}/>
          </div>

          
          <div>
            <label htmlFor="checkbox">Action</label>
            <input type ="checkbox" name='checkbox' className='form-checkbox' onChange={e=> setAction(e.target.value)}/>
          </div><br/>
          <button className='btn btn-info'>Submit</button>

          
        </form>
      </div>

    </div>
  )
}

export default TaskForm

