import axios from "axios";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const signUp = (first_name, last_name, email, password, confirmPass) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/account/register", {
        first_name,
        last_name,
        email,
        password,
        confirmPass,
      });
      if (response.status === 200) console.log(response);
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
};

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/account/login", {
        username,
        password,
      });
      console.log(response);
      dispatch({
        type: LOGIN_USER,
        payload: {
          firstName: response.data.first_name,
          lastName: response.data.last_name,
          token: response.data.token,
          username: response.data.username,
          email: response.data.email,
        },
      });
    } catch (error) {
      throw new Error();
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    localStorage.clear();
    dispatch({ type: LOGOUT_USER });
  };
};
