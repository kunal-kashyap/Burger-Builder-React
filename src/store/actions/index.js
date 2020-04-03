import {actions} from './action'


export const addIngredients = (ingName) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch((() => {
                return { 
                    type: actions.ADD_INGREDIENTS, 
                    ingName
                }
            })()
            );
        }, 2000)
    }
    
    
}

export const removeIngredients = (ingName) => {
    return {
        type: actions.REMOVE_INGREDIENTS, 
        ingName
    }
}