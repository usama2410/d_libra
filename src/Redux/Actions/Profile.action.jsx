import axios from "axios";
import { URL, endpoints } from "../../endpoints";
import * as FormData from "form-data";

export const profileData = (token) => async (dispatch) => {
  try {
    const response = await axios.get(URL + endpoints.USER_PROFILE, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile =
  (fname, lname, image, token, auth) => async (dispatch) => {
    console.log(fname, lname, image, token, auth)
    const formData = new FormData();
    formData.append("fname", fname);
    formData.append("lname", lname);
    formData.append("img", image);
    try {
      const response = await axios.put(
        URL + endpoints.UPDATE_PROFILE,
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      // console.log(response);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          userId: auth?.userId,
          email: auth?.email,
          username: auth?.username,
          firstName: response?.data?.data?.fname,
          lastName: response?.data?.data?.lname,
          status: auth?.status,
          profile: response?.data?.data?.profile,
          token: auth?.token,
          role: auth?.role,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
