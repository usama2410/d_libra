import axios from "axios";
import { URL, endpoints } from "../../../endpoints";

export const searchAction = (location, token) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${URL}${endpoints.SEARCH_CONTENT}${location}`,
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

export const searchCourse = (location) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${URL}${endpoints.SEARCH_COURSE}${location}`
    );
    console.log("searchCourse response", response.data);

    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const searchUserCourse = (role, postId, token) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${URL}${endpoints.SEARCH_USER_POST}${role}&Postid=${postId}`
    );
    console.log("searchCourse response", response.data);

    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
