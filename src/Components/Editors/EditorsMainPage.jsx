import React from "react";
import "./EditorMainPage.css";
import { Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import FooterCopyright from "../User/FooterCopyright";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Select from "react-select";
const EditorsMainPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {};
  const theme = useSelector((state) => state.theme.state);

  const handleBackgroung = () => {
    if (
      theme === true &&
      window.location.href.split("/")[3] === "editormainpage"
    ) {
      return "#eeeeee";
    }
  };

  const options = [
    { value: "chocolate", label: "Git & GitHub Introduction" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  // const customStyles = {
  //   control: (base, state) => ({
  //     ...base,
  //     background: " #FFFFFF",
  //     borderRadius: "5px",
  //     border: "none",
  //     color: " #363636",
  //     boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)",
  //     width: "300px",
  //     height: "40px",
  //   }),
  //   menu: (base, state) => ({
  //     ...base,
  //     borderRadius: 0,
  //     marginTop: 0,
  //     backgroundColor: "yellow",
  //     color: " #363636",
  //   }),
  //   menuList: (base, state) => ({
  //     ...base,
  //     padding: 0,
  //     background: "white",
  //     color: " #363636",
  //   }),
  //   singleValue: (base, state) => ({
  //     ...base,
  //     color: " #363636",
  //   }),
  //   dropdownIndicator: (base) => ({
  //     ...base,
  //     color: " #363636",
  //   }),
  // };

  const customStyless = {
    control: (base, state) => ({
      ...base,
      background: " #4F4F4F",
      borderRadius: "5px",
      border: "none",
      // backgroundColor: state.isSelected ? "rgba(189,197,209,.3)" : "white",
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
            <div
            //  className={
            //       theme
            //         ? "git_introduction_dropdown_sub"
            //         : "git_introduction_dropdown"
            //     }
            >
              <Select
                styles={customStyless}
                className={
                  theme
                    ? "git_introduction_dropdown_sub"
                    : "git_introduction_dropdown"
                }
                placeholder="Git & GitHub Introduction"
                options={options}
              />

              {/* <select
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
              </select> */}
            </div>
            <div
              style={{ justifyContent: "center", display: "flex" }}
              className="editormainpagebuttoncontainertwo"
            >
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
        <div className="footer_copyright editor_mainPage_footer"  style={{color: theme ? " #000000" : " #C8C8C8 "}}>
    <span style={{ fontSize: "12px" }}>&copy; D-Libra All Rights Reserved</span>
    </div> 
      </div>
    </>
  );
};

export default EditorsMainPage;
