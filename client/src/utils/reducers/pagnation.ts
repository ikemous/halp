import { Pagnation } from "../types";

interface Action {
    type: string;
    payload: number;
}

export const pagnationReducer = (
    state: Pagnation = { currentPage: 1, pageCount: 1}, 
    action: Action
) => {
    switch(action.type) {
        case "UPDATE_PAGNATION_CURRENT_PAGE":
            return { ...state, currentPage: action.payload}
        case "UPDATE_PAGNATION_PAGE_COUNT":
            return { ...state, pageCount: action.payload}
        default:
            return state;
    }
}

export {};