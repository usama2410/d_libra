import React, { useState, useEffect } from "react";
import "./MyContents.css";
import ContentData from "./ContentData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate, useLocation } from "react-router-dom";
import "./MyContents.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getDashboardData,
  GetDashboardDataWithAuthorization,
} from "../../../Redux/Actions/Dashboard.Data.action";
import { Typography } from "@material-ui/core";
import { ArrowBack } from "@mui/icons-material";
import { addRecenetViewContent } from "../../../Redux/Actions/Client Side/content.action";
import Bookmark_blue from "../../../assests/SVG_Files/New folder/Bookmark_blue.svg";
import Bookmark_yellow from "../../../assests/SVG_Files/New folder/Bookmark_yellow.svg";
import Bookmark_red from "../../../assests/SVG_Files/New folder/Bookmark_red.svg";
import Bookmark_green from "../../../assests/SVG_Files/New folder/Bookmark_green.svg";
import Bookmark_grey from "../../../assests/SVG_Files/New folder/Bookmark_gray.svg";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { development } from "../../../endpoints";
import {
  librarybookmark,
  setBookMarkPriority,
} from "../../../Redux/Actions/Client Side/librar.y.action";
import { addContentBookmark } from "../../../Redux/Actions/bookmark.action";
import Swal from "sweetalert2";

const MyContents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [data, setdata] = useState([]);
  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);

  const [priority, setPriority] = useState("reviewlist");
  const [bookmark, setBookmark] = useState();
  let [count, setCount] = useState(0);
  const [handleSetBookMark, setHandleSetBookMark] = useState(Bookmark_blue);

  console.log("handleSetBookMark", handleSetBookMark);
  const handleBack = () => {
    navigate(state?.path);
  };

  // console.log("data", data);
  // console.log("state", state);

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

  const hanldeLibraryBook = async () => {
    const response = await dispatch(librarybookmark(role, token));
    console.log("librarybookmark response", response);
    response.map((data) => {
      data?.map((item) => {
        setHandleSetBookMark(item.PriorityType);
      });
    });
  };

  useEffect(() => {
    const dashboardData = async () => {
      const response = await dispatch(
        GetDashboardDataWithAuthorization(state?.topicId, role, token)
      );
      console.log("response", response);
      setdata(response);
    };
    dashboardData();
    hanldeLibraryBook();
  }, []);

  const handleDetailPageNavigate = async (categoryid, postId) => {
    navigate(`/detailpage/id=${postId}/role=${role}/categoryid=${categoryid}`);

    await dispatch(addRecenetViewContent(categoryid, role, token));
  };

  const handleBookMark = async (content_id) => {
    console.log("content_id", content_id);
    setCount(count + 1);
    if (count === 0) {
      setPriority("highpriority");
    }
    if (count === 1) {
      setPriority("reviewlist");
    }
    if (count === 2) {
      setCount(0);
      setPriority("futureread");
    }
    const response2 = await dispatch(
      setBookMarkPriority(role, content_id, priority, token)
    );

    console.log("response2", response2);

    const response = await dispatch(
      addContentBookmark(content_id, role, token)
    );
    console.log("response", response);

    // const response1 = await dispatch(librarybookmark(role, token));
    // console.log("response1", response1);

    !token &&
      Swal.fire({
        title: "Unauthenticated",
        text: "Please login to bookmark",
        iconColor: "red",
        icon: "error",
      });
  };

  const handleBookMarkColor = () => {
    if (count === 0) {
      return Bookmark_blue;
    } else if (count === 1) {
      return Bookmark_yellow;
    } else if (count === 2) {
      return Bookmark_red;
    }
  };

  return (
    <>
      <div
        className={
          theme ? "mainmycontentcontainer" : "mainmycontentcontainertwo"
        }
      >
        <div>
          <div className="mycontentcontainerbackbutton">
            <button
              onClick={handleBack}
              className="back_button"
              style={{
                color: `${theme ? " #363636" : "  #C8C8C8"}`,
                cursor: "pointer",
              }}
            >
              <ArrowBack className="backbutton_icon" />{" "}
              <span className="backbutton_text">Back</span>
            </button>
          </div>
          <div className="mainContentContainertwotwo">
            <span
              className={theme ? "mycontentheadthreeee" : "mycontentheadtwoooo"}
            >
              {data?.dropdown?.parent?.CategoryName}
            </span>
          </div>

          <div className={theme ? "contentforedittext" : ""}>
            <div
              className="mainContentContainersub "
              style={{
                boxShadow: theme ? "" : "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <span
                className={
                  theme ? "mycontentheadthreee" : " mycontentheadtwooo"
                }
              >
                Select a Content for Edit
              </span>
            </div>
          </div>
        </div>
      </div>

      {data?.data?.length > 0 ? (
        <div className="landingpage_slider_container">
          {data?.data?.map((item) => {
            return (
              <>
                {item?.lecture?.length > 0 && (
                  <div className="content_root_container" key={item?.id}>
                    <div>
                      <span
                        className={
                          theme ? "chapternameclass" : "chapternameclasstwo"
                        }
                      >
                        {item?.CategoryName}
                      </span>
                    </div>

                    <div>
                      <Slider className="intro-slick" {...settings}>
                        {item?.lecture?.map((e) => {
                          return (
                            <div className="intro-slides" key={e?.id}>
                              <img
                                onClick={() =>
                                  handleDetailPageNavigate(item.id, e.id)
                                }
                                src={`${development}/media/${e.images}`}
                                className="landingpage_images"
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
                                      src={
                                        handleSetBookMark === "highpriority"
                                          ? Bookmark_blue
                                          : handleSetBookMark === "reviewlist"
                                          ? Bookmark_green
                                          : handleSetBookMark === "futureread"
                                          ? Bookmark_red
                                          : !token
                                          ? Bookmark_grey
                                          : handleSetBookMark === "Dayend"
                                          ? Bookmark_yellow
                                          : null
                                      }
                                      alt=""
                                      onClick={() => handleBookMark(e.id)}
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
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress color="inherit" size={30} />
        </Box>
      )}
    </>
  );
};

export default MyContents;
