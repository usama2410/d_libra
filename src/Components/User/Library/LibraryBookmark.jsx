import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VectorTag from "../../../assests/VectorTag.png";
import LibraryBookmarkContent from "./LibraryBookmarkContent";
import "./Library.css";
import {useSelector} from 'react-redux'

import FooterButtons from "../FooterButtons";

const LibraryBookmark = () => {
  const theme = useSelector((state) => state.theme.state)
  const navigate = useNavigate();
  console.log(LibraryBookmarkContent);
  const [data, setdata] = useState(LibraryBookmarkContent);
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
      <div className="library_root_container">
        <Button
          onClick={() => navigate("/editormainpage")}
          className="back_button"
          style={{ color: `${theme ? 'black' : 'white'}` }}
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
        <div className="header_library_container">
          <span style={{ display: "flex", alignItems: "center" }}>
            <MenuBookIcon className="menubookicon_text" style={{color: `${theme ? ' #008EEC' : 'white'}`}}/>
            <span className="mylibrary_text" style={{color: `${theme ? ' #008EEC ' : 'white'}`}}>My Library</span>
          </span>
          <span style={{color: `${theme ? ' #008EEC ' : 'white'}`,paddingTop: "10px"}}>By Bookmark</span>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "20px",
        }}
      >
        <Button
          className= {theme ? "bycourse_button_sub" : "bycourse_button"}
          endIcon={<HiOutlineArrowNarrowRight />}
        >
          By Course
        </Button>
      </div>

      {data.map((item) => {
        return (
          <div className="content_root_container">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "5px",
              }}
            >
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
                          }}
                        >
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

export default LibraryBookmark;
