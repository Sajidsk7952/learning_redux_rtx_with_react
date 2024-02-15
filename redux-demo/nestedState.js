const redux = require('redux');
const immer = require('immer');
const createstore = redux.createStore;
const produce = immer.produce;
const initialState = {
    name: 'sajid',
    address:{
        street:'buchi',
        city:'nellore',
        state:'andhra pradesh'
    }
}

const STREET_UPDATED = 'STREET_UPDATED';
function updateStreet(street){
    return{
        type:STREET_UPDATED,
        payLoad:street,
    }
}

const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case STREET_UPDATED:
            // return{
            //     ...state,
            //     address:{
            //         ...state.address,
            //         street : action.payLoad,
            //     }
            // }
            return produce(state,(draft)=>{draft.address.street = action.payLoad})
        default:
            return state;
    }
}

const store = createstore(reducer);

console.log('initial state',store.getState());
const unSubscribe = store.subscribe(()=>console.log('updated state',store.getState()));
store.dispatch(updateStreet('khajanagar'));
unSubscribe();