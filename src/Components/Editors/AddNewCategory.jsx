import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./AddNewCategory.css";
import { useSelector, useDispatch } from "react-redux";
import "../Sidebar.css";
import { addnewCategory } from "../../Redux/Actions/Editor/Category";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
const AddNewCategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.state);

  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");
  const [chapId, setchapId] = useState("");
  const [chapName, setChapName] = useState("");
  const [slug, setSlug] = useState("");

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setImageName(e.target.files[0].name);
    }
  };const handleBack = () => {

  }
  const handleSubmit = async (e) => {
    // console.log("chapName",)
    e.preventDefault();
    await dispatch(addnewCategory(chapName, chapId, slug));
  };
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

      <div className="addnewcategorycontainer">
        <div>
          <Typography variant="h6" noWrap component="div">
            <span
              className={
                theme
                  ? "add_new_category_heading_sub"
                  : "add_new_category_heading"
              }
            >
              Add a New Category, Course or Chapter
            </span>
          </Typography>
        </div>
        <div
       className="addcategorysubcontainer"
        >
          <span
            className="addcategory_text"
            style={{ color: `${theme ? "#363636" : "white"}` }}
          >
            Category/Course/Chapter Name
          </span>
          <input
            className={theme ? "addcategory_inputt_sub" : "addcategory_inputt"}
            placeholder="Cloud Computing"
            value={chapName}
            onChange={(e) => setChapName(e.target.value)}
          />
          <span
            className="addcategory_text"
            style={{ color: `${theme ? "#363636" : "white"}` }}
          >
            Category/Course/Chapter ID
          </span>
          <input
            className={theme ? "addcategory_inputt_sub" : "addcategory_inputt"}
            placeholder="4000"
            value={chapId}
            onChange={(e) => setchapId(e.target.value)}
          />
          <span
            className="addcategory_text"
            style={{ color: `${theme ? "#363636" : "white"}` }}
          >
            Select Parent Category/Course
          </span>
          <select
            className={
              theme ? "addcategory_dropdown_sub" : "addcategory_dropdown"
            }
            name="cars"
            id="cars"
          >
            <option value="volvo">Git & GitHub Introduction</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <span
            className="addcategory_text"
            style={{ color: `${theme ? "#363636" : "white"}` }}
          >
            Slug
          </span>
          <input
            className={theme ? "addcategory_inputt_sub" : "addcategory_inputt"}
            placeholder="cloudcomputing"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
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
                  marginTop: "14px",
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
              <span style={{ padding: "0px 5px " }}>No Image</span>
            )}
          </div>
        </div>
        <button
          className="update_button"
          onClick={handleSubmit}
          style={{ marginBottom: "40px" }}
        >
          Update
        </button>
      </div>
    </>
  );
};

export default AddNewCategory;
