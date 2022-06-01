import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContentData from "./LandingPagedata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Lp.css";
import Typography from "@mui/material/Typography";
import FooterButton from "./FooterButton";
import { useSelector, useDispatch } from "react-redux";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import LandingPageMainDataOne from "./LandinPageData";
import { Divider } from "@material-ui/core";

import { viewCourseStatus } from "../../../Redux/Actions/Client Side/course.action";

import { development } from "../../../endpoints";


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

const LandingPageMain = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);

  const [data, setdata] = useState(ContentData);
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const [dataone, setDataOne] = React.useState([]);
  // const [dataone, setDataOne] = React.useState(
  //   LandingPageMainDataOne.LandingPageMainDataOne
  // );
  const [datatwo, setDataTwo] = React.useState(
    LandingPageMainDataOne.LandingPageMainDataTwo
  );

  const viewRecentCourseState = useSelector(
    (state) => state.viewRecentCourseStatus?.data
  );
  console.log("viewCourseStatus dataone", dataone);
  console.log("viewRecentCourseState", viewRecentCourseState.length);

  const settings = {
    dots: false,
    adaptiveHeight: true,
    infinite: true,
    speed: 500,
    initialSlide: 2,
    slidesToShow: 4.1,
    autoplay: false,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
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

  useEffect(() => {
    const viewRecentCourseStatus = async () => {
      if (viewRecentCourseState?.length === 0) {
        const response = await dispatch(viewCourseStatus(token, role));
        console.log("response", response);
        setDataOne(response);
      } else {
        setDataOne(viewRecentCourseState);
      }
    };
    viewRecentCourseStatus();
  }, []);

  return (
    <>
      <div className="landingpage_slider_container">
        {dataone?.map((item) => {
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
                  {item?.items?.map((e) => {
                    return (
                      <div className="intro-slides">
                        <img
                          src={`${development}/media/${e.images}`}
                          onClick={() => navigate("/coursepageguest")}
                          className="landingpage_images"
                          // style={{
                          //   filter: `${e.disable ? "brightness(15%)" : ""}`,
                          // }}
                          alt=""
                        />
                        {e.images ? (
                          <div className="landingpagemainunderimage">
                            <Typography
                              noWrap
                              component="div"
                              className="subcoursename"
                              style={{
                                width: "250px",
                                color: theme ? "#363636" : "#FFFFFF",
                              }}
                            >
                              {e.title}
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
                            <div className="rating_text">
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
                              className="rating_text"
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

      <div style={{ padding: "0px 10px 0px 10px" }}>
        <Divider style={{ backgroundColor: "#004CB6", width: "100%" }} />
      </div>

      <div className="landingpage_slider_container">
        {datatwo.map((item) => {
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
                          onClick={() => navigate("/coursepageguest")}
                          className="landingpage_images"
                          style={{
                            filter: `${e.disable ? "brightness(15%)" : ""}`,
                          }}
                          alt=""
                        />
                        {e.image ? (
                          <div className="landingpagemainunderimage">
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
                            <div className="rating_text">
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
                              className="rating_text"
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
export default LandingPageMain;
