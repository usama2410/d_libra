import axios from "axios";
import { URL, endpoints } from "../../endpoints";
import * as FormData from "form-data";

// const headers = {
//   Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OSwidXNlcm5hbWUiOiJiYWJ1IiwiZW1haWwiOiJiYWJ1aWJyYXJAZ21haWwuY29tIiwiZXhwIjoxNjQ4NzI1MjE1LCJpYXQiOjE2NDg2Mzg4MTV9.hEpCYnHZrG8YhVJX27wQZXnZsVsauPTF0SbSdYwnK6E`,
// };

export const signUp = (username, email, password) => async (dispatch) => {
  console.log(username, email, password)
  const bodyFormData = new FormData();
  bodyFormData.append("email", email);
  bodyFormData.append("password", password);
  bodyFormData.append("username", username);

  try {
    const response = await axios.post(URL + endpoints.SIGNUP, bodyFormData);
    console.log(response)
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const logIn = (email, password) => async (dispatch) => {
  // console.log("email, password", email, password)
  const bodyFormData = new FormData();
  bodyFormData.append("email", email);
  bodyFormData.append("password", password);
  try {
    const response = await axios.post(URL + endpoints.LOGIN, bodyFormData);
    console.log(response)
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {
        userId: response?.data?.data?.id,
        email: response?.data?.data?.email,
        username: response?.data?.data?.username,
        status: response?.data?.status,
        profile: response?.data?.data?.profile,
        token: response?.data?.token,
        role: response?.data?.data?.role,
      },
    });
    return response?.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const changePassword =
  (oldpassword, password, token) => async (dispatch) => {
    console.log("changePassword", oldpassword, password, token);
    const formData = new FormData();
    formData.append("oldpassword", oldpassword);
    formData.append("password", password);
    try {
      const response = await axios.put(
        URL + endpoints.CHANGE_PASSWORD,
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      return response.data;
    } catch (error) {}
  };

export const themeSwitch = (themestate) => async (dispatch) => {
  try {
    dispatch({
      type: "LIGHTTHEME",
      payload: {
        state: themestate,
      },
    });
  } catch (error) {}
};

export const creamyTheme = (themestate) => async (dispatch) => {
  try {
    dispatch({
      type: "LIGHTTHEME",
      payload: {
        state: themestate,
      },
    });
  } catch (error) {}
};

export const pinState = (pin) => async (dispatch) => {
  try {
    dispatch({
      type: "PINTHEME",
      payload: {
        state: pin,
      },
    });
  } catch (error) {}
};

export const searchState = (search) => async (dispatch) => {
  // console.log("SERAHC STATET ", search)
  try {
    dispatch({
      type: "SEARCHSTATE",
      payload: {
        state: search,
      },
    });
  } catch (error) {}
};
