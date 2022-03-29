import axios from "axios";
import { URL, endpoints } from "../../endpoints";
import * as FormData from "form-data";
const headers = {
  Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OSwidXNlcm5hbWUiOiIiLCJlbWFpbCI6ImJhYnVpYnJhckBnbWFpbC5jb20iLCJleHAiOjE2NDg1NTYyODAsImlhdCI6MTY0ODQ2OTg4MH0.-79Ua0dage0MihoKH6XQ1sL8eKTuaYeo6wO0-PhyBiU`,
};
export const profileData = () => async (dispatch) => {
  try {
    const response = await axios.get(URL + endpoints.USER_PROFILE, {
      headers: headers.Authorization,
    });
    console.log("response  profiledata", response.data);
  } catch (error) {
    console.log(error);
  }
};
