export {increment,decrement,increment5,actionName} from '../counterSlice/counterSlice.js'
import { increment5 } from '../counterSlice/counterSlice.js';
export const asyncincrement = (value)=> async (dispatch,getState)=>{
    setTimeout(()=>{
        dispatch(increment5(value));
    },1000)
}