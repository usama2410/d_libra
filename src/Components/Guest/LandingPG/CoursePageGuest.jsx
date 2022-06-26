import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CourseGuestData from "./CourseGuestData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Lp.css";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import GitAndGitHub from "../../../assests/SVG_Files/GitAndGitHub.svg";
import { ArrowBack } from "@mui/icons-material";
import { GetDashboardDataWithAuthorization } from "../../../Redux/Actions/Dashboard.Data.action";
import { development } from "../../../endpoints";
import FooterButtons from "../../User/FooterButtons";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const CoursePageGuest = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.state);
  const role = useSelector((state) => state.auth.role);
  const token = useSelector((state) => state.auth.token);
  const [data, setdata] = useState([]);
  const handleBack = () => {
    navigate("/");
  };

  // console.log("params", params);

  useEffect(() => {
    const authDashboardData = async () => {
      const response = await dispatch(
        GetDashboardDataWithAuthorization(params?.id, role, token)
      );
      // console.log("Get Dashboard Data Response", response);
      setdata(response);
    };
    authDashboardData();
  }, [params]);

  const handleDetailPageNavigate = async (categoryid, postId) => {
    // console.log(categoryid, postId);
    navigate(`/detailpage/id=${postId}/role=${role}/categoryid=${categoryid}`);

    // await dispatch(addRecenetViewContent(categoryid, role, token));
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2.14,
          slidesToScroll: 1,
          centerMode: true,
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
          slidesToShow: 1.195,
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
      <button
        onClick={handleBack}
        className="back_button"
        style={{ color: `${theme ? " #363636" : "  #C8C8C8"}` }}
      >
        <ArrowBack className="backbutton_icon" />{" "}
        <span className="backbutton_text">Back</span>
      </button>
      <div className="mainContentContainer">
        <div className="mainContentContainer" style={{ marginTop: "20px" }}>
          <img src={GitAndGitHub} alt="" className="coursemainimage" />
          <span
            style={{ marginTop: "10px" }}
            className={theme ? "mycontentheadtwoo" : "mycontentheadthree"}
          >
            {data?.dropdown?.parent?.CategoryName}
          </span>
        </div>
      </div>
      {data?.data?.length > 0 ? (
        <div className="landingpage_slider_container coursemainpage_container">
          {data?.data?.map((item) => {
            return (
              <div className="content_root_container">
                <div>
                  <span
                    className={
                      theme ? "chapternameclass" : "chapternameclasstwo"
                    }
                  >
                    {item?.lecture?.length !== 0 ? (
                      item?.CategoryName
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        <h3 style={{ textAlign: "center" }}>No Data</h3>
                      </div>
                    )}
                  </span>
                </div>
                <div>
                  <Slider className="intro-slick" {...settings}>
                    {item?.lecture?.map((e) => {
                      return (
                        <div className="intro-slides">
                          <img
                            onClick={() =>
                              handleDetailPageNavigate(item?.id, e?.id)
                            }
                            src={`${development}/media/${e.images}`}
                            className="landingpage_images"
                            // style={{
                            //   filter: `${e.disable ? "brightness(15%)" : ""}`,
                            // }}
                            alt=""
                          />
                          {e.images ? (
                            <div className="coursepageguestsection">
                              <Typography
                                noWrap
                                component="div"
                                className="subcoursename"
                                style={{ color: theme ? "#363636" : "#FFFFFF" }}
                              >
                                {e.title}
                              </Typography>
                              <div></div>
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
      ) : (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
        >
          <CircularProgress color="inherit" size={30} />
        </Box>
      )}

      <FooterButtons />
    </>
  );
};
export default CoursePageGuest;
