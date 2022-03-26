import React from "react";
import "./EditorMainPage.css";
import { Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const EditorsMainPage = () => {
  const navigate = useNavigate();
const theme = useSelector((state) => state.theme.state)
  return (
    <>
      <div style={{ height: "100%" }}>
        <div style={{ marginTop: "-40px" }}>
          <Button   className="back_button"
          style={{ color: `${theme ? 'black' : 'white'}` }} startIcon={<ArrowBackIcon />}>
            Back
          </Button>
        </div>
        <div className="editormainpage_root_contianer">
          <div>
            <Typography variant="h6" noWrap component="div">
              <span className={theme ? 'editors_menu_heading_sub' : 'editors_menu_heading'}>Editor's Menu</span>
            </Typography>
          </div>
          <div>
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
                className={theme ? 'git_introduction_dropdown_sub' : 'git_introduction_dropdown'}
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
