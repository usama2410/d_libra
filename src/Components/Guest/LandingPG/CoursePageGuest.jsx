import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseGuestData from "./CourseGuestData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Lp.css";
import Typography from "@mui/material/Typography";
import FooterButton from "./FooterButton";
import { useSelector } from "react-redux";
import GitAndGitHub from "../../../assests/SVG_Files/GitAndGitHub.svg";
import { ArrowBack } from "@mui/icons-material";

const CoursePageGuest = () => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.state);
  const [data, setdata] = useState(CourseGuestData);
  const handleBack = () => {
    navigate("/");
  };
  const settings = {
    dots: false,
    adaptiveHeight: true,
    infinite: true,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 4,
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
          slidesToShow: 1.195,
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
      <button
        onClick={handleBack}
        className="back_button"
        style={{ color: `${theme ? " #363636" : "  #C8C8C8"}` }}
      >
        <ArrowBack className="backbutton_icon" />{" "}
        <span className="backbutton_text">Back</span>
      </button>
      <div className="mainContentContainer">
        <div className="mainContentContainer" style={{ marginTop: "20px" }}>
          <img src={GitAndGitHub} alt="" className="coursemainimage" />
          <span
            style={{ marginTop: "10px" }}
            className={theme ? "mycontentheadtwoo" : "mycontentheadthree"}
          >
            Git & GitHub Introduction
          </span>
        </div>
      </div>
      <div className="landingpage_slider_container coursemainpage_container">
        {data.map((item) => {
          return (
            <div className="content_root_container">
              <div>
                <span
                  className={theme ? "chapternameclass" : "chapternameclasstwo"}
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
                          onClick={() => navigate("/userdetailpage")}
                          src={e.image}
                          className="landingpage_images"
                          style={{
                            filter: `${e.disable ? "brightness(15%)" : ""}`,
                          }}
                          alt=""
                        />
                        {e.image ? (
                          <div className="coursepageguestsection">
                            <Typography
                              noWrap
                              component="div"
                              className="subcoursename"
                              style={{ color: theme ? "#363636" : "#FFFFFF" }}
                            >
                              {e.Tags}
                            </Typography>
                            <div></div>
                          </div>
                        ) : (
                          ""
                        )}
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
export default CoursePageGuest;
