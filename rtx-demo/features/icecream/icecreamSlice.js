const { cakeActions } = require('../cake/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice;

const initialIcecreamState = {
    noOfIcecreams : 50,
}
const icecreamSlice = createSlice({
    name:'iceCream',
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
        builder.addCase(cakeActions.ordered,state=>{state.noOfIcecreams -= 1})
    }
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;