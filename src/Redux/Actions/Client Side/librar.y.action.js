import axios from "axios";
import { URL, endpoints } from "../../../endpoints";

export const librarybookmark = (role, token) => async (dispatch) => {
  console.log(role, token)
  try {
    const response = await axios.get(`${URL}${endpoints.GET_PRIORITY}${role}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log("librarybookmark response", response);
    return response?.data
  } catch (error) {
    console.log(error);
  }
};
