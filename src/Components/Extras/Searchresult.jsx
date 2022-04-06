import React, { useState, useEffect } from "react";
// import "./MyContents.css";
import { useNavigate } from "react-router-dom";
import Searchdata from "./Searchdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Guest/LandingPG/Lp.css";
import Search_dark from "../../assests/SVG_Files/New folder/icons/Search_dark.svg";
import Search from "../../assests/SVG_Files/New folder/icons/Search.svg";
import Vector from "../../assests/Vector.png";
import Rfb from "../../assests/Rfb.png";
import ResultsBlue from "../../assests/ResultsBlue.png";
import SearchBlue from "../../assests/SearchBlue.png";

// import HoverRating from "./Rating";
import FooterButtons from "../User/FooterButtons";
import { useSelector } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography } from "@material-ui/core";
const Searchresult = () => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.state);
  const [data, setdata] = useState(Searchdata);
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
      <div className={theme ? "" : "recentlyviewedmaincontainer"}>
        <button
          className="back_button "
          style={{ color: `${theme ? "black" : "white"}` }}
        >
          <ArrowBackIcon style={{ fontSize: "18px" }} />{" "}
          <span style={{ paddingLeft: "5px", fontSize: "13px" }}>Back</span>
        </button>
        <div className="mainContentContainer recentlyreviewed">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "0px",
            }}
            // className="mycontentheadingtwoo"
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              {theme ? (
                <img src={Search} alt="error" />
              ) : (
                <img src={Search_dark} alt="error" />
              )}
              <span
                className={
                  theme ? " recentlyviewedheading" : "recentlyviewedheadingtwo"
                }
              >
                Results for 'branch'
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="searchresult_slider_container">
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
                              justifyContent: "space-around",
                              padding: "20px 3px 0px 4px",
                              alignItems: "center",
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
                            <img
                              src={e.TagsImageTwo}
                              alt=""
                              width="17px"
                              height="20px"
                            />
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

      <FooterButtons />
    </>
  );
};
export default Searchresult;
