import React from "react";
import { Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./AddNewCategory.css";
import "../Sidebar.css";

const AddNewCategory = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ marginTop: "-40px" }}>
        <button
          onClick={() => navigate("/editcoursestructure")}
          className="back_button"
        >
          <ArrowBackIcon style={{ fontSize: "18px" }} />{" "}
          <span style={{ paddingLeft: "10px", fontSize: "13px" }}>BACK</span>
        </button>
      </div>
      <div className="editormainpage_root_contianer">
        <div>
          <Typography variant="h6" noWrap component="div">
            <span className="add_new_category_heading">
              Add a New Category, Course or Chapter
            </span>
          </Typography>
        </div>
        <div
          style={{
            paddingTop: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span className="addcategory_text">Category/Course/Chapter Name</span>
          <input
            className="addcategory_input"
            placeholder="Cloud Computing"
            type="text"
          />
          <span className="addcategory_text">Category/Course/Chapter ID</span>
          <input className="addcategory_input" placeholder="4000" type="text" />
          <span className="addcategory_text">
            Select Parent Category/Course
          </span>
          <select className="addcategory_dropdown" name="cars" id="cars">
            <option value="volvo">Git & GitHub Introduction</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <span className="addcategory_text">Slug</span>
          <input
            className="addcategory_input"
            placeholder="cloudcomputing"
            type="text"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
            }}
          >
            <div>
              <span>Icon</span>
            </div>
            <div>
              <button className="image_button" type="button">
                Select an Image File
              </button>
            </div>
          </div>
        </div>
        <button className="update_button">Update</button>
      </div>
    </>
  );
};

export default AddNewCategory;
