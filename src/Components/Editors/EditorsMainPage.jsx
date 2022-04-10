import React from "react";
import "./EditorMainPage.css";
import { Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
const EditorsMainPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {

  }
  const theme = useSelector((state) => state.theme.state);
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

      <div className="editormainpage_root_contianer">
        <div>
          <Typography variant="h6" noWrap component="div">
            <span
              className={
                theme ? "editors_menu_heading_sub" : "editors_menu_heading"
              }
            >
              Editor's Menu
            </span>
          </Typography>
        </div>


        <div className="editormainpagebuttoncontainer">
          <Button
            variant="outlined"
            className="upload_contents_button"
            onClick={() => navigate("/editcoursestructure")}
          >
            Edit Course Structure{" "}
          </Button>
        </div>
        <div className="editormainpagebuttoncontainertwo">
          <Button
            variant="outlined"
            className="upload_contents_button"
            onClick={() => navigate("/uploadcontentmain")}
          >
            Upload Contents{" "}
          </Button>
        </div>
        <div className="editormainpagebuttoncontainerthree">
          <span  className="addcategory_text"
              style={{ color: `${theme ? "#363636" : "white"}` }}>
            Select Course for Edit
          </span>
          <div>
            <select
              className={
                theme
                  ? "git_introduction_dropdown_sub"
                  : "git_introduction_dropdown"
              }
              name="cars"
              id="cars"
            >
              <option value="volvo">Git & GitHub Introduction</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div style={{ justifyContent: "center", display: "flex" }}  className="editormainpagebuttoncontainertwo">
            <Button
              variant="outlined"
              className="upload_contents_button"
              onClick={() => navigate("/mycontents")}
            >
              Edit Contents{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditorsMainPage;
