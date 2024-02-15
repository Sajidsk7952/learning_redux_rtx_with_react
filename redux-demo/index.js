// console.log('from index file');
const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const actionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleWare = redux.applyMiddleware;

const logger = reduxLogger.createLogger();

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_ADDED = "CAKE_ADDED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_ADDED = "ICECREAM_ADDED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payLoad: 1,
  };
}
function addCake(qty = 1) {
  return {
    type: CAKE_ADDED,
    payLoad: qty,
  };
}

function orderIcecream() {
  return {
    type: ICECREAM_ORDERED,
    payLoad: 1,
  };
}
function addIcecream(qty = 1) {
  return {
    type: ICECREAM_ADDED,
    payLoad: qty,
  };
}

// const initialState = {
//   noOfCakes: 10,
//   noOfIcecreams: 20,
// };
const initialCakeState = {
  noOfCakes: 10,
};
const initialIceCreamState = {
  noOfIcecreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    case CAKE_ADDED:
      return {
        ...state,
        noOfCakes: state.noOfCakes + action.payLoad,
      };
    default:
      return state;
  }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        noOfIcecreams: state.noOfIcecreams - 1,
      };
    case ICECREAM_ADDED:
      return {
        ...state,
        noOfIcecreams: state.noOfIcecreams + action.payLoad,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer, applyMiddleWare(logger));

console.log("initial state", store.getState());

const unSubscribe = store.subscribe(() =>
  //   console.log("Updated state", store.getState())
  {}
);

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(addCake(3));

const actions = actionCreators(
  { orderCake, addCake, orderIcecream, addIcecream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.addCake(3);
actions.orderIcecream();
actions.addIcecream(2);

unSubscribe();
