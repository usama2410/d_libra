import React, { useState, useEffect } from "react";
// import "./MyContents.css";
import { useNavigate } from "react-router-dom";
import Searchdata from "./Searchdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Guest/LandingPG/Lp.css";

import Vector from "../../assests/Vector.png";
import Rfb from "../../assests/Rfb.png";
import ResultsBlue from "../../assests/ResultsBlue.png";
import SearchBlue from "../../assests/SearchBlue.png";

// import HoverRating from "./Rating";
import FooterButtons from "../User/FooterButtons";
import { useSelector } from "react-redux";

const Searchresult = () => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.state);
  const [data, setdata] = useState(Searchdata);
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
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="mainContentContainer">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
          className="mycontentheadingtwoo">

{
  theme ? <div style={{display: "flex", alignItems: "center"}}><img src={SearchBlue} alt="" /><img src={ResultsBlue} style={{paddingLeft: "5px"}} alt="" /></div> : <div style={{display: "flex", alignItems: "center"}}><img src={Vector}  alt="" /><img style={{paddingLeft: "5px"}} src={Rfb} alt="" /></div> 
}



      
        </div>
      </div>

      {data.map((item) => {
        return (
          <div className="content_root_container">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "5px",
              }}>
              <img src={item.TagsImageOne} alt="" />
              <span style={{ paddingLeft: "10px" }}>{item.chapterName}</span>
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
                          width: "100%",
                          cursor: "pointer",
                          borderRadius: "2px",
                          filter: `${
                            e.disabled === true
                              ? "saturate(300%) saturate(12%)  grayscale(100%)  brightness(11%)"
                              : ""
                          }`,
                        }}
                        alt=""
                      />
                      {e.image ? (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                            padding: "14px 10px 0px 10px",
                          }}>
                          <div>
                            <span>{e.Tags}</span>
                          </div>
                          <div>
                            <img src={e.TagsImageTwo} alt="" />
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
      <FooterButtons />
    </>
  );
};
export default Searchresult;
