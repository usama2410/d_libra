import React, { useState, useEffect } from "react";
import { Button, Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ArrowBack } from "@mui/icons-material";
import { useSelector } from "react-redux";
import Select from "react-select";
import "./UploadContentMain.css";

const UploadContentMain = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");
  const theme = useSelector((state) => state.theme.state);

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setImageName(e.target.files[0].name);
    }
  };

  const options = [
    { value: "chocolate", label: "Git & Git Hub Introduction" },
    { value: "Saab", label: "Saab" },
    { value: "Opel", label: "Opel" },
    { value: "Audi", label: "Audi" },
  ];

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

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleBack = () => {
    navigate("/addnewcategory");
  };

  useEffect(() => {}, [editorState]);

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
                options={options}
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
                placeholder="Git & GitHub Introduction"
                options={options}
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
                placeholder=""
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
                    onEditorStateChange={setEditorState}
                  />
                </div>
              </div>
            </div>
          </Grid>
          <div className="updatecontainerbutton">
            <button
              className="update_button_new"
              onClick={() => navigate("/editormainpage")}
            >
              Update
            </button>
          </div>
        </Grid>
      </div>
    </>
  );
};

export default UploadContentMain;
