import {combineReducers} from 'redux'
import CountData from './CountReducers'
import FD from './FDReducer'
import Login from './LoginReducer'


export default combineReducers({
CountData , FD , Login
})