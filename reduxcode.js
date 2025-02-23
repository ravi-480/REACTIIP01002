const redux = require("redux");

const createStore = redux.createStore;
const bindAction = redux.bindActionCreators;
const combineReducer = redux.combineReducers;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCK = "CAKE_RESTOCK";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCK = "ICECREAM_RESTOCK";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}
function orderRestock(qty = 1) {
  return {
    type: CAKE_RESTOCK,
    payload: qty,
  };
}

function orderIcecream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}
function iceCreamRestock(qty = 1) {
  return {
    type: ICECREAM_RESTOCK,
    payload: qty,
  };
}

const cakeInitialState = {
  numOfCake: 10,
};
const iceCreamInitialState = {
  numOfIceCream: 10,
};

const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
    case CAKE_RESTOCK:
      return {
        ...state,
        numOfCake: state.numOfCake + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    case CAKE_RESTOCK:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + action.payload,
      };
    default:
      return state;
  }
};

const rootREducer = combineReducer({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootREducer);

console.log(store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("update", store.getState())
);

const actions = bindAction(
  { orderCake, orderRestock, orderIcecream, iceCreamRestock },
  store.dispatch
);

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.orderIcecream();
actions.orderIcecream();
actions.orderIcecream();
actions.iceCreamRestock(3);

unsubscribe();
