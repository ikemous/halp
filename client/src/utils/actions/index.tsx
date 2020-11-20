import { Ticket } from "../types";
/**
 * loginUser()
 * Purpose:
 *  Tell The Reducer To Login The User
 * Parameters:
 *  userInfo: object containing user inforamtion
 * Return:
 *  Object Containing Action
 */
export const loginUser = (userInfo: Object): Object => {
  return {
    type: "USER_LOGIN",
    payload: userInfo,
  };
};

export const logoutUser = (): Object => {
  return {
    type: "USER_LOGIN",
    payload: {
      loggedIn: false,
      _id: "",
      email: "",
      username: "",
      projects: [],
    },
  };
};

export const updateQueryBy = (updatedValue: String) => {
  return {
    type: "UPDATE_QUERY_BY",
    payload: updatedValue,
  };
};

export const updateQueryText = (updatedValue: string) => {
  console.log(updatedValue)
  return {
    type: "UPDATE_QUERY_TEXT",
    payload: updatedValue,
  };
};

export const updateQueryResults = (updatedValue: Array<Object>) => {
  return {
    type: "UPDATE_QUERY_RESULTS",
    payload: updatedValue,
  };
};

export const updateQueryError = (updatedError: boolean) => {
  return {
    type: "UPDATE_QUERY_ERROR",
    payload: updatedError,
  }
}

export const updateAuthEmail = (updatedValue: String) => {
  return {
    type: "UPDATE_AUTH_EMAIL",
    payload: updatedValue,
  };
};

export const updateAuthPassword = (updatedValue: String) => {
  return {
    type: "UPDATE_AUTH_PASSWORD",
    payload: updatedValue,
  };
};

export const updateAuthVerifyPassword = (updatedValue: String) => {
  return {
    type: "UPDATE_AUTH_VERIFY_PASSWORD",
    payload: updatedValue,
  };
};

export const updateAuthUsername = (updatedValue: String) => {
  return {
    type: "UPDATE_AUTH_USERNAME",
    payload: updatedValue,
  };
};

export const updateAuthErrors = (updatedErrors: Object) => {
  return {
    type: "UPDATE_AUTH_ERRORS",
    payload: updatedErrors,
  };
};

export const updateTicketDate = (updatedDate: Date) => {
  return {
    type: "UPDATE_TICKET_UPDATED_DATE",
    payload: updatedDate
  }
}

export const updateCreateDate = (updateDate: Date) => {
  return {
    type: "UPDATE_TICKET_CREATED_DATE",
    payload: updateDate,
  }
}

export const updateTicketSubject = (updatedSubject: string) => {
  return {
    type: "UPDATE_TICKET_SUBJECT",
    payload: updatedSubject,
  }
}

export const updateTicketCreatedBy = (updatedCreator: object) => {
  return {
    type: "UPDATE_TICKET_CREATED_BY",
    payload: updatedCreator,
  }
}

export const updateTicketUpdatedBy = (updatedUpdater: object) => {
  return {
    type: "UPDATE_TICKET_UPDATED_BY",
    payload: updatedUpdater,
  }
}

export const updateTicketDescription = (updatedDescription: string) => {
  return {
    type: "UPDATE_TICKET_DESCRIPTION",
    payload: updatedDescription,
  }
}

export const updateTicketPriority = (updatedPriority: number) => {
  return {
    type: "UPDATE_TICKET_PRIORITY_LEVEL",
    payload: updatedPriority,
  }
}

export const updateTicketStatus = (updatedStatus: string) => {
  return{
    type: "UPDATE_TICKET_STATUS",
    payload: updatedStatus,
  }
}

export const updateTicketType = (updatedType: string) => {
  return {
    type: "UPDATE_TICKET_TYPE",
    payload: updatedType,
  }
}

export const updateTicketAssignedTo = (updatedAsignee: object) => {
  return {
    type: "UPDATE_TICKET_ASSIGNED_TO",
    payload: updatedAsignee
  }
}

export const updateTicket = (updatedTicket: Ticket) => {
  return {
    type: "UPDATE_TICKET",
    payload: updatedTicket
  }
}
