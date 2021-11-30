import { LOGIN_USER, LOGOUT_USER } from "../actions/auth";

const initState = {
  firstName: "",
  lastName: "",
  email: "",
  token: "",
  userName: "",
  isLoggedIn: false,
};

export default function AuthReducer(state = initState, action) {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        ...state,
        firstName: action.payload.first_name,
        lastName: action.payload.last_name,
        email: action.payload.email,
        token: action.payload.token,
        userName: action.payload.username,
        isLoggedIn: true,
      };
    }
    case LOGOUT_USER: {
      return initState;
    }
    default: {
      return state;
    }
  }
}
