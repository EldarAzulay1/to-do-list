import React from 'react'
import ToDoInput from './toDoInput'
import ToDoLIstTask from './toDoListTask'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import taskSlice from './toDoRedSlice'


const myStore = configureStore({
  reducer: {
    taskSlice
  }
})


export default function AppTOdo() {
  return (
    <div>
      <Provider store={myStore}>
        <header className='container-fluid bg-dark p-2 '>
          <h4 className='text-center text text-light'> My - ToDo List </h4>
        </header>
        <ToDoInput></ToDoInput>
        <ToDoLIstTask></ToDoLIstTask>
      </Provider>
    </div>

  )
}
