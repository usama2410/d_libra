import React, { useState, useEffect } from "react";
import { Button, Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useSelector } from "react-redux";
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

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleBack = () => {

  }
  useEffect(() => {}, [editorState]);
  return (
    <>
       <button
        onClick={handleBack}
        className="back_button"
        style={{ color: `${theme ? " #363636" : " #FFFFFF"}` }}
      >
         <ArrowBack className="backbutton_icon" />{" "}
        <span className="backbutton_text">Back</span>
      </button>

      <div
        style={{ marginBottom: "10px" }}
        className={
          theme ? "upload_new_content_text_sub" : "upload_new_content_text"
        }
      >
        Upload a New Content
      </div>
      <Grid container className="main_root_container_upload_content">
        <Grid item lg={4} md={4} sm={12} xs={12} style={{ marginTop: "-15px" }}>
          <div>
            <span
              className="addcategory_text"
              style={{ color: `${theme ? "#363636" : "white"}` }}
            >
              Select Course
            </span>
            <select
              className={
                theme ? "uploadcontentinputfieldtwo" : "uploadcontentinputfield"
              }
              style={{ width: "100%" }}
              name="cars"
              id="cars"
            >
              <option value="volvo">Git & GitHub Introduction</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div>
            <span
              className="addcategory_text"
              style={{ color: `${theme ? "#363636" : "white"}` }}
            >
              Select Chapter
            </span>
            <select
              className={
                theme ? "uploadcontentinputfieldtwo" : "uploadcontentinputfield"
              }
              style={{ width: "100%" }}
              name="cars"
              id="cars"
            >
              <option value="volvo">Chapter 1.Git & GitHub Key Concepts</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div>
            <span
              className="addcategory_text"
              style={{ color: `${theme ? "#363636" : "white"}` }}
            >
              Content Title
            </span>
            <input
              style={{ width: "100%" }}
              className={
                theme ? "uploadcontentinputfieldtwo" : "uploadcontentinputfield"
              }
              placeholder=""
            />
          </div>
          <div>
            <span
              className="addcategory_text"
              style={{ color: `${theme ? "#363636" : "white"}` }}
            >
              Content ID
            </span>
            <input
              style={{ width: "100%" }}
              className={
                theme ? "uploadcontentinputfieldtwo" : "uploadcontentinputfield"
              }
              placeholder=""
            />
          </div>
          <div>
            <span
              className="addcategory_text"
              style={{ color: `${theme ? "#363636" : "white"}` }}
            >
              Tags(Max 5 Tags)
            </span>
            <input
              style={{ width: "100%" }}
              className={
                theme ? "uploadcontentinputfieldtwo" : "uploadcontentinputfield"
              }
              placeholder=""
            />
          </div>
          <div>
            <span
              className="addcategory_text"
              style={{ color: `${theme ? "#363636" : "white"}` }}
            >
              Meta Descriptions
            </span>
            <textarea
              style={{ width: "100%" }}
              className={
                theme ? "addcategory_textarea" : "addcategory_textarea_sub"
              }
              id="message"
              rows="6"
              placeholder=""
            />
          </div>
          <div>
            <span
              className="addcategory_text"
              style={{ color: `${theme ? "#363636" : "white"}` }}
            >
              OGP(Open Graph Protocol)
            </span>
            <textarea
              style={{ width: "100%" }}
              className={
                theme ? "addcategory_textarea" : "addcategory_textarea_sub"
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
          <div style={{ width: "100%" }}>
            <Grid container spacing={1}>
              <Grid item lg={4} md={4} sm={12} xs={12} >
                <div className="main_slide_container">
                  <div    style={{paddingBottom: "10px"}}>
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
                        // style={{ height: "20px" }}
                        className="image_button"
                     
                      >
                        Select an Image File
                      </Button>
                    </label>
                  </div>
                </div>
              </Grid>

              <Grid item lg={8} md={8} sm={0} xs={0}  >
                <div
                  className="image_none"
                  style={{
                    width: "300px",
                    height: "225px",
                    
                  }}
                >
                  <div>
                    <span 
            style={{ color: `${theme ? "#363636" : "white"}` }}>Preview</span>
                  </div>
                  {image ? (
                    <img
                      src={image}
                      style={{
                        width: "100%",
                        height: "100%",
                        marginLeft: "-10px",
                        objectFit: "contain",
                        paddingTop: "10px"
                      }}
                      alt=""
                    />
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
                  padding: "5px 5px 0px 5px",
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
        <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
       <button className="update_button_new">Update</button>
       </div>
      </Grid>
    </>
  );
};

export default UploadContentMain;
