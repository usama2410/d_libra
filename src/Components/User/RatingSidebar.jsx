import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { ArrowBack } from "@mui/icons-material";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import FooterButtons from "./FooterButtons";
import { useSelector, useDispatch } from "react-redux";
import "./RatingForm.css";
import StarIcon from "@mui/icons-material/Star";
import Select from "react-select";
import {
  getMainCategory,
  getParentChildCategories,
} from "../../Redux/Actions/Editor/Category";
import { ratingCourse } from "../../Redux/Actions/Client Side/Rating.action";

const RatingSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBack = () => {
    navigate("/usersettingviewpage");
  };
  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);

  const [value, setValue] = React.useState(2);
  const [comment, setComment] = useState("");
  const [parentCategory, setParentCategory] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [content_id, setContent_id] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  console.log("message", message);

  const handleParentChildeCategory = async () => {
    const response = await dispatch(getMainCategory(token));
    // console.log("getParentChildCategories response", response)
    setParentCategory(response?.data[0]?.items);
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
    setContent_id(selectedOption.id);
  };

  const handleSubmit = async () => {
    const response = await dispatch(
      ratingCourse(role, content_id, value, comment, token)
    );
    setErrorMessage(true);
    setMessage(response?.message);

    const timer = setTimeout(() => {
      setErrorMessage(false);
    }, 5000);

    return () => clearTimeout(timer);
  };

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
      <div className="ratingform_root_four_five">
        {errorMessage === true && message === "Rating Content Sucessfully" ? (
          <div>
            <h4 style={{ color: `${theme ? "#363636" : "#FFFFFF"}` }}>
              Content rated sucessfully
            </h4>
          </div>
        ) : errorMessage === true && message === "Already rated" ? (
          <div>
            <h4 style={{ color: `${theme ? "#363636" : "#FFFFFF"}` }}>
              Already rated
            </h4>
          </div>
        ) : null}

        <Select
          styles={theme ? customStyles : customStyless}
          className={
            theme ? "addcategory_input_sub_two" : "addcategory_input_two"
          }
          placeholder="Git & GitHub Introduction"
          options={parentOptions}
          onChange={handleSelector}
          value={selectedOption}
        />

        <div className="ratingsidebarcomponent">
          <Rating
            name="simple-controlled"
            style={{ fontSize: "48px" }}
            emptyIcon={
              <StarIcon style={{ color: "#C4C4C4" }} fontSize="inherit" />
            }
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
      </div>

      <div className="ratingform_root_five">
        <div className="rating_form_sub_span">
          <span
            className="rating_form_span_two"
            style={{ color: `${theme ? "#363636" : "#C8C8C8"}` }}
          >
            Rating Comments:
          </span>
        </div>

        <div>
          <textarea
            className={
              theme ? "rating_form_textarea_sub" : "rating_form_textarea"
            }
            style={{ color: `${theme ? "black" : "white"}` }}
            id="message"
            rows="14"
            placeholder=""
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <div className="rating_form_sub_four">
          <Button
            variant="contained"
            className="user_buttons"
            onClick={handleSubmit}
          >
            Submit
          </Button>

          <div className="user_buttons_sub_three">
            <span style={{ color: theme ? "  #111111" : " #C8C8C8" }}>
              Make a more specific <br /> feedback on contents
            </span>
            <span
              style={{
                paddingLeft: "10px",
                fontSize: "26px",
                color: theme ? "  #111111" : " #C8C8C8",
              }}
            >
              <HiOutlineArrowNarrowRight
                style={{ color: theme ? "  #111111" : " #C8C8C8" }}
              />
            </span>
          </div>
        </div>
        <div
          className="user_buttons_sub_three_hidden"
          onClick={() => navigate("/feedback")}
        >
          <span style={{ color: theme ? "  #111111" : " #C8C8C8" }}>
            Make a more specific <br /> feedback on contents
          </span>
          <span
            style={{
              paddingLeft: "10px",
              fontSize: "26px",
              color: theme ? "  #111111" : " #C8C8C8",
            }}
          >
            <HiOutlineArrowNarrowRight
              style={{ color: theme ? "  #111111" : " #C8C8C8" }}
            />
          </span>
        </div>
        <div
          className="footer_copyright ratingsidebar_footer"
          style={{ color: theme ? " #000000" : " #C8C8C8 " }}
        >
          <span style={{ fontSize: "12px" }}>
            &copy; D-Libra All Rights Reserved
          </span>
        </div>
      </div>
      <div>
        <FooterButtons />
      </div>
    </>
  );
};

export default RatingSidebar;
