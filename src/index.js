import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';

const initialState = {
    sups: []
}

// when oldState is undefined it gets initialState value
let reducer = (oldState = initialState, action) => {
    if (action.type === 'CREATE_SUP') {
        let sups = oldState.sups.concat(['hi']);
        return Object.assign({}, oldState, { sups });
        // return { ...oldState, sups }; // es2016 syntax overwriting sups
    }
    return oldState;
};

//let action = { type: 'CREATE_SUP' } // action is a description of what change to make to state
let store = createStore(reducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store);
window.store = store;


/*
// currying
let Screen = connect(
    (state) => {
        return { sups: state.sups };
    },
    (dispatch) => {
        return { dispatch: dispatch };
    },
)(ScreenDumb);

 */

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
