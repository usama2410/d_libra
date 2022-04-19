import React from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import FooterButtons from "./FooterButtons";
import { useSelector } from "react-redux";
import "./RatingForm.css";
import Select from "react-select";

const Feedback = () => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.state);

  const handleBack = () => {
    navigate("/ratingform");
  };

  const options = [
    { value: "chocolate", label: "Git & Git Hub Introduction" },
    { value: "Saab", label: "Saab" },
    { value: "Opel", label: "Opel" },
    { value: "Audi", label: "Audi" },
  ];

  const customStyles = {
    control: (base) => ({
      ...base,
      background: " #FFFFFF",
      borderRadius: "5px",
      border: "none",
      color: " #363636",
      boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)",
      height: "50px",
      "@media only screen and (max-width: 425px)": {
        height: "40px",
      },
    }),
    placeholder: (base) => ({
      ...base,
      color: "#111111",
    }),
    menu: (base) => ({
      ...base,
      borderRadius: 0,
      marginTop: 0,
      backgroundColor: "yellow",
      color: " #363636",
    }),
    menuList: (base) => ({
      ...base,
      padding: 0,
      background: "white",
      color: " #363636",
    }),
    singleValue: (base) => ({
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
      height: "50px",
      "@media only screen and (max-width: 425px)": {
        height: "40px",
      },
    }),

    placeholder: (base) => ({
      ...base,
      color: "#FFFFFF",
      opacity: 1,
    }),
    menu: (base) => ({
      ...base,
      borderRadius: 0,
      marginTop: 0,
      backgroundColor: "yellow",
      color: "black",
    }),
    menuList: (base) => ({
      ...base,
      padding: 0,
      background: "white",
      color: "black",
    }),
    singleValue: (base) => ({
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
        style={{ color: `${theme ? " #363636" : " #FFFFFF"}` }}
      >
        <ArrowBack className="backbutton_icon" />{" "}
        <span className="backbutton_text">Back</span>
      </button>
      <div className="ratingform_root_two">
        <Select
          styles={theme ? customStyles : customStyless}
          className={
            theme ? "addcategory_input_sub_two" : "addcategory_input_two"
          }
          placeholder="Git & GitHub Introduction"
          options={options}
        />
        <Select
          styles={theme ? customStyles : customStyless}
          className={
            theme ? "addcategory_input_sub_two" : "addcategory_input_two"
          }
          placeholder="Git & GitHub Introduction"
          options={options}
        />
      </div>
      <div className="ratingform_root_three">
        <div className="rating_form_sub_span">
          <span
            className="rating_form_span_two"
            style={{ color: `${theme ? "#363636" : "white"}` }}
          >
            Feedback Comments:
          </span>
        </div>
        <div>
          <textarea
            style={{ color: `${theme ? "black" : "white"}`, height: "403px" }}
            className={
              theme ? "rating_form_textarea_sub" : "rating_form_textarea"
            }
            id="message"
            rows="20"
            placeholder=""
            type="text"
          />
        </div>
        <div className="submitfeedbackbutton">
          <Button variant="contained" className="user_buttons">
            Submit
          </Button>
        </div>
      </div>
      <FooterButtons />
    </>
  );
};

export default Feedback;
