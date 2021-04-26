import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk'
import combineReducers from "./store/reducers"

export const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);