import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Guest/LandingPG/Lp.css";
import Tag_dark from "../../assests/SVG_Files/Tag_dark.svg";
import Tag_light from "../../assests/SVG_Files/Tag_light.svg";
import TgpageData from "./TgpageData";
import { ArrowBack } from "@mui/icons-material";
import FooterButtons from "../User/FooterButtons";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";
import { searchAction } from "../../Redux/Actions/Client Side/search.action";
import { development } from "../../endpoints";
import {
  addContentBookmark,
  showAllBoomark,
} from "../../Redux/Actions/bookmark.action";
import Swal from "sweetalert2";
import Bookmark_blue from "../../assests/SVG_Files/New folder/Bookmark_blue.svg";
import Bookmark_red from "../../assests/SVG_Files/New folder/Bookmark_red.svg";
import Bookmark_yellow from "../../assests/SVG_Files/New folder/Bookmark_yellow.svg";
import Bookmark_grey from "../../assests/SVG_Files/New folder/Bookmark_gray.svg";
import Bookmark_green from "../../assests/SVG_Files/New folder/Bookmark_green.svg";

const Tagpage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { path } = useLocation();
  const location = useLocation();
  const params = useParams();
  const role = useSelector((state) => state.auth.role);
  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);
  const [data, setdata] = useState([]);
  const [message, setmessage] = useState("");
  const [bookmark, setBookmark] = useState("");
  const [showAllBookmark, setShowAllBookmark] = useState([]);

  console.log("showAllBookmark", showAllBookmark);

  const handleBack = () => {
    navigate(state?.path, {
      state: { path: state?.previous, search: state?.search },
    });
  };

  console.log("location", location);
  console.log("state", state);
  console.log("path", path);

  const hanldeDetails = (topic) => {
    navigate(
      `/detailpage/id=${topic?.id}/role=${role}/categoryid=${topic?.chapterid}`,
      {
        state: {
          path: location.pathname,
          previous: state?.previous,
          search: state?.search,
        },
      }
    );
  };

  const handleBookMark = async (Contentid) => {
    const response = await dispatch(addContentBookmark(Contentid, role, token));
    // console.log("response", response);
    setBookmark(response);
    !token &&
      Swal.fire({
        title: "Unauthenticated",
        text: "Please login to bookmark",
        iconColor: "red",
        icon: "error",
      });
  };

  const handleShowAllBookmark = async () => {
    const response = await dispatch(showAllBoomark(role, token));
    console.log(response);
    setShowAllBookmark(response?.slice(0, 2));
  };

  useEffect(() => {
    const searchResult = async () => {
      const response = await dispatch(searchAction(role, state?.search, token));
      console.log("response", response);
      if (response?.data[0]?.items?.length === 0) {
        setmessage("No Content Found");
        setdata([]);
      } else {
        setmessage("");
        setdata(response?.data);
      }
    };
    searchResult();
    handleShowAllBookmark();
  }, [params, bookmark, state]);

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
      <div className={theme ? "" : "recentlyviewedmaincontainer"}>
        <button
          onClick={handleBack}
          className="back_button"
          style={{ color: `${theme ? " #363636" : "  #C8C8C8"}` }}
        >
          <ArrowBack className="backbutton_icon" />{" "}
          <span className="backbutton_text">Back</span>
        </button>
        <div className="mainContentContainer recentlyreviewed">
          <div className="searchresultsection">
            <div style={{ display: "flex", alignItems: "center" }}>
              {theme ? (
                <img src={Tag_light} alt="" className="recentlyviewedimage" />
              ) : (
                <img src={Tag_dark} alt="" className="recentlyviewedimage" />
              )}
              <span
                className={
                  theme ? " recentlyviewedheading" : "recentlyviewedheadingtwo"
                }
              >
                Tag '{state?.search}'
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="searchresult_slider_container">
        {data?.map((item) => {
          return (
            <div className="content_root_container">
              {/* <div>
                <span
                  className={theme ? "chapternameclass" : "chapternameclasstwo"}
                >
                  {item.chapterName}
                </span>
              </div> */}
              <div>
                <Slider className="intro-slick" {...settings}>
                  {item?.items?.map((e) => {
                    return (
                      <div className="intro-slides">
                        <img
                          onClick={() => hanldeDetails(e)}
                          src={`${development}/media/${e.images}`}
                          className="landingpage_images"
                          // style={{
                          //   filter: `${e.disable ? "brightness(15%)" : ""}`,
                          // }}
                          alt=""
                        />
                        {e?.images ? (
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
                              {token ? (
                                <img
                                  src={
                                    e?.PriorityType === "highpriority"
                                      ? Bookmark_blue
                                      : e?.PriorityType === "reviewlist"
                                      ? Bookmark_green
                                      : e?.PriorityType === "futureread"
                                      ? Bookmark_red
                                      : e?.PriorityType ===
                                        showAllBookmark[0]?.name
                                      ? Bookmark_yellow
                                      : e?.PriorityType ===
                                        showAllBookmark[1]?.name
                                      ? Bookmark_grey
                                      : e.PriorityType === "null"
                                      ? Bookmark_grey
                                      : Bookmark_grey
                                  }
                                  alt=""
                                  className="tagstwocontainer"
                                  onClick={() => handleBookMark(e?.id)}
                                  style={{ cursor: "pointer" }}
                                />
                              ) : (
                                <img
                                  src={Bookmark_grey}
                                  alt=""
                                  className="tagstwocontainer"
                                  onClick={() => handleBookMark(e?.id)}
                                  style={{ cursor: "pointer" }}
                                />
                              )}
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
      </div>

      <div className="second_tagpage_container">
        {data.map((item) => {
          return (
            <>
              {item.items.map((e) => {
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
                        {e.title}
                      </p>
                    </div>
                    <div className="right">
                      <img
                        className="right_image"
                        onClick={() => hanldeDetails(e)}
                        src={`${development}/media/${e.images}`}
                        alt=""
                      />
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
export default Tagpage;
