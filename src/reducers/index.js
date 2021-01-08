import counterReducer from './counterReducer'
import loggedReducer from './loggedReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    counter : counterReducer,
    isLogged : loggedReducer
})

export default rootReducer;