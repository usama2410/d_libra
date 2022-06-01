import axios from "axios";
import { URL, endpoints } from "../../../endpoints";

export const deletePost = (id, token) => async (dispatch) => {
    try {
      const response = await axios.delete(
        URL + endpoints.DELETE_POST_BY_ID + id,
        {
          headers: {
            Authorization: "Bearar " + token,
          },
        }
      );
      // console.log("Delete Post response", response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };