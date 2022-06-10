import React, { useState, useEffect } from "react";
import "./EditorMainPage.css";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ArrowBack } from "@mui/icons-material";
import Select from "react-select";
import { getParentChildCategories } from "../../Redux/Actions/Editor/Category";

const EditorsMainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const handleBack = () => {};
  const theme = useSelector((state) => state.theme.state);

  const [parentCategory, setParentCategory] = useState([]);

  const handleBackgroung = () => {
    if (
      theme === true &&
      window.location.href.split("/")[3] === "editormainpage"
    ) {
      return "#eeeeee";
    }
  };



  const handleParentChildeCategory = async () => {
    const response = await dispatch(getParentChildCategories(token));
    // console.log("getParentChildCategories response", response)
    setParentCategory(response);
  };

  const parentOptions = parentCategory?.map((category) => {
    // console.log("category.id", category.id);
    return { id: category.id, label: category.CategoryName };
  });

  useEffect(() => {
    handleParentChildeCategory();
  }, []);

  const customStyless = {
    control: (base, state) => ({
      ...base,
      background: " #4F4F4F",
      borderRadius: "5px",
      border: "none",
      color: "white",
      boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)",
      width: "300px",
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
      <div style={{ background: handleBackgroung() }}>
        <button
          onClick={handleBack}
          className="back_button"
          style={{ color: `${theme ? " #363636" : "  #C8C8C8"}` }}
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
            <span className="selectcourseforedit" style={{ color: "#FFFFFF" }}>
              Select Course for Edit
            </span>
            <div>
              <Select
                styles={customStyless}
                className={
                  theme
                    ? "git_introduction_dropdown_sub"
                    : "git_introduction_dropdown"
                }
                placeholder="Git & GitHub Introduction"
                options={parentOptions}
              />
            </div>
            <div className="editormainpagebuttoncontainertwo centercontainer">
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
        <div
          className="footer_copyright editor_mainPage_footer"
          style={{ color: theme ? " #000000" : " #C8C8C8 " }}
        >
          <span style={{ fontSize: "12px" }}>
            &copy; D-Libra All Rights Reserved
          </span>
        </div>
      </div>
    </>
  );
};

export default EditorsMainPage;
