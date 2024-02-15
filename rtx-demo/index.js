const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions;
const fetchusers = require("./features/user/userSlice").fetchusers;

console.log("initial state", store.getState());

store.dispatch(fetchusers());

// const unSubscribe = store.subscribe(() => {
// //   console.log("update state", store.getState());
// });

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.added(2));
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.added(1));

// unSubscribe();
