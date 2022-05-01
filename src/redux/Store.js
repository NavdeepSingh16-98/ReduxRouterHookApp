//import {createStore,applyMiddleware} from 'redux'
import {createStore,applyMiddleware} from 'redux'
import rootReducer from './RootReducer'
import thunk from 'redux-thunk'

const thunkMiddleware =applyMiddleware(thunk)
const store = createStore(rootReducer,thunkMiddleware)

export default store