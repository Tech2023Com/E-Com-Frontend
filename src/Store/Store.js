import {createStore , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import CombineReducers from '../Reducres/CombineReducers'



const globalState = localStorage.getItem('reduxStore') ? JSON.parse(localStorage.getItem('reduxStore')) : {}




const enhancer = applyMiddleware(thunk);



const store = createStore(
    CombineReducers,
    globalState,
    enhancer
)

export default store