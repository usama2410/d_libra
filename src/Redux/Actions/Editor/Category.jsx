import axios from "axios";
import { URL, endpoints } from "../../../endpoints";
import * as FormData from "form-data";

export const addnewCategory =
  (chapName, chapId, slug, token) => async (dispatch) => {
    const formData = new FormData();
    formData.append("name", chapName);
    formData.append("parentCategoryid", chapId);
    formData.append("slug", slug);

    formData.append("image", "/media/SuperAdmin/dummy.jpg");
    try {
      const response = await axios.post(
        URL + endpoints.ADD_CATEGORY,
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      // console.log("response  profiledata", response.data);
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
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getParentChildCategories = (token) => async (dispatch) => {
  // console.log("token", token);
  try {
    const response = await axios.get(
      URL + endpoints.GET_PARENT_CHILD_CATEGORY,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    // console.log("Parent Child response", response);
    dispatch({
      type: "GET_PARENT_CHILD_CATEGORY",
      payload: response?.data?.data,
    });
    return response?.data?.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getChildCategories = (id, token) => async (dispatch) => {
  try {
    const response = await axios.get(URL + endpoints.GET_CHILD_CATEGORY + id, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    // console.log("GetChildCategories response", response);
    return response?.data?.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTopicContent = (role, id, token) => async (dispatch) => {
  try {
    const response = await axios.get(
      URL + endpoints.GET_TOPIC_CONTENT + role + "&" + "course_id=" + id,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    // console.log("getTopicContent response", response);
    return response?.data?.data;
  } catch (error) {
    console.log(error);
  }
};
