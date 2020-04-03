import {combineReducers} from 'redux';

import burgerBuilderReducer from '../containers/BurgerBuilder/store/reducers'

const initialState = {};

let rootReducer = combineReducers({
    initialState,
    burgerBuilder: burgerBuilderReducer,
})

export default rootReducer