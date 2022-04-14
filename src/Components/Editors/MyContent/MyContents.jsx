import React, { useState, useEffect } from "react";
import "./MyContents.css";
import ContentData from "./ContentData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MyContents.css";
import VectorTag from "../../../assests/VectorTag.png";
import { useSelector, useDispatch } from "react-redux";
import { getDashboardData } from "../../../Redux/Actions/Dashboard.Data.action";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
const MyContents = () => {
  const dispatch = useDispatch();
  const [data, setdata] = useState(ContentData);
  const [responseArray, setresponseArray] = useState([]);
  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);
  const handleBack = () => {

  }
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
      setresponseArray(ContentData);
    };
    dashboardData();
  }, []);

  const handleBackgroung = () => {
    if (
      theme === true &&
      window.location.href.split("/")[3] === "mycontents"
    ) {
      return "#eeeeee";
    }
  };

  return (
    <>
        <div className={theme ? "mainmycontentcontainer" : "mainmycontentcontainertwo"}>
          <div className="mycontentcontainerbackbutton">
          <button
          onClick={handleBack}
          className="back_button"
          style={{ color: `${theme ? " #363636" : "  #C8C8C8"}` }}
        >
          <ArrowBack className="backbutton_icon" />{" "}
          <span className="backbutton_text">Back</span>
        </button>
          </div>
          <div>
            <div className="mainContentContainertwotwo">
              <span
                style={{ paddingTop: "8px", paddingBottom: "14px"}}
                className={
                  theme ? "mycontentheadthreeee" : "mycontentheadtwoooo"
                }
              >
                Git & GitHub Introduction
              </span>
            </div>
            <div className="mycontentcontainerbackbuttontwo">
             <button
          onClick={handleBack}
          className="back_button"
          style={{ color: `${theme ? " #363636" : " #FFFFFF"}` }}
        >
          <ArrowBack className="backbutton_icon" />{" "}
          <span className="backbutton_text">Back</span>
        </button>
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
          {data.map((item) => {
            return (
              <div
                className="content_root_container"
                // style={{ marginTop: "20px" }}
              >
                <div>
                  <span
                    className={
                      theme ? "chapternameclass" : "chapternameclasstwo"
                    }
                    style={{ padding: "0px 0px 8px 0px" }}
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
                            // style={{}}
                            style={{
                              width: "100%",

                              cursor: "pointer",
                              borderRadius: "5px",
                            }}
                            alt=""
                          />
                          {e.image ? (
                           <div
                           className="underimagetextcontainer"
                         >
                           <Typography
                             noWrap
                             component="div"
                            //  className="subcoursename"
                             // style={{}}
                             style={{
                               color: theme ? "#363636" : "#FFFFFF",
                               display: "flex",
                               justifyContent: "center",
                               width: "100%",
                             }}
                           >
                             <Typography
                               noWrap
                               component="div"
                               className="subcoursenametwo subcoursename"
                             >
                               {e.Tags}
                             </Typography>
                           </Typography>
                           <div style={{ position: "relative" }}>
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
      {/* </div> */}
    </>
  );
};

export default MyContents;
