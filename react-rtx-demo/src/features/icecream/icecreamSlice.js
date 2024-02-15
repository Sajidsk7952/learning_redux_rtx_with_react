import {createSlice} from '@reduxjs/toolkit'
import {ordered as cakeOrdered} from '../cake/cakeSlice'
const initialIcecreamState = {
    noOfIcecreams : 50,
}
const icecreamSlice = createSlice({
    name:'icecream',
    initialState: initialIcecreamState,
    reducers:{
        ordered : (state)=>{
            state.noOfIcecreams -= 1
        },
        added : (state,action)=>{
            state.noOfIcecreams += action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(cakeOrdered,state=>{state.noOfIcecreams -= 1})
    }
});

export default icecreamSlice.reducer;
export const{ordered,added} = icecreamSlice.actions;