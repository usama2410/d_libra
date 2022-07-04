import React, { useState, useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import "./AddNewCategory.css";
import { useSelector, useDispatch } from "react-redux";
import "../Sidebar.css";
import {
  addnewChapters,
  addnewCourse,
  addParentCategorie,
  getAllCategories,
  getAllCourses,
} from "../../Redux/Actions/Editor/Category";
import Select from "react-select";
import { ArrowBack } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const AddNewCategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);
  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");
  const [uniqueIdentity, setUniqueIdentity] = useState("");
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  // CATEGORIES HOOKS
  const [parentCategory, setParentCategory] = useState([]);
  const [selectedCategoryOption, setSelectedCategoryOption] = useState("");

  // COURSE HOOKS
  const [parentCourse, setParentCourse] = useState([]);
  const [selectedCourseOption, setSelectedCourseOption] = useState("");
  const [parentID, setParentID] = useState("");

  // CHAPTER HOOKS
  const [selectedChapterOption, setSelectedChapterOption] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleBack = () => {
    navigate("/editcoursestructure");
  };

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setImageName(e.target.files[0]);
    }
  };

  // console.log("message", message);

  const options = [
    { value: "Category", label: "Category" },
    { value: "Course", label: "Course" },
    { value: "Chapter", label: "Chapter" },
  ];

  const handleSubmit = async (e) => {
    // navigate("/editormainpage");
    e.preventDefault();
    setIsLoading(true);

    // ADD COURSE CODE
    if (selectedCategoryOption?.label === "Course") {
      const response = await dispatch(
        addnewCourse(name, slug, imageName, uniqueIdentity, parentID, token)
      );
      response?.message?.includes("Successfully") && navigate("/");
      setMessage(response?.message);
    }

    // ADD CHAPTER CODE
    else if (selectedCategoryOption?.label === "Chapter") {
      const response = await dispatch(
        addnewChapters(name, parentID, slug, imageName, uniqueIdentity, token)
      );
      response?.message?.includes("Successfully") && navigate("/");
      setMessage(response?.message);
    }
    // ADD CATEGORY CODE
    else {
      const response = await dispatch(
        addParentCategorie(name, slug, imageName, uniqueIdentity, token)
      );
      response?.message?.includes("successfully") && navigate("/");
      setMessage(response?.message);
    }

    const timer = setTimeout(() => {
      setErrorMessage(false);
      setMessage("");
      setIsLoading(false);
    }, 5000);
    setIsLoading(false);
    return () => clearTimeout(timer);
  };

  // GET ALL CATEGORIES
  const handleGetAllCategories = async () => {
    const response = await dispatch(getAllCategories(token));
    // console.log("response", response);
    setParentCategory(response);
  };

  const categoryOptions = parentCategory?.map((category) => {
    // console.log("category", category);
    return {
      id: category?.parentid,
      label: category?.name,
      identifier: category?.unique_identifier,
    };
  });

  const handleGetCategorySelector = (selectedCategoryOption) => {
    // console.log(selectedCategoryOption);
    setUniqueIdentity(selectedCategoryOption?.identifier);
    setParentID(selectedCategoryOption?.id);
    setSelectedCourseOption(selectedCategoryOption);
  };

  // GET ALL COURSES
  const handleGetAllCourses = async () => {
    const response = await dispatch(getAllCourses(role, token));
    // console.log("response", response);
    setParentCourse(response);
  };

  const courseOptions = parentCourse?.map((course) => {
    // console.log("course", course);
    return {
      id: course?.id,
      label: course?.category,
      identifier: course?.unique_identifier,
    };
  });

  const handleGetCourseSelector = (selectedChapterOption) => {
    // console.log(selectedChapterOption);
    setUniqueIdentity(selectedChapterOption?.identifier);
    setParentID(selectedChapterOption?.id);
    setSelectedChapterOption(selectedChapterOption);
  };

  useEffect(() => {
    // authDashboradData();
    handleGetAllCategories();
    handleGetAllCourses();
  }, [selectedCategoryOption]);

  const handleCategorySelector = (selectedCategoryOption) => {
    // console.log(selectedCategoryOption);
    setSelectedCategoryOption(selectedCategoryOption);
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
          {errorMessage === true ? (
            <div className="errorMessage">{message}</div>
          ) : message ? (
            message === "Add Sub Categroy Successfully" ? (
              <div className={theme ? "successMessage" : "successMessageTwo"}>
                Sub category added successfully
              </div>
            ) : message === "All Fields are Required" ? (
              <div className="errorMessage">{message}</div>
            ) : (
              message ===
                "['name', 'slug', 'image', 'uniqueidentity'] all keys are required" && (
                <div className="errorMessage">All Fields are Required</div>
              )
            )
          ) : message === "Add successfully" ? (
            <div className={theme ? "successMessage" : "successMessageTwo"}>
              Category added successfully
            </div>
          ) : message === "Please choose a unique id" ? (
            <div className="errorMessage">{message}</div>
          ) : null}

          {message === "Category Name Already Exist" ? (
            <div className="errorMessage">{message}</div>
          ) : message === "Slug Name Already Exist" ? (
            <div className="errorMessage">{message}</div>
          ) : message === "Add Chapters Successfully" ? (
            <div className={theme ? "successMessage" : "successMessageTwo"}>
              Chapter added successfully
            </div>
          ) : message === "Add Course Successfully" ? (
            <div className={theme ? "successMessage" : "successMessageTwo"}>
              Course added successfully
            </div>
          ) : message === "Please choose a unique id" ? (
            <div className="errorMessage">{message}</div>
          ) : null}

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
          <div style={{ marginBottom: "30%", marginTop: "-40px" }}>
            <span
              className="addcategory_text"
              style={{ color: `${theme ? "#363636" : "#FFFFFF"}` }}
            >
              Are you registering Category or Course or Chapter?
            </span>

            <Select
              styles={theme ? customStyles : customStyless}
              className={
                theme
                  ? "git_introduction_dropdown_sub"
                  : "git_introduction_dropdown"
              }
              placeholder="Category"
              value={selectedCategoryOption}
              options={options}
              onChange={handleCategorySelector}
            />
          </div>

          {selectedCategoryOption?.label === "Course" && (
            <>
              <span
                className="addcategory_text"
                style={{ color: `${theme ? "#363636" : "#FFFFFF"}` }}
              >
                Select Parent Category
              </span>

              <Select
                styles={theme ? customStyles : customStyless}
                className={
                  theme
                    ? "git_introduction_dropdown_sub"
                    : "git_introduction_dropdown"
                }
                placeholder="Category"
                value={selectedCourseOption}
                options={categoryOptions}
                onChange={handleGetCategorySelector}
              />
            </>
          )}

          {selectedCategoryOption?.label === "Chapter" && (
            <>
              <span
                className="addcategory_text"
                style={{ color: `${theme ? "#363636" : "#FFFFFF"}` }}
              >
                Select Parent Course
              </span>

              <Select
                styles={theme ? customStyles : customStyless}
                className={
                  theme
                    ? "git_introduction_dropdown_sub"
                    : "git_introduction_dropdown"
                }
                placeholder="Course"
                value={selectedChapterOption}
                options={courseOptions}
                onChange={handleGetCourseSelector}
              />
            </>
          )}

          <span
            className="addcategory_text"
            style={{ color: `${theme ? "#363636" : "#FFFFFF"}` }}
          >
            {selectedCategoryOption?.label === "Course"
              ? "Course Name"
              : selectedCategoryOption?.label === "Chapter"
              ? "Chapter Name"
              : "Category Name "}
          </span>

          <input
            className={theme ? "addcategory_inputt_sub" : "addcategory_inputt"}
            placeholder="Cloud Computing"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span
            className="addcategory_text"
            style={{ color: `${theme ? "#363636" : "#FFFFFF"}` }}
          >
            {selectedCategoryOption?.label === "Course"
              ? "Course ID(4 + 2Digit)"
              : selectedCategoryOption?.label === "Chapter"
              ? "Course ID(4 + 2 + 2Digit)"
              : "Category ID(4 Digit)"}
          </span>
          <input
            className={theme ? "addcategory_inputt_sub" : "addcategory_inputt"}
            placeholder="Category ID"
            value={uniqueIdentity}
            maxlength={
              selectedCategoryOption?.label === "Category"
                ? 4
                : selectedCategoryOption?.label === "Course"
                ? 6
                : selectedCategoryOption?.label === "Chapter"
                ? 8
                : 4
            }
            // minlength={
            //   selectedCategoryOption?.label === "Category"
            //     ? 4
            //     : selectedCategoryOption?.label === "Course"
            //     ? 6
            //     : selectedCategoryOption?.label === "Chapter"
            //     ? 8
            //     : 4
            // }
            name="number"
            onChange={(e) =>
              setUniqueIdentity(e.target.value.replace(/\D/g, ""))
            }
            // onChange={(e) => hanldeSetUniqueIdentity(e.target)}
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
          <div style={{ marginBottom: "92px" }}>
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
        </div>
        <div
          className="update_button_newcategory"
          style={{ marginTop: "150px", marginBottom: "92px" }}
        >
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
