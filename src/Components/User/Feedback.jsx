import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import image5 from "../../assests/image5.png";
import Rating from "@mui/material/Rating";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import FooterButtons from "./FooterButtons";
import { useSelector } from "react-redux";
import "./RatingForm.css";
import StarIcon from '@mui/icons-material/Star';
const Feedback = () => {
  const navigate = useNavigate();
  const handleBack = () => {

  }
  const theme = useSelector((state) => state.theme.state);
  const [value, setValue] = React.useState(2);
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
        <select
          className={theme ? "addcategory_input_sub_two" : "addcategory_input_two"}
          name="cars"
          id="cars"
        >
          <option value="volvo">Select a course for Rating</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>

        <select
          className={theme ? "addcategory_input_sub_two" : "addcategory_input_two"}
          name="cars"
          id="cars"
        >
          <option value="volvo">Select a course for Rating</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>

        {/* <div className="ratingform_root_two">
          <Rating
            name="simple-controlled"
            style={{fontSize : '50px'}}
            className="ratingform_root_sub_two"
            emptyIcon={<StarIcon style={{ color :'#C4C4C4'  }} fontSize="inherit" />}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div> */}
      </div>

      <div className="ratingform_root_three">
        <div className="rating_form_sub_span">
          <span className="rating_form_span_two"  style={{ color: `${theme ? "#363636" : "white"}` }}>Feedback Comments:</span>
        </div>

        <div>
          <textarea
         style={{ color: `${theme ? "black" : "white"}`, height: "403px"}}
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
      {/* <div className="responsivefooter">
<span style={{fontSize: "12px", }}>

      © D-Libra All Rights Reserved
    </span>
  </div> */}
    </>
  );
};

export default Feedback;
