import React, { useState, useEffect } from "react";
import "./MyContents.css";
import ContentData from "./ContentData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import "./MyContents.css";
import { useSelector, useDispatch } from "react-redux";
import { getDashboardData } from "../../../Redux/Actions/Dashboard.Data.action";
import { Typography } from "@material-ui/core";
import { ArrowBack } from "@mui/icons-material";
import { addRecenetViewContent } from "../../../Redux/Actions/Client Side/content.action";

const MyContents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setdata] = useState(ContentData);
  const [responseArray, setresponseArray] = useState([]);
  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);
  const handleBack = (e) => {
    e.preventDefault();
    navigate("/editormainpage");
    console.log("vvv");
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

  useEffect(() => {
    const dashboardData = async () => {
      const response = await dispatch(getDashboardData(token));
      // console.log("My content response", response);
      setdata(response);
    };
    dashboardData();
  }, []);

  const handleDetailPageNavigate = async (categoryid, postId) => {
    // console.log(categoryid, postId);
    navigate(`/detailpage/id=${postId}/role=${role}/categoryid=${categoryid}`);

    await dispatch(addRecenetViewContent(categoryid, role, token));
  };

  return (
    <>
      <div
        className={
          theme ? "mainmycontentcontainer" : "mainmycontentcontainertwo"
        }
      >
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
        <div>
          <div className="mainContentContainertwotwo">
            <span
              className={theme ? "mycontentheadthreeee" : "mycontentheadtwoooo"}
            >
              Git & GitHub Introduction
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
      <div className="landingpage_slider_container">
        {data?.map((item) => {
          return (
            <div className="content_root_container">
              <div>
                <span
                  className={theme ? "chapternameclass" : "chapternameclasstwo"}
                >
                  {item.CategoryName}
                </span>
              </div>
              <div>
                <Slider className="intro-slick" {...settings}>
                  {item?.lecture?.map((e) => {
                    return (
                      <div className="intro-slides">
                        <img
                          onClick={() =>
                            handleDetailPageNavigate(item.id, e.id)
                          }
                          src={`https://libra.pythonanywhere.com/media/${e.images}`}
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
                                src={e.TagsImageTwo}
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
      </div>
    </>
  );
};

export default MyContents;
