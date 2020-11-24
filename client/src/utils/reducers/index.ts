import { combineReducers } from "redux";
import { authenticationReducer } from "./authenticationReducer";
import { paginationReducer } from "./paginationReducer";
import { ticketQueryReducer } from "./queryReducer";
import { ticketReducer } from "./ticketReducer";
import { userReducer } from "./userReducer";

const allReducers = combineReducers({
  user: userReducer,
  query: ticketQueryReducer,
  authentication: authenticationReducer,
  ticket: ticketReducer,
  ticketPagination: paginationReducer,
});

export default allReducers;
