import React, { useState, useEffect } from "react";
import "./MyContents.css";
import { useNavigate } from "react-router-dom";
import ContentData from "./ContentData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MyContents.css";
import VectorTag from "../../../assests/VectorTag.png";

const MyContents = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState(ContentData);
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
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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

  return (
    <>
      <div className="mainContentContainer">
        <span className="mycontentheadingone">Git & Git Hub Introduction</span>{" "}
        <span className="mycontentheadingtwo">Select a Content for Edit</span>
      </div>
      {data.map((item) => {
        return (
          <div className="content_root_container">
            <div>
              <span>{item.chapterName}</span>
            </div>
            <div>
              <Slider className="intro-slick" {...settings}>
                {item.items.map((e) => {
                  return (
                    <div className="intro-slides">
                      <img
                        onClick={() => navigate("/detailpage")}
                        src={e.image}
                        style={{
                          borderRadius: "5px",
                          width: "100%",
                          cursor: "pointer",
                        }}
                        alt=""
                      />
                      {e.image ? (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "10px 10px 0px 10px",
                          }}
                        >
                          <span>{e.Tags}</span>
                          <img src={VectorTag} style={{height: "18px", height: "20px"}} alt="" />
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
