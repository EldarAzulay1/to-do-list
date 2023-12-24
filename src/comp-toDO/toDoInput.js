import React , {useRef} from 'react'
import { useDispatch } from 'react-redux';
import { AddTask  , removeAll} from './toDoRedSlice';

export default function ToDoInput() {
  const inputName = useRef();
  const inputTime = useRef();
  const dis = useDispatch();

  const AddClickTask = () => {
    let TaskOb = {
      nameTask: inputName.current.value,
      time: inputTime.current.value,
      id: Date.now()
    }
    dis(AddTask({dataTask:TaskOb}))
  }
  const RemoveAll = () => {
    window.confirm("you are sure?") && dis(removeAll())
  }

  return (
    <div className='broder shadow p-3 mt-3 col-md-6 container'>
        <h2 className='display-6 mt-3'>Your Task Manager</h2>
        <div className='col-md-7'>Task Name
            <input ref={inputName} type='text' className='mt-2 form-control'></input>
        </div>
        <div className='col-md-7 mt-3'>Time Task
            <input ref={inputTime} type="time" className='mt-2 form-control'></input>
        </div>
        <div className='text-center my-3'>
         <button onClick={AddClickTask} className='btn btn-info mt-3'>Add</button>
         <button onClick={RemoveAll} className='btn btn-danger mt-3 ms-3'>Reset</button>
        </div>

    </div>
  ) 
}
