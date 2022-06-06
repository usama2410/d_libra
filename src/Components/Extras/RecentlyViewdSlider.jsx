import React from "react";
import "../Guest/LandingPG/Lp.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bookmark_blue from "../../assests/SVG_Files/New folder/Bookmark_blue.svg";
import { development } from "../../endpoints";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@material-ui/core";

const RecentlyViewdSlider = (filterArray) => {
  const theme = useSelector((state) => state.theme.state);

  // console.log("filterArray", filterArray);

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
        breakpoint: 1120,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2.14,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 700,
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
      <div className="recentlyreviewd_slider_container">
        <div className="content_root_container">
          <div>
            <span
              className={theme ? "chapternameclass" : "chapternameclasstwo"}
            >
              {filterArray?.day}
            </span>
          </div>
          <div>
            {filterArray?.array?.length > 0 ? (
              <Slider className="intro-slick" {...settings}>
                {filterArray?.array?.map((e) => {
                  return (
                    <div className="intro-slides">
                      <img
                        src={`${development}/media/${e.images}`}
                        className="landingpage_images"
                        // style={{
                        //   filter: `${e.disable ? "brightness(15%)" : ""}`,
                        // }}
                        alt=""
                      />
                      {e.images ? (
                        <div className="underimagetextcontainer">
                          <Typography
                            noWrap
                            component="div"
                            className="underimagecontent"
                            style={{
                              color: theme ? "#363636" : "#FFFFFF",
                            }}
                          >
                            <Typography
                              noWrap
                              component="div"
                              className="subcoursenametwo subcoursename"
                            >
                              {e.title}
                            </Typography>
                          </Typography>
                          <div className="mycontenttagscontainer">
                            <img
                              src={Bookmark_blue}
                              alt=""
                              className="tagstwocontainer"
                            />
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </Slider>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "30px",
                }}
              >
                <CircularProgress color="inherit" size={60} />
              </Box>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentlyViewdSlider;
