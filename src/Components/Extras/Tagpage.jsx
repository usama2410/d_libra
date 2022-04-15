import React, { useState, useEffect } from "react";
// import "./MyContents.css";
import { useNavigate } from "react-router-dom";
import ContentData from "./TgpageData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Guest/LandingPG/Lp.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Vector3 from "../../assests/Vector3.png";
import Tag from "../../assests/Tag.png";
import Vector3Blue from "../../assests/Vector3Blue.png";
import TagBlue from "../../assests/TagBlue.png";
import Tag_dark from '../../assests/SVG_Files/Tag_dark.svg'
import Tag_light from '../../assests/SVG_Files/Tag_light.svg'
import TgpageData from './TgpageData'
import { ArrowBack, ArrowForward } from "@mui/icons-material";
// import HoverRating from "./Rating";
import FooterButtons from "../User/FooterButtons";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";

const Tagpage = () => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.state);
  const [data, setdata] = useState(TgpageData);
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: "0px",
        paddingBottom: "20px"
      }}
      // className="mycontentheadingtwoo"
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {theme ? (
       <img src={Tag_light} alt="" className="recentlyviewedimage" />
        ) : (
          <img src={Tag_dark} alt="" className="recentlyviewedimage"/>
        )}
        <span
          className={
            theme ? " recentlyviewedheading" : "recentlyviewedheadingtwo"
          }
        >
         Tag 'Git'
        </span>
      </div>
    </div>
  </div>
</div>
<div className="searchresult_slider_container">
  {data.map((item) => {
    return (
      <div className="content_root_container">
        <div>
          <span
            className={theme ? "chapternameclass" : "chapternameclasstwo"}
            style={{ padding: "0px 0px 8px 5px" }}
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
                    style={{
                      width: "100%",
                      cursor: "pointer",
                      borderRadius: "5px",
                      filter: `${e.disable ? "brightness(15%)" : ""}`,
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



<div className="second_tagpage_container">
{data.map((item) => {
        return (
          
          <>
            
              {
                item.items.map((content) => {
                  return (
                    <div className="W-main-map" style={{marginTop: "2px", backgroundColor: `${theme ? "#f3f6ff" : "   #4f4f4f "}`}}>
                    <div className="left">
                      <p className="left_p" style={{color : theme ? ' #363636' : "  #ffffff"}}>{content.Tags}</p>
                    </div>
                    <div className="right">
                      <img className="right_image" src={content.image} alt="" />
                    </div>
                  </div>
                  )
                })
              }

          </>
        );
      })}
</div>








<FooterButtons />
</>
  );
};
export default Tagpage;


















