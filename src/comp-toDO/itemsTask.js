import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from './toDoRedSlice'

export default function ItemsTask(props) {
  const dis = useDispatch()

  const removeCurrentItem = () => {
    dis(removeItem({id:props.item.id}))
  }

  return (
    <div className=' mt-3'>
        <div className='container shadow overflow-hidden p-2'>
            <button onClick={removeCurrentItem}  className='btn btn-danger float-end'>X</button>
            <h5 className='my-2 '>{props.item.nameTask + " - " + props.item.time} </h5>
        </div>
    </div>
  )
}
