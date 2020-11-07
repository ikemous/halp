/* eslint-disable indent */
import { Ticket } from "../types";

interface QueryState {
  queryBy: string;
  queryText: string;
  queryResults: Array<Ticket>;
  error: boolean;
}

interface Action {
  type: string;
  payload: string | Array<Ticket> | boolean;
}

export const ticketQueryReducer = (
  state: QueryState = { queryBy: "", queryText: "", queryResults: [], error: false },
  action: Action
) => {
  switch (action.type) {
    case "UPDATE_QUERY_BY": 
      return { ...state, queryBy: action.payload };
    case "UPDATE_QUERY_ERROR":
      return { ...state, error: action.payload };
    case "UPDATE_QUERY_TEXT":
      return { ...state, queryText: action.payload };
    case "UPDATE_QUERY_RESULTS":
      return { ...state, queryResults: action.payload };
    default:
      return state;
  }
};
