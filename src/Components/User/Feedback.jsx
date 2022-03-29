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
const Feedback = () => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.state);
  const [value, setValue] = React.useState(2);
  return (
    <>

        <Button
          onClick={() => navigate("/editormainpage")}
          className="back_button"
          style={{ color: `${theme ? "black" : "white"}` }}
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
  
      <div className="ratingform_root_two" style={{ marginTop: "20px" }}>
        <select
          className={theme ? "addcategory_input_sub" : "addcategory_input"}
          name="cars"
          id="cars"
        >
          <option value="volvo">Select a course for Rating</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>

        <select
          className={theme ? "addcategory_input_sub" : "addcategory_input"}
          name="cars"
          id="cars"
        >
          <option value="volvo">Select a course for Rating</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>

        <div className="ratingform_root_two">
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
        </div>
      </div>

      <div className="ratingform_root_three">
        <div className="rating_form_sub_span">
          <span className="rating_form_span_two">Feedback Comments:</span>
        </div>

        <div>
          <textarea
            className={
              theme ? "rating_form_textarea_sub" : "rating_form_textarea"
            }
            id="message"
            rows="20"
            placeholder=""
            type="text"
          />
        </div>

        <div style={{ marginTop: "20px" }}>
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
