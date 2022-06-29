import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../Guest/LandingPG/Lp.css";
import RVector from "../../assests/RVector.png";
import { Typography } from "@material-ui/core";
import Group89Blue from "../../assests/Group89Blue.png";
import FooterButtons from "../User/FooterButtons";
import { useSelector, useDispatch } from "react-redux";
import { ArrowBack } from "@mui/icons-material";
import { viewCourseStatus } from "../../Redux/Actions/Client Side/course.action";
import { development } from "../../endpoints";
import RecentlyviewdSlider from "./RecentlyViewdSlider";
import Bookmark_blue from "../../assests/SVG_Files/New folder/Bookmark_blue.svg";
import moment from "moment";
import { courseHistory } from "../../Redux/Actions/history";

const Recentlyviewed = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);
  const [history, setHistory] = useState([]);

  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    const recentViewedCourses = async () => {
      const response = await dispatch(courseHistory(token, role));
      // console.log("response", response);
      setHistory(response);
    };
    recentViewedCourses();
  }, []);

  return (
    <>
      <div
        className={
          theme
            ? "recentlyviewedmaincontainerlight"
            : "recentlyviewedmaincontainer"
        }
      >
        <button
          onClick={handleBack}
          className="back_button"
          style={{ color: `${theme ? " #363636" : "  #C8C8C8"}` }}
        >
          <ArrowBack className="backbutton_icon" />{" "}
          <span className="backbutton_text">Back</span>
        </button>
        <div className="mainContentContainer recentlyreviewed">
          <div className="recentlyviewedsection">
            <div style={{ display: "flex", alignItems: "center" }}>
              {theme ? (
                <img
                  src={Group89Blue}
                  alt="error"
                  className="recentlyviewedimage"
                />
              ) : (
                <img
                  src={RVector}
                  alt="error"
                  className="recentlyviewedimage"
                />
              )}
              <span
                className={
                  theme ? " recentlyviewedheading" : "recentlyviewedheadingtwo"
                }
              >
                Recently Viewed
              </span>
            </div>
          </div>
        </div>
      </div>

      <RecentlyviewdSlider history={history} />

      <FooterButtons />
    </>
  );
};
export default Recentlyviewed;
