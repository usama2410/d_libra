import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LibraryBookmarkContent from "./libcourse";
import "../User/Library/Library.css";
import { useSelector, useDispatch } from "react-redux";
import { ArrowBack } from "@mui/icons-material";
import FooterButtons from "../User/FooterButtons";
import Mylibrary_dark from "./../../assests/SVG_Files/Mylibrary_dark.svg";
import MyLibrary_light from "./../../assests/SVG_Files/MyLibrary_light.svg";
import { setBookMarkPriority } from "../../Redux/Actions/Client Side/librar.y.action";
import {
  addContentBookmark,
  getBookmarkCourse,
} from "../../Redux/Actions/bookmark.action";
import { development } from "../../endpoints";
import Swal from "sweetalert2";

import Bookmark_blue from "../../assests/SVG_Files/New folder/Bookmark_blue.svg";
import Bookmark_red from "../../assests/SVG_Files/New folder/Bookmark_red.svg";
import Bookmark_yellow from "../../assests/SVG_Files/New folder/Bookmark_yellow.svg";
import Bookmark_grey from "../../assests/SVG_Files/New folder/Bookmark_gray.svg";
import Bookmark_green from "../../assests/SVG_Files/New folder/Bookmark_green.svg";

const MylibraryCorse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);

  const [data, setdata] = useState(LibraryBookmarkContent);
  const [bookmark, setBookmark] = React.useState();

  const handleBack = () => {
    navigate("/");
  };

  const libraryByCourse = async () => {
    const response = await dispatch(getBookmarkCourse(role, token));
    console.log("response", response);
    setdata(response);
  };
  // const priority = () => {
  //   const response = dispatch(setBookMarkPriority(token));
  //   console.log(response);
  // };

  useEffect(() => {
    libraryByCourse();
  }, [bookmark]);

  const hanldeBookMarkPriority = async (Contentid) => {
    const response = await dispatch(addContentBookmark(Contentid, role, token));
    console.log("response", response);
    setBookmark(response);
    !token &&
      Swal.fire({
        title: "Unauthenticated",
        text: "Please login to bookmark",
        iconColor: "red",
        icon: "error",
      });
  };

  const hanldeDetails = (topic) => {
    navigate(
      `/detailpage/id=${topic?.contentid}/role=${role}/categoryid=${topic?.Chapterid}`,
      {
        state: {
          path: location.pathname,
        },
      }
    );
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
            style={{
              color: `${theme ? " #008EEC " : "white"}`,
              paddingTop: "10px",
            }}
          >
            By Course
          </span>
        </div>
      </div>
      <div className="librarycoursecontainer">
        <Button
          className={theme ? "bycourse_button_sub" : "bycourse_button"}
          onClick={() => navigate("/LibraryBookmark")}
          style={{ color: "white" }}
          endIcon={<HiOutlineArrowNarrowRight />}
        >
          By Bookmark
        </Button>
      </div>
      <div className="landingpage_slider_container libraryrootcontainer">
        {data?.map((item) => {
          console.log("item", item);
          return (
            <>
              {item?.Chapter?.length !== 0 && (
                <div className="content_root_container">
                  <div>
                    <span
                      className={
                        theme ? "chapternameclass" : "chapternameclasstwo"
                      }
                    >
                      {item.Coursename === null
                        ? "No Course Name"
                        : item.Coursename}
                    </span>
                  </div>
                  <div>
                    <Slider className="intro-slick" {...settings}>
                      {item?.Chapter?.map((e) => {
                        return (
                          <div className="intro-slides">
                            <img
                              src={`${development}/media/${e.contentimage}`}
                              className="landingpage_images"
                              style={{
                                filter: `${
                                  e.disabled ? "brightness(15%)" : ""
                                }`,
                              }}
                              alt=""
                              onClick={() => hanldeDetails(e)}
                            />
                            {e.contentimage ? (
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
                                    {e.contentname}
                                  </Typography>
                                </Typography>
                                <div className="mycontenttagscontainer">
                                  <img
                                    src={
                                      e?.Prioritytype === "highpriority"
                                        ? Bookmark_blue
                                        : e?.Prioritytype === "reviewlist"
                                        ? Bookmark_green
                                        : e?.Prioritytype === "futureread"
                                        ? Bookmark_red
                                        : e?.Prioritytype === "Personal"
                                        ? Bookmark_yellow
                                        : e?.Prioritytype === "Dayend"
                                        ? Bookmark_grey
                                        : Bookmark_grey
                                    }
                                    alt=""
                                    className="tagstwocontainer"
                                    onClick={() =>
                                      hanldeBookMarkPriority(e?.contentid)
                                    }
                                    style={{ cursor: "pointer" }}
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
              )}
            </>
          );
        })}
      </div>
      <FooterButtons />
    </>
  );
};

export default MylibraryCorse;
