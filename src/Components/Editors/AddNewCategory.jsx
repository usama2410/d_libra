import React, { useState, useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import "./AddNewCategory.css";
import { useSelector, useDispatch } from "react-redux";
import "../Sidebar.css";
import {
  addnewCategory,
  getParentChildCategories,
} from "../../Redux/Actions/Editor/Category";
import Select from "react-select";
import { ArrowBack } from "@mui/icons-material";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const AddNewCategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.state);
  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");
  const [chapId, setchapId] = useState("");
  const [chapName, setChapName] = useState("");
  const [slug, setSlug] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  // console.log("message", message);

  const [parentCategory, setParentCategory] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const token = useSelector((state) => state.auth.token);

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setImageName(e.target.files[0].name);
    }
  };

  const handleBack = () => {
    navigate("/editcoursestructure");
  };
  const handleSubmit = async (e) => {
    // navigate("/editormainpage");
    e.preventDefault();
    setIsLoading(true);
    const response = await dispatch(
      addnewCategory(chapName, chapId, slug, token)
    );
    setMessage(response.message);

    const timer = setTimeout(() => {
      setErrorMessage(false);
      setMessage("");
    }, 5000);
    setIsLoading(false);
    return () => clearTimeout(timer);
  };

  // const options = [
  //   { value: "chocolate", label: "Git & Git Hub Introduction" },
  //   { value: "Saab", label: "Saab" },
  //   { value: "Opel", label: "Opel" },
  //   { value: "Audi", label: "Audi" },
  // ];

  const handleParentChildeCategory = async () => {
    const response = await dispatch(getParentChildCategories(token));
    // console.log("getParentChildCategories response", response)
    setParentCategory(response);
  };

  useEffect(() => {
    handleParentChildeCategory();
  }, []);

  const parentOptions = parentCategory?.map((category) => {
    // console.log("category.id", category.id);
    return { id: category.id, label: category.CategoryName };
  });

  const handleSelector = async (selectedOption) => {
    setSelectedOption(selectedOption);
    // console.log("selectedOption ID", selectedOption.id);
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      background: " #FFFFFF",
      borderRadius: "5px",
      border: "none",
      color: " #363636",
      boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)",
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
    control: (base) => ({
      ...base,
      background: " #4F4F4F",
      borderRadius: "5px",
      border: "none",
      color: "white",
      boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)",
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
          {errorMessage === true ? (
            <div className="errorMessage">Feilds cannot be empty!</div>
          ) : message ? (
            message === "Add Categroy Successfully" ? (
              <div className={theme ? "successMessage" : "successMessageTwo"}>
                Sub category added successfully
              </div>
            ) : message === "All Fields are Required" ? (
              <div className="errorMessage"> All Fields are Required </div>
            ) : null
          ) : null}

          {message === "Category Name Already Exist" ? (
            <div className="errorMessage">{message}</div>
          ) : message === "Slug Name Already Exist" ? (
            <div className="errorMessage">{message}</div>
          ) : null}
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
            placeholder="Parent Category Id"
            value={selectedOption.id}
            // onChange={(e) => setchapId(e.target.value)}
          />
          <span
            className="addcategory_text"
            style={{ color: `${theme ? "#363636" : "#FFFFFF"}` }}
          >
            Select Parent Category/Course
          </span>
          <Select
            styles={theme ? customStyles : customStyless}
            className={
              theme
                ? "git_introduction_dropdown_sub"
                : "git_introduction_dropdown"
            }
            placeholder="Git & GitHub Introduction"
            options={parentOptions}
            onChange={handleSelector}
            value={selectedOption}
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
          <div className="selectimagecontainer">
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
          <div className="newimage">
            {image ? (
              <div className="noimagefirstcontainer">
                <img src={image} className="noimagesecondcontainer" alt="" />
              </div>
            ) : (
              <span className="noimagetext">No Image</span>
            )}
          </div>
        </div>
        <div className="update_button_newcategory">
          {isLoading ? (
            <Box
              className="update_button"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <CircularProgress color="inherit" size={30} />
            </Box>
          ) : (
            <button
              className="update_button   "
              onClick={handleSubmit}
              style={{ marginBottom: "40px", cursor: "pointer" }}
            >
              Update
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default AddNewCategory;
