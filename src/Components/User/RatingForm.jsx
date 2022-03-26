import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import image5 from "../../assests/image5.png";
import Rating from "@mui/material/Rating";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import FooterButtons from "./FooterButtons";
import {useSelector} from 'react-redux'
import "./RatingForm.css";
const RatingForm = () => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.state)
  const [value, setValue] = React.useState(2);
  return (
    <>
      <div style={{ marginTop: "-40px" }}>
        <Button
          onClick={() => navigate("/editormainpage")}
          style={{ color: "black" }}
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
      </div>
      <div className="rating_form_root_container">
        <div className="ratingform_root">
          <span className="ratingform_root_span"  style={{color: `${theme ? ' #008EEC' : 'white'}`}}>
            Please rate the content of
          </span>
          <div>
            <img src={image5} alt="" style={{borderRadius: "10px"}} />
          </div>
        </div>

        <div className="ratingform_root_two">
          <span className="ratingform_root_span_one"  style={{color: `${theme ? 'black' : 'white'}`}}>
            Git & GitHub Introduction
          </span>
          <Rating
            name="simple-controlled"
            size="large"
            className="ratingform_root_sub_two"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
      </div>

      <div className="ratingform_root_three">
        <div className="rating_form_sub_span">
          <span className="rating_form_span_two">Rating Comments:</span>
        </div>

        <div>
          <textarea
            className="rating_form_textarea"
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
        <FooterButtons/>
      </div>
    </>
  );
};

export default RatingForm;
