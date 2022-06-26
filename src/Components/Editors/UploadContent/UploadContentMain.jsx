import React, { useState, useEffect } from "react";
import { Button, Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ArrowBack } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import "./UploadContentMain.css";
import { addPost } from "../../../Redux/Actions/Editor/post.action";
import {
  getChildCategories,
  getParentChildCategories,
} from "../../../Redux/Actions/Editor/Category";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const UploadContentMain = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [contentTitle, setContentTitle] = useState("");
  const [contentId, setContentId] = useState("");
  const [uniqueIdentity, setUniqueIdentity] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState("");
  const [metaDescription, setMetaDiscription] = useState("");
  const [OGP, setOGP] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [imageName, setImageName] = useState("");
  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionContent, setSelectedOptionContent] = useState("");

  // console.log("image state", message);

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    return setEditorState(editorState);
  };
  const htmlText = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  // console.log("hrmlText", htmlText);

  const [parentCategory, setParentCategory] = useState([]);
  const [childCategory, setChildCategory] = useState([]);

  // console.log("parentCategory", parentCategory);
  // console.log("childCategory", childCategory);

  const handleChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setImageName(e.target.files[0]);
  };

  const handleButton = async (e) => {
    e.preventDefault();
    // navigate("/editormainpage")
    setIsLoading(true);

    const response = await dispatch(
      addPost(
        contentTitle,
        uniqueIdentity,
        tags,
        htmlText,
        imageName,
        metaDescription,
        OGP,
        contentId,
        token
      )
    );
    console.log("response", response);
    setMessage(response?.message);
    if (response?.message === "Add Post Successfully") {
      navigate("/mycontents");
    }

    const timer = setTimeout(() => {
      setMessage("");
    }, 5000);

    setIsLoading(false);
    return () => clearTimeout(timer);
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
    control: (base) => ({
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

  const handleBackgroung = () => {
    if (
      theme === true &&
      window.location.href.split("/")[3] === "uploadcontentmain"
    ) {
      return "#eeeeee";
    }
  };

  const handleBack = () => {
    navigate("/addnewcategory");
  };

  const handleParentChildeCategory = async () => {
    const response = await dispatch(getParentChildCategories(token));
    // console.log("getParentChildCategories response", response)
    setParentCategory(response);
  };

  useEffect(() => {
    handleParentChildeCategory();
  }, []);

  const parentOptions = parentCategory?.map((category) => {
    // console.log("category.id", category.id);
    return { id: category.id, label: category.CategoryName };
  });
  // console.log("parentCategory", parentOptions, selectedOption);

  const handleSelector = async (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log("selectedOption ID", selectedOption);
    // setContentId(selectedOption?.id);

    const response = await dispatch(
      getChildCategories(selectedOption.id, token)
    );
    setChildCategory(response);
    // console.log("response", response);
  };

  const childOptions = childCategory?.map((category) => {
    // console.log("category.id", category.id);
    return {
      id: category?.id,
      label: category?.course,
      identifier: category?.unique_identifier,
    };
  });

  const handleSelectorContent = (selectedOptionContent) => {
    setSelectedOptionContent(selectedOptionContent);
    console.log("selectedOption ID", selectedOptionContent);
    setUniqueIdentity(selectedOptionContent?.id);
    setContentId(selectedOptionContent?.identifier);
  };

  return (
    <>
      <div style={{ background: handleBackgroung() }}>
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
          Upload a New Content
        </div>
        <Grid container className="main_root_container_upload_content">
          <Grid
            item
            lg={4}
            md={4}
            sm={12}
            xs={12}
            style={{ marginTop: "-15px" }}
          >
            {message === "Add Post Successfully" ? (
              <div className={theme ? "successMessage" : "successMessageTwo"}>
                <h4>Post added Successfully.</h4>
              </div>
            ) : message === "All Fields are Required" ? (
              <div className="errorMessage">{message}</div>
            ) : message === "title Already Exist" ? (
              <div className="errorMessage">Content title already exist.</div>
            ) : message === "Image format is incorrect" ? (
              <div className="errorMessage">
                {message}. Please upload in jpeg,png file foramte
              </div>
            ) : message ===
              "['title', 'Categroyid', 'tags', 'image', 'content', 'meta_description', 'OGP', 'uniqueidentifier'] all keys are required" ? (
              <div className="errorMessage">All Fields are Required</div>
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
                // placeholder="Git & GitHub Introduction"
                options={childOptions}
                onChange={handleSelectorContent}
                value={selectedOptionContent}
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
                    ? "uploadcontentinputfieldtwo widthautoclass "
                    : "uploadcontentinputfield widthautoclass"
                }
                placeholder="Content Title"
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
                placeholder="Content ID"
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
                placeholder="Tags"
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
                placeholder="Meta Descriptions"
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
                placeholder="OGP(Open Graph Protocol)"
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
            style={{ float: "right" }}
          >
            <div className="widthautoclass">
              <Grid container spacing={1}>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <div className="main_slide_container">
                    <div style={{ paddingBottom: "10px" }}></div>
                    <span>{imageName?.name}</span>
                    <div>
                      <label htmlFor="contained-button-file">
                        <input
                          accept="image/*"
                          id="contained-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={(e) => handleChange(e)}
                        />
                        <Button
                          variant="contained"
                          color="primary"
                          component="span"
                          className="image_button selectanimagebutton"
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
                      <span
                        style={{ color: `${theme ? "#363636" : "#FFFFFF"}` }}
                      >
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
            {isLoading ? (
              <Box
                className="loginbuttontext"
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <CircularProgress color="inherit" size={30} />
              </Box>
            ) : (
              <button className="update_button_new" onClick={handleButton}>
                Upload
              </button>
            )}
          </div>
        </Grid>
      </div>
    </>
  );
};

export default UploadContentMain;
