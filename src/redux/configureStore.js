import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import greetings from './greetings/greetings';

const reducer = combineReducers({ greetings });

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
