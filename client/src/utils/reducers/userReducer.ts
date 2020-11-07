import { User } from "../types";


/**
 * Action Interface
 * type: String Of Action To Be Taken
 * payload: Object Containing action result
 */
interface Action {
  type: string;
  payload: Object;
} // End Actin Interface

// create Empty User In Case User Isn't Logged In
let INITIAL_STATE: User = {
  loggedIn: false,
  _id: "",
  email: "",
  username: "",
  projects: [],
};

// Check If There Is A User Local Storage
if (localStorage.getItem("user")) {
  // Grab Local storage and store into user variable
  const LOCAL_STORAGE_USER = JSON.parse(localStorage.getItem("user") || "");
  // Check if user login has expired
  if (LOCAL_STORAGE_USER.expire > Date.now()) {
    //Create New Date Object
    const NOW = new Date();
    //Update expiration time
    LOCAL_STORAGE_USER.expire = NOW.setTime(NOW.getTime() + 30 * 60 * 1000);
    //update initial State
    INITIAL_STATE = LOCAL_STORAGE_USER;
    // Update Local Storage
    localStorage.setItem("user", JSON.stringify(LOCAL_STORAGE_USER));
  }
}

/**
 * userReducer()
 * Purpose:
 *  Commit Action According To the payload of the action and type
 * Parameters:
 *  state: State Of User Object
 *  action: Object Of The Action That is to happen to the state
 * Return:
 *  updated State
 */
export const userReducer = (state: User = INITIAL_STATE, action: Action) => {
  if (action.type === "USER_LOGIN") {
    return action.payload;
  } else if (action.type === "USER_LOGOUT") {
    return action.payload;
  }
  return state;
}; // end userReducer()
