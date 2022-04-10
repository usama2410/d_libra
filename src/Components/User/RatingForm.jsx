import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import image5 from "../../assests/image5.png";
import Rating from "@mui/material/Rating";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import FooterButtons from "./FooterButtons";
import { useSelector } from "react-redux";
import "./RatingForm.css";
import StarIcon from '@mui/icons-material/Star';
const RatingForm = () => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.state);
  const [value, setValue] = React.useState(2);
  return (
    <>

<button
          className="back_button "
          style={{ color: `${theme ? "black" : "white"}` }}
        >
          <ArrowBackIcon style={{ fontSize: "18px" }} />{" "}
          <span style={{ paddingLeft: "5px", fontSize: "13px" }}>Back</span>
        </button>
    
      <div className="rating_form_root_container" style={{marginTop: "12px"}}>
        <div className="ratingform_root">
          <span
            className={theme ? "ratingform_root_span_sub" : "ratingform_root_span"}
            style={{paddingBottom: "20px"}}
          >
            Please rate the content of
          </span>
          <div>
            <img src={image5} alt="" className="ratingform_image" style={{paddingBottom: "8px"}}/>
          </div>
        </div>

        <div className="ratingform_root_two">
          <span
            className="ratingform_root_span_one"
            style={{ color: `${theme ? "black" : "white"}` }}
          >
            Git & GitHub Introduction
          </span>
          <div className="ratingform_root_sub_two_container">

          <Rating
            name="simple-controlled"
            style={{fontSize : '36px'}}
            className="ratingform_root_sub_two"
            value={value}
            
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
             emptyIcon={<StarIcon style={{ color :'#C4C4C4'  }} fontSize="inherit" />}
            />
            </div>
        </div>
      </div>

      <div className="ratingform_root_three" style={{paddingBottom: "20px"}}>
        <div className="rating_form_sub_span">
          <span className="rating_form_span_two"  style={{ color: `${theme ? "#363636" : "white"}` }}>Rating Comments:</span>
        </div>

        <div>
          <textarea
            className={theme ? "rating_form_textarea_sub" : "rating_form_textarea"}
            style={{ color: `${theme ? "black" : "white"}` }}
            id="message"
            rows="14"
            placeholder=""
            type="text"
          />
        </div>

        <div className="rating_form_sub_four" style={{ marginTop: "20px" }}>
          <Button variant="contained" className="user_buttons">
            Submit
          </Button>

          <div className="user_buttons_sub_three">
            <span>
              Make a more specific <br /> feedback on contents
            </span>
            <span style={{ paddingLeft: "10px", fontSize: "26px" }}>
              <HiOutlineArrowNarrowRight />
            </span>
          </div>
        </div>
        <div className="user_buttons_sub_three_hidden">
          <span>
            Make a more specific <br /> feedback on contents
          </span>
          <span style={{ paddingLeft: "10px", fontSize: "26px" }}>
            <HiOutlineArrowNarrowRight />
          </span>
        </div>
      </div>
      <div>
        <FooterButtons />
      </div>
    </>
  );
};

export default RatingForm;
