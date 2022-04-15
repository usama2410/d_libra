import axios from "axios";
import { URL, endpoints } from "../../endpoints";
import * as FormData from "form-data";

// const headers = {
//   Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OSwidXNlcm5hbWUiOiJiYWJ1IiwiZW1haWwiOiJiYWJ1aWJyYXJAZ21haWwuY29tIiwiZXhwIjoxNjQ4NzI1MjE1LCJpYXQiOjE2NDg2Mzg4MTV9.hEpCYnHZrG8YhVJX27wQZXnZsVsauPTF0SbSdYwnK6E`,
// };

export const signUp = (username, email, password) => async (dispatch) => {
  // console.log("signUp", username, email, password);
  const bodyFormData = new FormData();
  bodyFormData.append("email", email);
  bodyFormData.append("password", password);

  try {
    const response = await axios.post(URL + endpoints.SIGNUP, bodyFormData);
    // console.log("signUp response", response);
    return response?.data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const logIn = (email, password) => async (dispatch) => {
  const bodyFormData = new FormData();
  bodyFormData.append("email", email);
  bodyFormData.append("password", password);
  try {
    const response = await axios.post(URL + endpoints.LOGIN, bodyFormData);
    // console.log("logIn response", response);
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
      // console.log("changePassword response", response);
      return response.data;
    } catch (error) {
      // console.log(error);
    }
  };

export const themeSwitch = (themestate) => async (dispatch) => {
  //  console.log(themestate)
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
  //  console.log(themestate)
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
  console.log(pin);
  try {
    dispatch({
      type: "PINTHEME",
      payload: {
        state: pin,
      },
    });
  } catch (error) {}
};