const {
  createStore,
  combineReducers,
  compose,
  applyMiddleware
} = require("redux");
const { logger } = require("redux-logger");

const __INITIAL_STATE__ = {
  username: "Moorthi",
  hash: 485
};
const enhancer = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
  combineReducers({ reducer, nextReducer }),
  {},
  enhancer
);

function nextReducer(state = __INITIAL_STATE__, action) {
  switch (action.type) {
    case "MAX":
      state = {
        ...state,
        username: action.payload
      };
      break;
  }
  return state;
}

function reducer(state = __INITIAL_STATE__, action) {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        hash: action.payload
      };
      break;
  }
  return state;
}

store.subscribe(() => console.log(store.getState()));

export default store;
