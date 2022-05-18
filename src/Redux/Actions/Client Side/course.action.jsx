import axios from "axios";
import { URL, endpoints } from "../../../endpoints";
import * as FormData from "form-data";

export const viewCourseStatus = (token, role) => async (dispatch) => {
  // console.log(URL + endpoints.VIEW_COURSE_STATUS + "=" + role);
  try {
    const response = await axios.get(
      URL + endpoints.VIEW_COURSE_STATUS + "=" + role,
      {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTYsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJzaGFrZWViMTFAZ21haWwuY29tIiwiZXhwIjoxNjUyMjU3MDU3LCJpYXQiOjE2NTIxNzA2NTd9.4Y2MHH9S6ZJBeCTz1AVGcAYCtGrvNf5XecLh2-62hmA",
        },
      }
    );
    console.log("viewCourseStatus response", response);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
export const addToRecentViewCourses =
  (course_id, normaluser, token) => async (dispatch) => {
    // console.log(course_id, role);
    const formData = new FormData();
    formData.append("course_id", course_id);
    formData.append("role", normaluser);
    try {
      const response = await axios.post(
        URL + endpoints.ADD_TO_RECENT_COURSES,
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log("addToRecentViewCourses response", response);
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  };
