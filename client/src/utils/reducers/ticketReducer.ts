/* eslint-disable complexity */
/* eslint-disable indent */
import { Ticket, User } from "../types";
interface Action {
  type: String;
  payload: Date | String | User | Number;
}

export const ticketReducer = (
  state: Ticket = {
    subject: "Technical Support",
    createdBy: "",
    updatedBy: "",
    description: "HALP I've fallen and can't get up!",
    priorityLevel: 3,
    status: "New",
    type: "Hardware",
    assignedTo: "",
  },
  action: Action
) => {
  switch (action.type) {
    case "UPDATE_TICKET_UPDATED_DATE":
      return { ...state, updatedDate: action.payload };
    case "UPDATE_TICKET_CREATED_DATE":
      return { ...state, createdDate: action.payload };
    case "UPDATE_TICKET_SUBJECT":
      return { ...state, subject: action.payload };
    case "UPDATE_TICKET_CREATED_BY":
      return { ...state, createdBy: action.payload };
    case "UPDATE_TICKET_UPDATED_BY":
      return { ...state, updatedBy: action.payload };
    case "UPDATE_TICKET_DESCRIPTION":
      return { ...state, description: action.payload };
    case "UPDATE_TICKET_PRIORITY_LEVEL":
      return { ...state, priorityLevel: action.payload };
    case "UPDATE_TICKET_STATUS":
      return { ...state, status: action.payload };
    case "UPDATE_TICKET_TYPE":
      return { ...state, type: action.payload };
    case "UPDATE_TICKET_ASSIGNED_TO":
      return { ...state, assignedTo: action.payload };
    default:
      return state;
  }
};
