const createSlice = require('@reduxjs/toolkit').createSlice;

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

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;