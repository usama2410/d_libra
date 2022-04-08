import React, { useState, useEffect } from "react";
import { Button, Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useSelector } from "react-redux";
import "./UploadContentMain.css";
const EditContentMain = () => {
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
  useEffect(() => {}, [editorState]);
  return (
    <>
      <button
        onClick={() => navigate("/editormainpage")}
        className="back_button "
        style={{ color: `${theme ? "black" : "white"}` }}
      >
        <ArrowBackIcon style={{ fontSize: "18px" }} />{" "}
        <span style={{ paddingLeft: "5px", fontSize: "13px" }}>Back</span>
      </button>

      <div
        style={{ marginBottom: "10px" }}
        className={
          theme ? "upload_new_content_text_sub" : "upload_new_content_text"
        }
      >
        Edit Contents
      </div>
      <Grid container className="main_root_container_upload_content">
        <Grid item lg={3} md={3} sm={12} xs={12} style={{ marginTop: "-15px" }}>
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
          lg={9}
          md={9}
          sm={12}
          xs={12}
          className="reactdraftcontainer"
          style={{ float: "right" }}
        >
          <div style={{ width: "100%" }}>
            <Grid container>
              <Grid item lg={3} md={4} sm={12} xs={12}>
                <div className="main_slide_container">
                  <div>
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
                        style={{ height: "20px" }}
                        className="image_button"
                      >
                        Select an Image File
                      </Button>
                    </label>
                  </div>
                </div>
              </Grid>

              <Grid item lg={9} md={8} sm={0} xs={0}>
                <div
                  className="image_none"
                  style={{
                    width: "240px",
                    height: "160px",
                    // marginLeft: "30px",
                  }}
                >
                  <div>
                    <span>Preview</span>
                  </div>
                  {image ? (
                    <img
                      src={image}
                      style={{
                        width: "100%",
                        height: "100%",
                        marginLeft: "-41px",
                        objectFit: "contain",
                      }}
                      alt=""
                    />
                  ) : (
                    <span>No Image</span>
                  )}
                </div>
              </Grid>
            </Grid>
            <div style={{ marginTop: "50px" }}>
              <span className="addcategory_text">Edit Main Content</span>
              <div
                style={{
                  padding: "10px 10px 10px 10px",
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
          <button className="update_button_new">Update</button>
        </Grid>
      </Grid>
    </>
  );
};

export default EditContentMain;
