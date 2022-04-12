import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentData from "./LandingPagedata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Lp.css";
import LandingPageImage1 from "../../../assests/SVG_Files/LandingPageImage1.svg";
import darkmode_logo from "../../../assests/SVG_Files/New folder/darkmode_logo.svg";
import lightmode_logo from "../../../assests/SVG_Files/New folder/lightmode_logo.svg";
import Typography from "@mui/material/Typography";
import FooterButton from "./FooterButton";
import { useSelector } from "react-redux";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0: "0",
  0.5: "0.5",
  1: "1+",
  1.5: "1.5",
  2: "2",
  2.5: "2.5",
  3: "3",
  3.5: "3.5",
  4: "4",
  4.5: "4.5",
  5: "5+",
};
const LandingPage = () => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.state);
  const [data, setdata] = useState(ContentData);
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const settings = {
    dots: false,
    adaptiveHeight: true,
    infinite: true,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 4.1,
    autoplay: false,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2.14,
          slidesToScroll: 1,
          centerMode: true,
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
          slidesToShow: 1.15,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1.19,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1.21,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 361,
        settings: {
          slidesToShow: 1.24,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 338,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="mainContentContainer" style={{ marginTop: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
          className=""
        >
          {theme ? (
            <img src={lightmode_logo} alt="" width="150px" height="30.7" />
          ) : (
            <img src={darkmode_logo} alt="" width="150px" height="30.7" />
          )}
        </div>
        <span
          className={theme ? "mycontentheadingtwoo" : "mycontentheadingthree"}
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
          <img style={{ width: "230px" }} src={LandingPageImage1} alt="" />
        </div>
      </div>
      <div className="mainContentContainer">
        {" "}
        <div style={{ display: "flex" }}>
          {" "}
          <button
            className="Signup_button Signup"
            style={{ color: "white", cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Sign up
          </button>
          <button
            className="Signup_button"
            style={{ color: "white", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Log in
          </button>
        </div>
      </div>
      <div className="landingpage_slider_container">
        {data.map((item) => {
          return (
            <div className="content_root_container">
              <div>
                <span
                  className={theme ? "chapternameclass" : "chapternameclasstwo"}
                  style={{ padding: "0px 0px 8px 5px" }}
                >
                  {item.chapterName}
                </span>
              </div>
              <div>
                <Slider className="intro-slick" {...settings}>
                  {item.items.map((e) => {
                    return (
                      <div className="intro-slides">
                        <img
                          src={e.image}
                          // width="100%"
                          // height="225px"
                          className="landingpage_images"
                          style={{
                            width: "100%",
                            cursor: "pointer",
                            borderRadius: "5px",
                            filter: `${e.disable ? "brightness(15%)" : ""}`,
                          }}
                          alt=""
                        />
                        {e.image ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              padding: "10px 0px 0px 10px",
                            }}
                          >
                            <Typography
                              noWrap
                              component="div"
                              className="subcoursename"
                              style={{
                                width: "250px",
                                color: theme ? "#363636" : "#FFFFFF",
                              }}
                            >
                              {e.Tags}
                            </Typography>
                          </div>
                        ) : (
                          ""
                        )}

                        <div
                          style={{
                            padding: "10px 0px 0px 10px",
                          }}
                        >
                          <span
                            className="Author"
                            style={{
                              padding: "10px 0px 0px 10px",
                              marginLeft: "-10px",
                              color: theme ? "#363636" : "#C8C8C8",
                            }}
                          >
                            Author:
                          </span>
                          <Box
                            sx={{
                              width: 200,
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {" "}
                            <div className="rating">
                              {value !== null && (
                                <Box sx={{ ml: 0 }}>
                                  {labels[hover !== -1 ? hover : value]}
                                </Box>
                              )}
                            </div>
                            <Rating
                              sx={{ ml: 1 }}
                              name="hover-feedback"
                              value={value}
                              className="secondratingcomponent"
                              precision={0.5}
                              onChange={(event, newValue) => {
                                setValue(newValue);
                              }}
                              onChangeActive={(event, newHover) => {
                                setHover(newHover);
                              }}
                              emptyIcon={
                                <StarIcon
                                  style={{ color: "#C4C4C4" }}
                                  fontSize="inherit"
                                />
                              }
                            />
                            <div
                              className="rating"
                              style={{
                                paddingLeft: "10px",
                                color: theme ? "#363636" : "#C8C8C8",
                              }}
                            >
                              (110,000)
                            </div>
                          </Box>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          );
        })}
      </div>
      <FooterButton />
    </>
  );
};
export default LandingPage;
