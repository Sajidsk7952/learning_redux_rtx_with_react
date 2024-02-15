// const createSlice = require('@reduxjs/toolkit').createSlice;
import {createSlice} from '@reduxjs/toolkit'
const initialCakeState = {
    noOfCakes : 20,
}
const cakeSlice = createSlice({
    name:'cake',
    initialState:initialCakeState,
    reducers:{
        ordered: (state)=>{
            state.noOfCakes -= 1
        },
        added:(state,action)=>{
            state.noOfCakes += action.payload
        }
    }
})
export default cakeSlice.reducer
// module.exports.cakeActions = cakeSlice.actions;
export const {ordered,added} = cakeSlice.actions;