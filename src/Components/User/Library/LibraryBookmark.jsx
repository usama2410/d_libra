import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LibraryBookmarkContent from "./LibraryBookmarkContent";
import "./Library.css";
import { useDispatch, useSelector } from "react-redux";
import MyLibrary_light from "../../../assests/SVG_Files/MyLibrary_light.svg";
import Mylibrary_dark from "../../../assests/SVG_Files/Mylibrary_dark.svg";
import FooterButtons from "../FooterButtons";
import { ArrowBack } from "@mui/icons-material";
import { librarybookmark } from "../../../Redux/Actions/Client Side/librar.y.action";
import Bookmark_blue from "../../../assests/SVG_Files/New folder/Bookmark_blue.svg";
import Bookmark_red from "../../../assests/SVG_Files/New folder/Bookmark_red.svg";
import Bookmark_yellow from "../../../assests/SVG_Files/New folder/Bookmark_yellow.svg";
import Bookmark_grey from "../../../assests/SVG_Files/New folder/Bookmark_gray.svg";
import Bookmark_green from "../../../assests/SVG_Files/New folder/Bookmark_green.svg";
import { development } from "../../../endpoints";

const LibraryBookmark = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const role = useSelector((state) => state?.auth?.role);
  const token = useSelector((state) => state?.auth?.token);

  const theme = useSelector((state) => state?.theme?.state);
  const [data, setdata] = useState([]);
  const handleBack = () => {};

  console.log(data);

  useEffect(() => {
    const library = async () => {
      const response = await dispatch(librarybookmark(role, token));
      setdata(response);
    };
    library();
  }, []);

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
      <div
        className={
          theme ? "library_root_container_simple" : "library_root_container"
        }
      >
        <button
          onClick={handleBack}
          className="back_button librarybackbutton"
          style={{ color: `${theme ? " #363636" : "  #C8C8C8"}` }}
        >
          <ArrowBack className="backbutton_icon" />{" "}
          <span className="backbutton_text">Back</span>
        </button>
        <div className="header_library_container">
          <span style={{ display: "flex", alignItems: "center" }}>
            {theme ? (
              <img
                src={MyLibrary_light}
                alt=""
                className="recentlyviewedimage librarymainicon"
              />
            ) : (
              <img
                src={Mylibrary_dark}
                alt=""
                className="recentlyviewedimage librarymainicon"
              />
            )}
            <span
              className="mylibrary_text"
              style={{ color: `${theme ? " #008EEC " : "white"}` }}
            >
              My Library
            </span>
          </span>
          <span
            className="bookmarktext"
            style={{
              color: `${theme ? " #008EEC " : "white"}`,
              paddingTop: "10px",
            }}
          >
            By Bookmark
          </span>
        </div>
      </div>
      <div className="librarycoursecontainer">
        <Button
          className={theme ? "bycourse_button_sub" : "bycourse_button"}
          onClick={() => navigate("/mylibrarycourses")}
          style={{ color: "white" }}
          endIcon={<HiOutlineArrowNarrowRight />}
        >
          By Course
        </Button>
      </div>

      <div className="landingpage_slider_container libraryrootcontainer">
        {data?.map((subItems) => {
          return (
            <>
              {subItems?.map((item) => {
                console.log(item);
                return (
                  <div className="content_root_container">
                    {item?.items?.length !== 0 && (
                      <div style={{ display: "flex", alignItems: " center" }}>
                        <span
                          className={
                            theme ? "chapternameclass" : "chapternameclasstwo"
                          }
                        >
                          {item?.PriorityType}
                        </span>
                      </div>
                    )}

                    <div>
                      <Slider className="intro-slick" {...settings}>
                        {item?.items.map((e) => {
                          return (
                            <div className="intro-slides">
                              <img
                                src={`${development}/media/${e?.Contentimage}`}
                                className="landingpage_images"
                                alt=""
                              />
                              {e?.Contentimage ? (
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
                                      {e?.Contenttitle}
                                    </Typography>
                                  </Typography>
                                  <div className="mycontenttagscontainer">
                                    <img
                                      src={
                                        item?.PriorityType === "highpriority"
                                          ? Bookmark_blue
                                          : item?.PriorityType === "reviewlist"
                                          ? Bookmark_green
                                          : item?.PriorityType === "futureread"
                                          ? Bookmark_red
                                          : item?.PriorityType === "Personal"
                                          ? Bookmark_yellow
                                          : item?.PriorityType === "Dayend"
                                          ? Bookmark_grey
                                          : null
                                      }
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
                    </div>
                  </div>
                );
              })}
            </>
          );
        })}
      </div>
      <FooterButtons />
    </>
  );
};

export default LibraryBookmark;
