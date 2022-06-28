import axios from "axios";
import { URL, endpoints } from "../../endpoints";
import * as FormData from "form-data";

export const addBookmark = (rawData, role, token) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${URL}${endpoints.ADD_BOOKMARK_LIBRARY}?role=${role}`,
      rawData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Add Bookmark", response);
  } catch (error) {
    console.log(error);
  }
};

export const getBookmarkCourse = (role, token) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${URL}${endpoints.GET_BOOKMARK_COURSE}?role=${role}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log("Get Bookmark Course", response);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const addContentBookmark =
  (content_id, role, token) => async (dispatch) => {
    const formData = new FormData();
    formData.append("contentid", content_id);
    try {
      const response = await axios.post(
        `${URL}${endpoints.ADD_CONTENT_BOOKMARK}?role=${role}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("Add Content Bookmark", response);
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  };
