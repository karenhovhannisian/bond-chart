import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import chartDataReducer from './store/reducers/chartDataReducer'
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBOWyl9nDAsceU2jmrE6BI4IVu53bhgQRs",
    authDomain: "react-chart-efe7d.firebaseapp.com",
    databaseURL: "https://react-chart-efe7d.firebaseio.com",
    projectId: "react-chart-efe7d",
    storageBucket: "",
    messagingSenderId: "212729613469",
    appId: "1:212729613469:web:2f463bcae9a40f4f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReduser = combineReducers({
    chartDataReducer
})

const store = createStore(rootReduser, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
       <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
