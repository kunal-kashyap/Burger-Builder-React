import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducer'

const logger = store => { 
    return next => {
        return action => {
            console.log('[Middleware] -> Dispatching', action)
            const result = next(action);
            console.log('[Middleware] -> Next State',store.getState())
            return result
        }
    }
}
const store = createStore(rootReducer, applyMiddleware(logger))

export default store