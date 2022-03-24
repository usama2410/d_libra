import axios from "axios";
import { URL, endpoints } from "../../endpoints";
import * as FormData from "form-data";

export const signUp = (username, email, password) => async (dispatch) => {
  // console.log("signUp", username, email, password);
  const bodyFormData = new FormData();
  bodyFormData.append("email", email);
  bodyFormData.append("password", password);

  try {
    const response = await axios.post(URL + endpoints.SIGNUP, bodyFormData);
    console.log("signUp response", response);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const logIn = (email, password) => async (dispatch) => {
  const bodyFormData = new FormData();
  bodyFormData.append("email", email);
  bodyFormData.append("password", password);
  try {
    const response = await axios.post(URL + endpoints.LOGIN, bodyFormData);
    console.log("logIn response", response);

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {
        userId: response?.data?.data?.id,
        email: response?.data?.data?.email,
        username: response?.data?.data?.username,
        status: response?.data?.status,
        profile: response?.data?.data?.profile,
        token: response?.data?.token,
      },
    });

    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
