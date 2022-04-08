import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VectorTag from "../../../assests/VectorTag.png";
import LibraryBookmarkContent from "./LibraryBookmarkContent";
import "./Library.css";
import { useSelector } from "react-redux";
import MyLibrary_light from '../../../assests/SVG_Files/MyLibrary_light.svg'
import Mylibrary_dark from '../../../assests/SVG_Files/Mylibrary_dark.svg'
import FooterButtons from "../FooterButtons";

const LibraryBookmark = () => {
  const theme = useSelector((state) => state.theme.state);
  const navigate = useNavigate();
  console.log(LibraryBookmarkContent);
  const [data, setdata] = useState(LibraryBookmarkContent);
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
      <div className={theme ? "library_root_container_simple" : "library_root_container"} style={{paddingTop: "10px"}}>


        <Button
          onClick={() => navigate("/editormainpage")}
          className="back_button"
          style={{ color: `${theme ? "black" : "white"}`,  textTransform: "none" }}
          startIcon={<ArrowBackIcon />}>
          Back
        </Button>
        <div className="header_library_container">
          <span style={{ display: "flex", alignItems: "center" }}>
          {theme ? (
       <img src={MyLibrary_light} alt="" className="recentlyviewedimage librarymainicon" />
        ) : (
          <img src={Mylibrary_dark} alt="" className="recentlyviewedimage librarymainicon"/>
        )}
            <span
              className="mylibrary_text"
              style={{ color: `${theme ? " #008EEC " : "white"}` }}>
              My Library
            </span>
          </span>
          <span
            style={{
              color: `${theme ? " #008EEC " : "white"}`,
              paddingTop: "10px",
            }}>
            By Bookmark
          </span>
          </div>
      
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "20px",
        }}>
        <Button
          className={theme ? "bycourse_button_sub" : "bycourse_button"}
          onClick={() => navigate('/MyLibraryCorse')}
          style={{color: 'white'}}
          endIcon={<HiOutlineArrowNarrowRight />}>
          By Course
        </Button>
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
                          className="landingpage_images"
                          style={{
                            width: "100%",
                            cursor: "pointer",
                            borderRadius: "5px",
                          }}
                          alt=""
                        />
                        {e.image ? (
                          <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            padding: "10px 0px 0px 10px",
                          }}
                        >
                          <Typography
                            noWrap
                            component="div"
                            className="subcoursename"
                            style={{ color: theme ? "#363636" : "#FFFFFF" }}
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

export default LibraryBookmark;
