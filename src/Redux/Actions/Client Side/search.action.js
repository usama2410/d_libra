import axios from "axios";
import { URL, endpoints } from "../../../endpoints";

export const searchAction = (location, token) => async (dispatch) => {
  console.log(`${URL}${endpoints.SEARCH_COURSE}${location}`);
  try {
    const response = await axios.get(
      `${URL}${endpoints.SEARCH_COURSE}${location}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log("searchAction", response.data);
    // http://127.0.0.1:8000/webapi/SearchCourse?role=editor&coursename=branch
  } catch (error) {
    console.log(error);
  }
};
