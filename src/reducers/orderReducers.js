import {
    CREATE_ORDER,
    CLEAR_ORDER
} from "../types";

const orderReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_ORDER:
            return {
                order: action.payload
            }
            break;
        case CLEAR_ORDER:
            return {
                order: null
            }
            default:
                return state
                break;
    }
}

export {
    orderReducer
}