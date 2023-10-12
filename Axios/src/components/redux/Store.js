// src/store.js

import { createStore } from 'redux';

// Action types
const LOGIN = 'LOGIN';

// Reducer function
const userReducer = (state = null, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(userReducer);

export default store;
