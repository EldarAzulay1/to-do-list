import React, { useEffect, useState } from 'react'
import ItemsTask from './itemsTask'
import { useSelector } from 'react-redux'
import { sortBy } from 'lodash'




export default function ToDoLIstTask() {

  const listTask = useSelector(state =>
    state.taskSlice.toDoAr);
  let list = sortBy(listTask, ['time']);
  console.log(listTask);


  return (
    <div className='col-md-6 border shadow my-3 p-3 container'>
      <h2 className='display-6 mt-3'>Show My Task</h2>
      <div>
        {
          list.map(item => {
            return <ItemsTask key={item.id} item={item}></ItemsTask>
          })
        }
      </div>
    </div>
  )
}
