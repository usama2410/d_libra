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
const RatingSidebar = () => {
  const navigate = useNavigate();
  const theme = useSelector((state)=> state.theme.state)
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
   
      <div className="ratingform_root_two" style={{ marginTop: "20px"}}>
        <select className={theme ? "addcategory_input_sub" : "addcategory_input"} name="cars" id="cars">
          <option value="volvo">Select a course for Rating</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>

        <div
          className="ratingform_root_two"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <Rating
            name="simple-controlled"
            style={{fontSize : '36px'}}
            emptyIcon={<StarIcon style={{ color :'#C4C4C4'  }} fontSize="inherit" />}
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
            className={theme ? "rating_form_textarea_sub" : "rating_form_textarea"}
            style={{ color: `${theme ? "black" : "white"}` }}
            id="message"
            rows="14"
            placeholder=""
            type="text"
          />
        </div>

        <div className="rating_form_sub_four">
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
      <div >
        <FooterButtons />
      </div>
    </>
  );
};

export default RatingSidebar;
