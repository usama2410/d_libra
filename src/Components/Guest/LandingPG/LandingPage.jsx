import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Lp.css";
import LandingPageImage1 from "../../../assests/SVG_Files/LandingPageImage1.svg";
import darkmode_logo from "../../../assests/SVG_Files/New folder/darkmode_logo.svg";
import lightmode_logo from "../../../assests/SVG_Files/New folder/lightmode_logo.svg";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { addToRecentViewCourses } from "../../../Redux/Actions/Client Side/course.action";
import { home } from "../../../Redux/Actions/Client Side/home.action";
import { development } from "../../../endpoints";
import Swal from "sweetalert2";
import FooterButtons from "../../User/FooterButtons";
import { searchCourse } from "../../../Redux/Actions/Client Side/search.action";

// const labels = {
//   0: "0",
//   0.5: "0.5",
//   1: "1+",
//   1.5: "1.5",
//   2: "2",
//   2.5: "2.5",
//   3: "3",
//   3.5: "3.5",
//   4: "4",
//   4.5: "4.5",
//   5: "5+",
// };

const LandingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { state } = useLocation();
  const [data, setdata] = useState([]);
  // const [value, setValue] = React.useState("");
  // const [hover, setHover] = React.useState(-1);
  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);

  console.log("data", data);
  // console.log("state", state);

  const settings = {
    dots: false,
    adaptiveHeight: true,
    infinite: true,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 4.1,
    autoplay: false,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
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

  const searchOnCourse = async () => {
    const response = await dispatch(searchCourse(state?.search));
    // console.log("response", response);
    setdata(response);
  };

  const MainCategory = async () => {
    const response = await dispatch(home(token));
    // console.log("Home", response);
    setdata(response);
  };

  useEffect(() => {
    state?.searchKey ? searchOnCourse() : MainCategory();
  }, [state, params]);

  const handleViewRecentCourses = async (id) => {
    // console.log("view recent courses", id);
    await dispatch(addToRecentViewCourses(id, role, token));
    navigate(`/coursepageguest/${id}`);
  };

  return (
    <>
      <div className="mainContentContainer" style={{ marginTop: "20px" }}>
        <div className="underimagecontent">
          {theme ? (
            <img src={lightmode_logo} alt="" width="150px" height="30.7" />
          ) : (
            <img src={darkmode_logo} alt="" width="150px" height="30.7" />
          )}
        </div>
        <span
          className={theme ? "mycontentheadingtwoo" : "mycontentheadingthree"}
        >
          A web book based learning content library for digital skill
          development
        </span>

        <div className="landingpagesection">
          <img style={{ width: "230px" }} src={LandingPageImage1} alt="" />
        </div>
      </div>
      <div className="mainContentContainer">
        {!token && (
          <div style={{ display: "flex" }}>
            {" "}
            <button
              className="Signup_button Signup"
              onClick={() => navigate("/register")}
            >
              Sign up
            </button>
            <button
              className="Signup_button"
              onClick={() => navigate("/login")}
            >
              Log in
            </button>
          </div>
        )}
      </div>
      {data?.length > 0 ? (
        <div className="landingpage_slider_container">
          {data[0]?.data?.map((item) => {
            return (
              <>
                {item?.items?.length !== 0 && (
                  <div className="content_root_container" key={item?.id}>
                    <div>
                      <span
                        className={
                          theme ? "chapternameclass" : "chapternameclasstwo"
                        }
                      >
                        {item?.chaptername.charAt(0).toUpperCase() +
                          item?.chaptername.slice(1)}
                      </span>
                    </div>
                    <div>
                      <Slider className="intro-slick" {...settings}>
                        {item?.items?.map((e) => {
                          return (
                            <div className="intro-slides">
                              <img
                                src={`${development}/media/${e.image}`}
                                // onClick={() => navigate("/coursepageguest")}
                                onClick={() => handleViewRecentCourses(e.id)}
                                className="landingpage_images"
                                // style={{
                                //   filter: `${e.disable ? "brightness(15%)" : ""}`,
                                // }}
                                alt="No Image"
                              />
                              {e.image ? (
                                <div className="landingpagesubsection">
                                  <Typography
                                    noWrap
                                    component="div"
                                    className="subcoursename"
                                    style={{
                                      color: theme ? "#363636" : "#FFFFFF",
                                    }}
                                  >
                                    {e?.CategoryName.charAt(0).toUpperCase() +
                                      e?.CategoryName.slice(1)}
                                  </Typography>
                                </div>
                              ) : (
                                ""
                              )}

                              <div
                                style={{
                                  padding: "10px 0px 0px 10px",
                                }}
                              >
                                <span
                                  className="Author"
                                  style={{
                                    color: theme ? "#363636" : "#C8C8C8",
                                  }}
                                >
                                  Author:
                                </span>
                                <Box
                                  sx={{
                                    width: 200,
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <Rating
                                    sx={{ ml: 1 }}
                                    name="read-only"
                                    readOnly
                                    precision={0.5}
                                    value={e?.totalratinng}
                                    className="secondratingcomponent"
                                    emptyIcon={
                                      <StarIcon
                                        style={{ color: "#C4C4C4" }}
                                        fontSize="inherit"
                                      />
                                    }
                                  />
                                  <div
                                    className="rating_text"
                                    style={{
                                      paddingLeft: "10px",
                                      color: theme ? "#363636" : "#C8C8C8",
                                    }}
                                  >
                                    ({e?.totalperson})
                                  </div>
                                </Box>
                              </div>
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
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
        >
          <CircularProgress color="inherit" size={60} />
        </Box>
      )}

      <FooterButtons />
    </>
  );
};
export default LandingPage;
