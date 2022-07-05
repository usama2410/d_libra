import React, { useState, useEffect } from "react";
import Searchdata from "./Searchdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Guest/LandingPG/Lp.css";
import Search_dark from "../../assests/SVG_Files/New folder/icons/Search_dark.svg";
import Search from "../../assests/SVG_Files/New folder/icons/Search.svg";
import FooterButtons from "../User/FooterButtons";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";
import { searchAction } from "../../Redux/Actions/Client Side/search.action";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Bookmark_blue from "../../assests/SVG_Files/New folder/Bookmark_blue.svg";
import Bookmark_red from "../../assests/SVG_Files/New folder/Bookmark_red.svg";
import Bookmark_yellow from "../../assests/SVG_Files/New folder/Bookmark_yellow.svg";
import Bookmark_grey from "../../assests/SVG_Files/New folder/Bookmark_gray.svg";
import Bookmark_green from "../../assests/SVG_Files/New folder/Bookmark_green.svg";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { development } from "../../endpoints";
import Swal from "sweetalert2";
import { addContentBookmark } from "../../Redux/Actions/bookmark.action";

const Searchresult = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);

  const [data, setdata] = useState([]);
  const [message, setmessage] = useState("");
  const [bookmark, setBookmark] = useState("");

  console.log(location);

  useEffect(() => {
    const searchResult = async () => {
      const response = await dispatch(searchAction(location.search, token));
      if (response?.data[0]?.items?.length === 0) {
        setmessage("No Content Found");
        setdata([]);
      } else {
        setmessage("");
        setdata(response?.data);
      }
    };
    searchResult();
  }, [window.location.search, token, params, bookmark]);

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
          centerMode: false,
        },
      },
      {
        breakpoint: 760,
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
    ],
  };

  const hanldeBookMarkPriority = async (Contentid) => {
    console.log(Contentid);
    const response = await dispatch(addContentBookmark(Contentid, role, token));
    console.log(response);
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
    // navigate(
    //   `/detailpage/id=${topic?.Contentid}/role=${role}/categoryid=${topic?.Chapterid}`,
    //   {
    //     state: {
    //       path: location.pathname,
    //     },
    //   }
    // );
  };

  return (
    <>
      <div className={theme ? "" : "recentlyviewedmaincontainer"}>
        <div className="mainContentContainer recentlyreviewed">
          <div className="searchresultsection">
            <div style={{ display: "flex", alignItems: "center" }}>
              {theme ? (
                <img src={Search} alt="error" className="recentlyviewedimage" />
              ) : (
                <img
                  src={Search_dark}
                  alt="error"
                  className="recentlyviewedimage"
                />
              )}
              <span
                className={
                  theme ? " recentlyviewedheading" : "recentlyviewedheadingtwo"
                }
              >
                Results for '
                {location.search?.split("=")[2]?.replace(/[^a-zA-Z ]/g, " ")}'
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="searchresult_slider_container">
        {message === "No Content Found" ? (
          <h1 style={{ textAlign: "center" }}>No Content Found</h1>
        ) : (
          <>
            {data?.length > 0 ? (
              <>
                {data?.map((item) => {
                  return (
                    <div className="content_root_container">
                      <div>
                        <span
                          className={
                            theme ? "chapternameclass" : "chapternameclasstwo"
                          }
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
                                  className="landingpage_images"
                                  style={{
                                    filter: `${
                                      e.disabled ? "brightness(15%)" : ""
                                    }`,
                                  }}
                                  alt=""
                                  onClick={() => hanldeDetails(e)}
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
                                    {/* <div className="mycontenttagscontainer">
                                    <img
                                          src={
                                            item?.PriorityType ===
                                            "highpriority"
                                              ? Bookmark_blue
                                              : item?.PriorityType ===
                                                "reviewlist"
                                              ? Bookmark_green
                                              : item?.PriorityType ===
                                                "futureread"
                                              ? Bookmark_red
                                              : item?.PriorityType ===
                                                "Personal"
                                              ? Bookmark_yellow
                                              : item?.PriorityType === "Dayend"
                                              ? Bookmark_grey
                                              : Bookmark_grey
                                          }
                                          alt=""
                                          className="tagstwocontainer"
                                          onClick={() =>
                                            hanldeBookMarkPriority(e?.id)
                                          }
                                          style={{ cursor: "pointer" }}
                                        />
                                    </div> */}
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
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "50px",
                }}
              >
                <CircularProgress color="inherit" size={60} />
              </Box>
            )}
          </>
        )}
      </div>

      <div className="second_tagpage_container">
        {data?.map((item) => {
          return (
            <>
              {item?.items?.map((content) => {
                return (
                  <div
                    className="W-main-map"
                    style={{
                      marginTop: "2px",
                      backgroundColor: `${theme ? "#f3f6ff" : "   #4f4f4f "}`,
                    }}
                  >
                    <div className="left">
                      <p
                        className="left_p"
                        style={{ color: theme ? " #363636" : "  #ffffff" }}
                      >
                        {content.Tags}
                      </p>
                    </div>
                    <div className="right">
                      <img className="right_image" src={content.image} alt="" />
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
export default Searchresult;
