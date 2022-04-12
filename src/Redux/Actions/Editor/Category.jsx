import axios from "axios";
import { URL, endpoints } from "../../../endpoints";
import * as FormData from "form-data";

export const addnewCategory = (chapName, chapId, slug) => async (dispatch) => {
  const formData = new FormData();
  formData.append("name", chapName);
  formData.append("parentCategoryid", chapId);
  formData.append("slug", slug);

  formData.append("image", "/media/SuperAdmin/dummy.jpg");
  try {
    const response = await axios.post(URL + endpoints.ADD_CATEGORY, formData, {
      headers: {
        Authorization:
          "Bearer " +
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJzaGFrZWViIiwiZW1haWwiOiJzaGFrZWViQGdtYWlsLmNvbSIsImV4cCI6MTY0OTIxNjI5MiwiaWF0IjoxNjQ5MTI5ODkyfQ.RiIqYpg8oeNwiDCB37qK4po0H7WUtTBQKnAQyIYQmCI",
      },
    });
    console.log("response  profiledata", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getMainCategory = (token) => async (dispatch) => {
  try {
    const response = await axios.get(URL + endpoints.GET_MAIN_CATEGORY, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    // console.log("response  getMainCategory", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getSubCategory = (token) => async (dispatch) => {
  try {
    const response = await axios.get(URL + endpoints.GET_SUB_CATEGORY, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    // console.log("response  getsSubCategory", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getParentChildCategories = (token) => async (dispatch) => {
  console.log("token", token);
  try {
    const response = await axios.get(
      URL + endpoints.GET_PARENT_CHILD_CATEGORY,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log("Parent Child response", response);
    return response?.data?.data;
  } catch (error) {
    console.log(error);
  }
};
