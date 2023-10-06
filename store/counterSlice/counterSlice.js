import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice(
    {
        name : "slice",
        initialState,
        reducers : {

            increment : (state,action)=>{
               state.value += action.payload            
            },
            decrement : (state,action)=>{
                state.value -= action.payload            
            },
            actionName : (state,action)=>{
                console.log("This is state = "+state)
                console.log("This is action = "+action)
            },
            increment5 : (state,action)=>{
                state.value += action.payload
            }
        }
    }
)


export default counterSlice.reducer
export const {actionName,increment,decrement,increment5}  =   counterSlice.actions