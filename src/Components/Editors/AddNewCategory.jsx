import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./AddNewCategory.css";
import "../Sidebar.css";

const AddNewCategory = () => {
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setImageName(e.target.files[0].name);
    }
  };
  return (
    <>
      <div style={{ marginTop: "-40px" }}>
        <Button
          onClick={() => navigate("/editcoursestructure")}
          className="back_button"
        >
          <ArrowBackIcon style={{ fontSize: "18px" }} />{" "}
          <span style={{ paddingLeft: "10px", fontSize: "13px" }}>BACK</span>
        </Button>
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
            paddingTop: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span className="addcategory_text">Category/Course/Chapter Name</span>
          <input
            className="addcategory_input"
            placeholder="Cloud Computing"
           
          />
          <span className="addcategory_text">Category/Course/Chapter ID</span>
          <input className="addcategory_input" placeholder="4000" />
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
           
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
            }}
          >
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
          <div className="image_none">
            {image ? (
              <div
                style={{
                  width: "240px",
                  height: "200px",
                }}
              >
                <img
                  src={image}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  alt=""
                />
              </div>
            ) : (
              <span>No Image</span>
            )}
          </div>
        </div>
        <button className="update_button">Update</button>
      </div>
    </>
  );
};

export default AddNewCategory;
