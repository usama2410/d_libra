import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./AddNewCategory.css";
import { useSelector, useDispatch } from "react-redux";
import "../Sidebar.css";
import { addnewCategory } from "../../Redux/Actions/Editor/Category";
import Select from "react-select";

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
  };
  const handleBack = () => {
    navigate("/editcoursestructure")
  };
  const handleSubmit = async (e) => {
    // console.log("chapName",)
    navigate("/editormainpage")
    e.preventDefault();
    await dispatch(addnewCategory(chapName, chapId, slug));
  };

  const handleBackgroung = () => {
    if (
      theme === true &&
      window.location.href.split("/")[3] === "addnewcategory"
    ) {
      return "#eeeeee";
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
      // width: "450px",
      height: "40px",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#111111",
    }),
    menu: (base, state) => ({
      ...base,
      borderRadius: 0,
      marginTop: 0,
      backgroundColor: "yellow",
      color: " #363636",
    }),
    menuList: (base, state) => ({
      ...base,
      padding: 0,
      background: "white",
      color: " #363636",
    }),
    singleValue: (base, state) => ({
      ...base,
      color: " #363636",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: " #363636",
    }),
  };

  const customStyless = {
    control: (base, state) => ({
      ...base,
      background: " #4F4F4F",
      borderRadius: "5px",
      border: "none",
      // backgroundColor: state.isSelected ? "rgba(189,197,209,.3)" : "white",
      color: "white",
      boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)",
      // width: "450px",
      height: "40px",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#FFFFFF",
      opacity: 1,
    }),
    menu: (base, state) => ({
      ...base,
      borderRadius: 0,
      marginTop: 0,
      backgroundColor: "yellow",
      color: "black",
    }),
    menuList: (base, state) => ({
      ...base,
      padding: 0,
      background: "white",
      color: "black",
    }),
    singleValue: (base, state) => ({
      ...base,
      color: "#FFFFFF",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "white",
    }),
  };

  return (
    <>
      {/* <div style={{ background: handleBackgroung() }}> */}
      <button
        onClick={handleBack}
        className="back_button"
        style={{ color: `${theme ? " #363636" : "  #C8C8C8"}` }}
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
        <div className="addcategorysubcontainer">
          <span
            className="addcategory_text"
            style={{ color: `${theme ? "#363636" : "#FFFFFF"}` }}
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
            style={{ color: `${theme ? "#363636" : "#FFFFFF"}` }}
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
            style={{ color: `${theme ? "#363636" : "#FFFFFF"}` }}
          >
            Select Parent Category/Course
          </span>
          {/* <select
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
            </select> */}

          <Select
            styles={theme ? customStyles : customStyless}
            className={
              theme
                ? "git_introduction_dropdown_sub"
                : "git_introduction_dropdown"
            }
            placeholder="Git & GitHub Introduction"
            options={options}
          />
          <span
            className="addcategory_text"
            style={{ color: `${theme ? "#363636" : "#FFFFFF"}` }}
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
              <span
                style={{
                  padding: "20px 5px 0px 5px ",
                  position: "relative",
                  top: "5px",
                }}
              >
                No Image
              </span>
            )}
          </div>
        </div>
        <div className="update_button_newcategory">
          <button
            className="update_button   "
            onClick={handleSubmit}
            style={{ marginBottom: "40px" }}
          >
            Update
          </button>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default AddNewCategory;
