import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image5 from "../../../assests/image5.png";
import "./MyContents.css";
import VectorTag from "../../../assests/VectorTag.png";

const Introduction = () => {
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
        breakpoint: 778,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div
        style={{
          padding: "20px 20px",
          width: "100%",
        }}
      >
        <div>
          <span>Introduction</span>
        </div>
        <div>
          <Slider className="intro-slick" {...settings}>
            <div className="intro-slides">
              <img src={image5} style={{ width: "100%" }} alt="" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "10px",
                }}
              >
                <span>Git & Git Hub Introduction</span>
                <img src={VectorTag} alt="" />
              </div>
            </div>
            <div className="intro-slides">
              <img src={image5} style={{ width: "100%" }} alt="" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "10px",
                }}
              >
                <span>Git & Git Hub Introduction</span>
                <img src={VectorTag} alt="" />
              </div>
            </div>
            <div className="intro-slides">
              {/* <img src={image5} style={{ width: "100%" }} alt="" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "10px",
                }}
              >
                <span>Git & Git Hub Introduction</span>
                <img src={VectorTag} alt="" />
              </div> */}
            </div>
            <div className="intro-slides">
              {/* <img src={image5} style={{ width: "100%" }} alt="" /> */}
            </div>
            <div className="intro-slides">
              {/* <img src={image5} style={{ width: "100%" }} alt="" /> */}
            </div>
            <div className="intro-slides">
              {/* <img src={image5} style={{ width: "100%" }} alt="" /> */}
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
