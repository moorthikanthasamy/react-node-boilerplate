import SHOW_COMPONENT from "../constants";
const { createStore, combineReducers, compose } = require("redux");

const __INITIAL_STATE__ = {};
const enhancer = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
  combineReducers({ dashboardReducer }),
  __INITIAL_STATE__,
  enhancer
);

function dashboardReducer(state = {}, action) {
  switch (action.type) {
    case SHOW_COMPONENT:
      state = {
        ...state,
        component: action.component
      };
      break;
  }
  return state;
}

// store.subscribe(() => console.log(store.getState()));

export default store;
