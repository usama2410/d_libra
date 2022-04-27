import axios from "axios";
import { URL, endpoints } from "../../../endpoints";
import * as FormData from "form-data";

export const addPost =
  (contentTitle, contentId, tags, htmlText, metaDescription, OGP, token) =>
  async (dispatch) => {
    console.log(
      contentTitle,
      contentId,
      tags,
      htmlText,
      metaDescription,
      OGP
      //   token
    );
    const formData = new FormData();
    formData.append("title", contentTitle);
    formData.append("Categroyid", contentId);
    formData.append("tags", tags);
    formData.append("content", htmlText);
    formData.append("image", "/media/SuperAdmin/dummy.jpg");
    formData.append("meta_description", metaDescription);
    formData.append("OGP", OGP);
    try {
      const response = await axios.post(URL + endpoints.ADD_POST, formData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log("AddPost response", response);
    } catch (error) {
      console.log(error);
    }
  };
