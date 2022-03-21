import React from "react";
import "./EditorMainPage.css";
import { Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const EditorsMainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ height: "100%" }}>
        <div style={{ marginTop: "-40px" }}>
          <Button style={{ color: "black" }} startIcon={<ArrowBackIcon />}>
            Back
          </Button>
        </div>
        <div className="editormainpage_root_contianer">
          <div>
            <Typography variant="h6" noWrap component="div">
              <span className="editors_menu_heading">Editor's Menu</span>
            </Typography>
          </div>
          <div style={{ paddingTop: "40px" }}>
            <Button
              variant="outlined"
              className="upload_contents_button"
              onClick={() => navigate("/editcoursestructure")}
            >
              Edit Course Structure{" "}
            </Button>
          </div>
          <div>
            <Button variant="outlined" className="upload_contents_button" onClick={() => navigate('/uploadcontentmain')}>
              Upload Contents{" "}
            </Button>
          </div>
          <div style={{ marginTop: "68px" }}>
            <span className="editorpage_button_container_span">
              Select Course for Edit
            </span>
            <div>
              <select
                className="git_introduction_dropdown"
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
              <Button variant="outlined" className="upload_contents_button">
                Edit Contents{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditorsMainPage;
