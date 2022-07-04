import React, { useState, useEffect } from "react";
import "./MyContents.css";
import ContentData from "./ContentData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate, useLocation, useParams } from "react-router-dom";
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
import { addContentBookmark, showAllBoomark } from "../../../Redux/Actions/bookmark.action";
import Swal from "sweetalert2";

const MyContents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const { state } = useLocation();
  const [data, setdata] = useState([]);
  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);

  const [priority, setPriority] = useState("reviewlist");
  const [bookmark, setBookmark] = useState();
  let [count, setCount] = useState(0);
  const [handleSetBookMark, setHandleSetBookMark] = useState(Bookmark_blue);

  console.log("handleSetBookMark", state?.path);
  const handleBack = () => {
    // navigate(state?.path);
    navigate("/editormainpage");
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

  console.log("handleSetBookMark", handleSetBookMark)

  const handleShowAllBookmark = async () => {
    const response = await dispatch(showAllBoomark(role, token));
    // console.log(response.slice(0, 2));
    setHandleSetBookMark(response?.slice(0, 2));
  };

  const dashboardData = async () => {
    const response = await dispatch(
      GetDashboardDataWithAuthorization(params?.id, role, token)
    );
    // console.log("response", response);
    setdata(response);
  };

  useEffect(() => {
    handleShowAllBookmark();
    dashboardData();
  }, [bookmark, params]);

  const handleDetailPageNavigate = async (categoryid, postId) => {
    navigate(`/detailpage/id=${postId}/role=${role}/categoryid=${categoryid}`, {
      state: {
        path: location.pathname,
      },
    });

    const response = await dispatch(
      addRecenetViewContent(categoryid, role, token)
    );
    console.log("History", response);
  };

  const hanldeBookMarkPriority = async (Contentid) => {
    const response = await dispatch(addContentBookmark(Contentid, role, token));
    setBookmark(response);
    !token &&
      Swal.fire({
        title: "Unauthenticated",
        text: "Please login to bookmark",
        iconColor: "red",
        icon: "error",
      });
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
              {data?.dropdown?.parent?.CategoryName?.charAt(0).toUpperCase() +
                data?.dropdown?.parent?.CategoryName?.slice(1)}
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
                        {item?.CategoryName?.charAt(0).toUpperCase() +
                          item?.CategoryName?.slice(1)}
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
                                  {/* <div className="mycontenttagscontainer">
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
