import axios from "axios";
import { URL, endpoints } from "../../../endpoints";

export const searchAction = (location, token) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${URL}${endpoints.SEARCH_COURSE}${location}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    // console.log("searchAction", response.data);
    dispatch({
      type: "GET_SEARCH_RESULT_DATA",
      payload: {
        data: response.data,
      },
    });
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
