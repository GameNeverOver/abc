import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from "redux" ;
import { Provider } from "react-redux" ;
import thunk from 'redux-thunk';
import promise from 'redux-promise'
import rootReducer from "./reducer"


const store = createStore(
  rootReducer,
  applyMiddleware(thunk,promise)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
