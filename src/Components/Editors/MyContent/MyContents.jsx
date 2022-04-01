import React, { useState, useEffect } from "react";
import "./MyContents.css";
import { useNavigate } from "react-router-dom";
import ContentData from "./ContentData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MyContents.css";
import VectorTag from "../../../assests/VectorTag.png";
import { useSelector, useDispatch } from "react-redux";

import gitimage from "../../../assests/gitimage.png";
import { getDashboardData } from "../../../Redux/Actions/Dashboard.Data.action";

const MyContents = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setdata] = useState(ContentData);
  const [responseArray, setresponseArray] = useState([]);

  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);

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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
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
          slidesToShow: 1.02,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  useEffect(() => {
    const dashboardData = async () => {
    const response =  await dispatch(getDashboardData(token));
    console.log(response);
    setresponseArray(response)
    };
    dashboardData();
  }, []);

  return (
    <>
      <div className="mainContentContainer">
        <img src={gitimage} alt="" style={{ padding: "10px 0px" }} />
        <span
          className={theme ? "mycontentheadingsubone" : "mycontentheadingone"}
        >
          Git & Git Hub Introduction
        </span>{" "}
        <span
          className={theme ? "mycontentheadingsubtwo" : "mycontentheadingtwo"}
        >
          Select a Content for Edit
        </span>
      </div>
      {responseArray?.map((item) => {
        return (
          <div className="content_root_container">
            <div>
              <span key={item.id} style={{ color: `${theme ? " #008EEC" : "white"}` }}>
                {item.CategoryName}
              </span>
            </div>
            <div className="intro_slide_sub">
              <Slider className="intro-slick" {...settings}>
                {item.lecture.map((e) => {
                  return (
                    <div key={e.id} className="intro-slides">
                      <img
                        onClick={() => navigate("/detailpage")}
                        src={e.images}
                        style={{
                          borderRadius: "2px",
                          width: "100%",
                          cursor: "pointer",
                        }}
                        alt=""
                      />
                      {e.images ? (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "10px 10px 0px 10px",
                          }}
                        >
                          <span>{e.title}</span>
                          <img
                            src={VectorTag}
                            style={{ height: "18px", height: "20px" }}
                            alt=""
                          />
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
};

export default MyContents;
