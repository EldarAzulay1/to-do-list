import {createSlice} from '@reduxjs/toolkit'
import {sortBy} from 'lodash'

const KEY_LOCAL = "local_kay";

const initValue = localStorage.getItem(KEY_LOCAL) ? JSON.parse(localStorage.getItem(KEY_LOCAL)) :  {
    toDoAr:[],
    name : ""
}



const taskSlice = createSlice({
    name:"toDo",
    initialState: initValue,
    reducers:{
        AddTask:(state , action) => {
        state.toDoAr.push(action.payload.dataTask);
          SaveToLocal(state)
        },
        removeItem:(state , action) => {
            state.toDoAr = state.toDoAr.filter((item) => {
                console.log(item.id  + "," + action.payload.id)
                return item.id !== action.payload.id
            })
            SaveToLocal(state)
        },
        removeAll:(state,action) => {
            state.toDoAr = []
            SaveToLocal(state)
        }
    }
})

const SaveToLocal = (state) => {
    
    localStorage.setItem(KEY_LOCAL , JSON.stringify(state))
}

export const {AddTask , removeItem , removeAll} = taskSlice.actions
export default taskSlice.reducer