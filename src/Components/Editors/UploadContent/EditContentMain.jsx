import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import image5 from "../../../assests/image5.png";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./UploadContentMain.css";

const EditContentMain = () => {
  const navigate = useNavigate();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {}, [editorState]);
  return (
    <>
      <div style={{ marginTop: "-40px" }}>
        <button
          onClick={() => navigate("/detailpage")}
          className="back_button"
        >
          <ArrowBackIcon style={{ fontSize: "18px" }} />{" "}
          <span style={{ paddingLeft: "10px", fontSize: "13px" }}>BACK</span>
        </button>
      </div>
      <div className="upload_new_content_text">Upload a New Content</div>
      <Grid container className="main_root_container_upload_content">
        <Grid item lg={4} md={4} sm={12} xs={12} style={{ marginTop: "-15px" }}>
          <span className="addcategory_text">Select Course</span>
          <select
            className="addcategory_input"
            style={{ width: "100%" }}
            name="cars"
            id="cars"
          >
            <option value="volvo">Git & GitHub Introduction</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>

          <span className="addcategory_text">Select Chapter</span>
          <select
            className="addcategory_input"
            style={{ width: "100%" }}
            name="cars"
            id="cars"
          >
            <option value="volvo">Chapter 1.Git & GitHub Key Concepts</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>

          <span className="addcategory_text">Content Title</span>
          <input
            style={{ width: "100%" }}
            className="addcategory_input"
            placeholder=""
           
          />

          <span className="addcategory_text">Content ID</span>
          <input
            style={{ width: "100%" }}
            className="addcategory_input"
            placeholder=""
           
          />
          <span className="addcategory_text">Tags(Max 5 Tags)</span>
          <input
            style={{ width: "100%" }}
            className="addcategory_input"
            placeholder=""
           
          />

          <span className="addcategory_text">Meta Descriptions</span>
          <textarea
            style={{ width: "100%" }}
            className="addcategory_input"
            id="message"
            rows="6"
            placeholder=""
           
          />

          <span className="addcategory_text">OGP(Open Graph Protocol)</span>
          <textarea
            style={{ width: "100%" }}
            className="addcategory_input"
            id="message"
            rows="6"
            placeholder=""
           
          />
        </Grid>
        <Grid
          item
          lg={8}
          md={8}
          sm={12}
          xs={12}
          style={{ padding: "20px 20px", marginTop: "-15px" }}
        >
          <div style={{ width: "100%" }}>
            <Grid container>
              <Grid item lg={3} md={4} sm={12} xs={12}>
                <div className="main_slide_container">
                  <div>
                    <span>Main Slide</span>
                  </div>
                  <div>
                    <button
                      className="image_button"
                      type="button"
                      style={{ height: "20px" }}
                    >
                      Select an Image File
                    </button>
                  </div>
                </div>
              </Grid>

              <Grid item lg={9} md={8} sm={0} xs={0}>
                <div className="image_none">
                  <div>
                    <span>Preview</span>
                  </div>
                  <img src={image5} alt="" />
                </div>
              </Grid>
            </Grid>
            <div className="main_slide_container">
              <span>Edit Main Content</span>
              <div
                style={{
                  padding: "2px",
                  minHeight: "462px",
                  backgroundColor: " #4f4f4f",
                }}
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
