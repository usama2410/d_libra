import React, { useState, useEffect } from "react";
import { Button, Grid } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useSelector, useDispatch } from "react-redux";
import { ArrowBack } from "@mui/icons-material";
import "./UploadContentMain.css";
import Select from "react-select";
import {
  getChildCategories,
  getParentChildCategories,
} from "../../../Redux/Actions/Editor/Category";

import {
  getPostByID,
  updatePost,
} from "../../../Redux/Actions/Editor/post.action";

const EditContentMain = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  console.log(params);

  const [contentTitle, setContentTitle] = useState();
  const [imageName, setImageName] = useState("");
  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);

  const [contentId, setContentId] = useState(params?.id?.split("=")[1]);
  const [categoryId, setCategoryId] = useState(
    params?.categoryid?.split("=")[1]
  );
  const [tags, setTags] = useState();
  const [image, setImage] = useState("");
  const [metaDescription, setMetaDiscription] = useState("");
  const [OGP, setOGP] = useState();

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionChild, setSelectedOptionChild] = useState("");

  const [parentCategory, setParentCategory] = useState([]);
  const [childCategory, setChildCategory] = useState([]);
  const [childCategoryTwo, setChildCategoryTwo] = useState([]);

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setImageName(e.target.files[0].name);
    }
  };

  // console.log("selectedOption", selectedOption);
  // console.log("selectedOptionChild", selectedOptionChild);

  const handleBack = () => {
    navigate(`/detailpage/${params?.id}/${params?.role}/${params?.categoryid}`);
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: " #FFFFFF",
      borderRadius: "5px",
      border: "none",
      color: " #363636",
      boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)",
      height: "40px",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#111111",
    }),
    menu: (base) => ({
      ...base,
      borderRadius: 0,
      marginTop: 0,
      backgroundColor: "yellow",
      color: " #363636",
    }),
    menuList: (base) => ({
      ...base,
      padding: 0,
      background: "white",
      color: " #363636",
    }),
    singleValue: (base) => ({
      ...base,
      color: " #363636",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: " #363636",
    }),
  };

  const customStyless = {
    control: (base, state) => ({
      ...base,
      background: " #4F4F4F",
      borderRadius: "5px",
      border: "none",
      color: "white",
      boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)",
      height: "40px",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#FFFFFF",
      opacity: 1,
    }),
    menu: (base) => ({
      ...base,
      borderRadius: 0,
      marginTop: 0,
      backgroundColor: "yellow",
      color: "black",
    }),
    menuList: (base) => ({
      ...base,
      padding: 0,
      background: "white",
      color: "black",
    }),
    singleValue: (base) => ({
      ...base,
      color: "#FFFFFF",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "white",
    }),
  };

  // useEffect(() => {}, [editorState]);

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    return setEditorState(editorState);
  };
  const htmlText = draftToHtml(convertToRaw(editorState.getCurrentContent()));

  const handleParentChildeCategory = async () => {
    const response = await dispatch(getParentChildCategories(token));
    // console.log("getParentChildCategories response", response)
    setParentCategory(response);
  };

  useEffect(() => {
    handleParentChildeCategory();
  }, [contentTitle]);

  const parentOptions = parentCategory?.map((category) => {
    // console.log("category.id", category.id);
    return { id: category.id, label: category.CategoryName };
  });
  // console.log("parentCategory", parentOptions, selectedOption);

  const childOptions = childCategory?.map((category) => {
    // console.log("category.id", category.id);
    return { id: category.id, label: category.CategoryName };
  });

  const handleSelector = async (selectedOption) => {
    setSelectedOption(selectedOption);
    // console.log("selectedOption ID", selectedOption.id);

    const response = await dispatch(
      getChildCategories(selectedOption.id, token)
    );
    setChildCategory(response);
    // console.log("response", response);
  };

  const handleSelectorChild = async (selectedOptionChild) => {
    setSelectedOptionChild(selectedOptionChild);
    // console.log("selectedOption ID", selectedOptionChild);

    const response = await dispatch(
      getChildCategories(selectedOption.id, token)
    );
    setChildCategoryTwo(response);
    // console.log("response", response);
  };

  const handleUpdatePost = async () => {
    const response = await dispatch(
      updatePost(
        contentTitle,
        categoryId,
        tags,
        htmlText,
        contentId,
        metaDescription,
        OGP,
        token
      )
    );
    // console.log("handleUpdatePost response", response);
    setMessage(response.message);
    setErrorMessage(true);

    const timer = setTimeout(() => {
      setErrorMessage(false);
    }, 5000);

    return () => clearTimeout(timer);
  };

  useEffect(() => {
    const postById = async () => {
      const response = await dispatch(
        getPostByID(params.id, params.role, params.categoryid, token)
      );
      setTags(response?.post?.tags);
      setContentTitle(response?.post?.title);
      setMetaDiscription(response?.post?.meta_description);
      setOGP(response?.post?.OGP);
    };
    postById();
  }, [contentTitle]);

  return (
    <>
      <button
        onClick={handleBack}
        className="back_button"
        style={{ color: `${theme ? " #363636" : "  #C8C8C8"}` }}
      >
        <ArrowBack className="backbutton_icon" />{" "}
        <span className="backbutton_text">Back</span>
      </button>
      <div
        className={
          theme ? "upload_new_content_text_sub" : "upload_new_content_text"
        }
      >
        Edit Contents
      </div>
      <Grid container className="main_root_container_upload_content">
        <Grid item lg={4} md={4} sm={12} xs={12} style={{ marginTop: "-15px" }}>
          {errorMessage === true && message === "Update Post Successfully" ? (
            <div className={theme ? "successMessage" : "successMessageTwo"}>
              <h4>Post Updated Successfully.</h4>
            </div>
          ) : null}
          <div>
            <span
              className="addcategory_text"
              style={{ color: `${theme ? "#363636" : "#FFFFFF"}` }}
            >
              Select Course
            </span>
            <Select
              styles={theme ? customStyles : customStyless}
              className={
                theme
                  ? "git_introduction_dropdown_sub_three"
                  : "git_introduction_dropdown_sub_two"
              }
              placeholder="Git & GitHub Introduction"
              options={parentOptions}
              onChange={handleSelector}
              value={selectedOption}
            />
          </div>
          <div>
            <span
              className="addcategory_text"
              style={{ color: `${theme ? "#363636" : "#FFFFFF"}` }}
            >
              Select Chapter
            </span>

            <Select
              styles={theme ? customStyles : customStyless}
              className={
                theme
                  ? "git_introduction_dropdown_sub_three"
                  : "git_introduction_dropdown_sub_two"
              }
              placeholder="Select"
              options={childOptions}
              onChange={handleSelectorChild}
              value={selectedOptionChild}
            />
          </div>
          <div>
            <span
              className="addcategory_text"
              style={{ color: `${theme ? "#363636" : "#FFFFFF"}` }}
            >
              Content Title
            </span>
            <input
              className={
                theme
                  ? "uploadcontentinputfieldtwo widthautoclass"
                  : "uploadcontentinputfield widthautoclass"
              }
              placeholder=""
              value={contentTitle}
              onChange={(e) => setContentTitle(e.target.value)}
            />
          </div>
          <div>
            <span
              className="addcategory_text"
              style={{ color: `${theme ? "#363636" : "#FFFFFF"}` }}
            >
              Content ID
            </span>
            <input
              className={
                theme
                  ? "uploadcontentinputfieldtwo widthautoclass"
                  : "uploadcontentinputfield widthautoclass"
              }
              placeholder=""
              value={contentId}
            />
          </div>
          <div>
            <span
              className="addcategory_text"
              style={{ color: `${theme ? "#363636" : "#FFFFFF"}` }}
            >
              Tags(Max 5 Tags)
            </span>
            <input
              className={
                theme
                  ? "uploadcontentinputfieldtwo widthautoclass"
                  : "uploadcontentinputfield widthautoclass"
              }
              placeholder=""
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
          <div>
            <span
              className="addcategory_text"
              style={{ color: `${theme ? "#363636" : "#FFFFFF"}` }}
            >
              Meta Descriptions
            </span>
            <textarea
              className={
                theme
                  ? "addcategory_textarea widthautoclass"
                  : "addcategory_textarea_sub widthautoclass"
              }
              id="message"
              rows="6"
              placeholder=""
              value={metaDescription}
              onChange={(e) => setMetaDiscription(e.target.value)}
            />
          </div>
          <div>
            <span
              className="addcategory_text"
              style={{ color: `${theme ? "#363636" : "#FFFFFF"}` }}
            >
              OGP(Open Graph Protocol)
            </span>
            <textarea
              className={
                theme
                  ? "addcategory_textarea widthautoclass"
                  : "addcategory_textarea_sub widthautoclass"
              }
              id="message"
              rows="6"
              placeholder=""
              value={OGP}
              onChange={(e) => setOGP(e.target.value)}
            />
          </div>
        </Grid>
        <Grid
          item
          lg={8}
          md={8}
          sm={12}
          xs={12}
          className="reactdraftcontainer"
        >
          <div className="widthautoclass">
            <Grid container spacing={1}>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <div className="main_slide_container">
                  <div style={{ paddingBottom: "10px" }}>
                    <span>{imageName}</span>
                  </div>
                  <div>
                    <label htmlFor="contained-button-file">
                      <input
                        accept="image/*"
                        id="contained-button-file"
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleChange}
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        component="span"
                        className="image_button"
                      >
                        Select an Image File
                      </Button>
                    </label>
                  </div>
                </div>
              </Grid>

              <Grid item lg={8} md={8} sm={0} xs={0}>
                <div className="image_none">
                  <div>
                    <span style={{ color: `${theme ? "#363636" : "#FFFFFF"}` }}>
                      Preview
                    </span>
                  </div>
                  {image ? (
                    <img src={image} className="noimagecontainer" alt="" />
                  ) : (
                    <span>No Image</span>
                  )}
                </div>
              </Grid>
            </Grid>
            <div className="editormaincontainer">
              <span className="addcategory_text">Edit Main Content</span>
              <div
                style={{
                  backgroundColor: `${theme ? "white" : "#4f4f4f"}`,
                }}
                className="editorstatecontainer"
              >
                <Editor
                  editorState={editorState}
                  wrapperClassName="demo-wrapper"
                  editorClassName="demo-editor"
                  onEditorStateChange={onEditorStateChange}
                  placeholder="Write description here"
                />
              </div>
            </div>
          </div>
        </Grid>
        <div className="updatecontainerbutton">
          <button className="update_button_new" onClick={handleUpdatePost}>
            Update
          </button>
        </div>
      </Grid>
    </>
  );
};

export default EditContentMain;
