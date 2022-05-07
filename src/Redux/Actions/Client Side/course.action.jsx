import axios from "axios";
import { URL, endpoints } from "../../../endpoints";

export const viewCourseStatus = (token) => async (dispatch) => {
  console.log(URL + endpoints.VIEW_COURSE_STATUS);
  try {
    const response = await axios.get(URL + endpoints.VIEW_COURSE_STATUS, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log("viewCourseStatus response", response);
  } catch (error) {
    console.log(error);
  }
};
