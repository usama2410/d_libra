import axios from "axios";
import { URL, endpoints } from "../../endpoints";
import * as FormData from "form-data";
// const headers = {
//   Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OSwidXNlcm5hbWUiOiIiLCJlbWFpbCI6ImJhYnVpYnJhckBnbWFpbC5jb20iLCJleHAiOjE2NDg1NTYyODAsImlhdCI6MTY0ODQ2OTg4MH0.-79Ua0dage0MihoKH6XQ1sL8eKTuaYeo6wO0-PhyBiU`,
// };
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

export const updateProfile = (fname, lname, token) => async (dispatch) => {
  const formData = new FormData();
  formData.append("fname", fname);
  formData.append("lname", lname);
  formData.append("img", "/media/SuperAdmin/dummy.jpg");
  try {
    const response = await axios.put(URL + endpoints.UPDATE_PROFILE, formData, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
