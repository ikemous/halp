/* eslint-disable indent */
interface AuthenticationState {
  email: String;
  password: String;
  verifyPassword: String;
  username: String;
  errors: {
    verifyError: Boolean;
    passError: Boolean;
    usernameError: Boolean;
    emailError: Boolean;
  };
}

interface Action {
  type: String;
  payload: String | Object;
}

export const authenticationReducer = (
  state: AuthenticationState = {
    email: "",
    password: "",
    verifyPassword: "",
    username: "",
    errors: {
      verifyError: false,
      passError: false,
      usernameError: false,
      emailError: false,
    },
  },
  action: Action
) => {
  switch (action.type) {
    case "UPDATE_AUTH_EMAIL":
      return { ...state, email: action.payload };
    case "UPDATE_AUTH_PASSWORD":
      return { ...state, password: action.payload };
    case "UPDATE_AUTH_VERIFY_PASSWORD":
      return { ...state, verifyPassword: action.payload };
    case "UPDATE_AUTH_USERNAME":
      return { ...state, username: action.payload };
    case "UPDATE_AUTH_ERRORS":
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};

export default {};
