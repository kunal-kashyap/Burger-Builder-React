import { actions } from './action'

const initialState = {
    ingredients: {
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0, 
    },
    totalPrice: 4,
}
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7, 
}
const rootReducer = (state=initialState, action) => {
    switch (action.type){
        case actions.ADD_INGREDIENTS :
            return { 
                ...state,
                 ingredients: { ...state.ingredients,  
                    [action.ingName] : state.ingredients[action.ingName]+1},
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingName]
                }
            
        case actions.REMOVE_INGREDIENTS : 
            return { ...state, ingredients: 
                { ...state.ingredients,  [action.ingName] : state.ingredients[action.ingName]-1},
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingName]
            }

        default : return state
            
    }
}

export default rootReducer