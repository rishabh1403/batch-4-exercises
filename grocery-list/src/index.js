import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
    value: [
        {
            name: 'Milk',
            value: false,
        },
        {
            name: 'Curd',
            value: true,
        },
    ]
}
const reducer = (state = initialState.value, action) => {
    switch (action.type) {
        case 'CLEAR': {
            return [];
        }
        case 'ADD': {
            return [...state, action.data];
        }
        case 'SHOP': {
            return action.data;
        }
        default:
            return state;
    }
}
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
