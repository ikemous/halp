import { Pagination } from "../types";

interface Action {
    type: string;
    payload: number;
}

export const paginationReducer = (
    state: Pagination = { currentPage: 1, pageCount: 1}, 
    action: Action
) => {
    switch(action.type) {
        case "UPDATE_PAGINATION_CURRENT_PAGE":
            return { ...state, currentPage: action.payload}
        case "UPDATE_PAGINATION_PAGE_COUNT":
            return { ...state, pageCount: action.payload}
        default:
            return state;
    }
}