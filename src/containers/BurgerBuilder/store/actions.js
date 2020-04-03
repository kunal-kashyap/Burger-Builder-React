import {actions} from './constants'
import axios from "../../../axios-orders";

export const addIngredients = (ingName) => {
    return {
        type: actions.ADD_INGREDIENTS,
        ingName,
    }
}


export const removeIngredients = (ingName) => {
    return {
        type: actions.REMOVE_INGREDIENTS,
        ingName,
    }
}

export const fetchIngredients = () => {
    return dispatch => {
        axios.get('/ingredients.json')
            .then(response => {
                dispatch({
                    type: actions.FETCH_INGREDIENTS,
                    ingredients: response.data,
                })
            })
            .catch(err => {
                console.log("Error occurred while fetching ingredients: ", err)
            })
    }
}