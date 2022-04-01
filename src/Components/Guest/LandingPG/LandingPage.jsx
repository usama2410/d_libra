import React, { useState, useEffect } from "react";
// import "./MyContents.css";
import { useNavigate } from "react-router-dom";
import ContentData from "./LandingPagedata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Lp.css";
import VectorTag from "../../../assests/VectorTag.png";
import Fill8 from "../../../assests/Fill8.png";
import Fill9 from "../../../assests/Fill9.png";
import Fill12 from "../../../assests/Fill12.png";
import book from "../../../assests/book.png";
import Vectoroval from "../../../assests/Vectoroval.png";
import Typography from "@mui/material/Typography";
import HoverRating from "./Rating";
import FooterButton from "./FooterButton";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.state);
  const [data, setdata] = useState(ContentData);
  const settings = {
    dots: false,
    adaptiveHeight: true,
    infinite: true,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 4.5,
    autoplay: false,
    slidesToScroll: 1,
    centerMode: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="mainContentContainer" style={{marginTop: "14px"}}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
          className=""
        >
          <img src={Fill9} alt="" />{" "}
          {theme ? (
            <img src={Fill12} alt="" style={{ width: "100px" }} />
          ) : (
            <img src={Fill8} alt="" />
          )}
        </div>

        {/* <span className="mycontentheadingone">Git & Git Hub Introduction</span>{" "} */}
        <span
          className="mycontentheadingtwoo"
          style={{ color: `${theme ? "black" : "white"}` }}
        >
          A web book based learning content library for digital skill
          development
        </span>

        <div
          style={{
            display: "flex",
            justifyContent: "center",

            position: " relative",
            marginTop: "70.91px",
          }}
          className=""
        >
          <img style={{ width: "230px" }} src={Vectoroval} alt="" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",

            position: "absolute",
            marginTop: "150.91px",
          }}
          className=""
        >
          <img style={{ width: "144px" }} src={book} alt="" />
        </div>
      </div>
      <div className="mainContentContainer">
        {" "}
        <div style={{display: "flex"}}>
          {" "}
          <button className="Signup_button Signup" style={{color: 'white'}} onClick={() => navigate('/register')}>Sign up</button>
          <button className="Signup_button"  style={{color: 'white'}} onClick={() => navigate('/login')}>Log in</button>
        </div>
      </div>
      {data.map((item) => {
        return (
          <div className="content_root_container">
            <div>
              <span>{item.chapterName}</span>
            </div>
            <div>
              <Slider className="intro-slick" {...settings}>
                {item.items.map((e) => {
                  return (
                    <div className="intro-slides">
                      <img
                        // onClick={() => navigate("/detailpage")}
                        src={e.image}
                        style={{
                          width: "100%",
                          cursor: "pointer",
                          filter: `${
                            e.disable
                              ? "saturate(300%) saturate(12%)  grayscale(100%)  brightness(11%)"
                              : ""
                            // e.disable ? "blur(2px)" || "greyscale(100%)" : ""
                          }`,
                        }}
                        alt=""
                      />
                      {e.image ? (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            paddingTop: "10px",
                          }}
                        >
                          <span>{e.Tags}</span>

                          {/* <img src={VectorTag} alt="" /> */}
                        </div>
                      ) : (
                        ""
                      )}
                      <span className="Author">Author: bloovee</span>

                      <HoverRating />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        );
      })}
      <FooterButton />
    </>
  );
};
export default LandingPage;
