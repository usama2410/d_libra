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

const Recentlyviewed = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);

  const [todayHistory, setTodayHistory] = useState([]);
  const [yesterdayHistory, setYesterdayHistory] = useState([]);
  const [weekHistory, setWeekHistory] = useState([]);
  const [monthHistory, setMonthHistory] = useState([]);

  const handleBack = () => {
    navigate("/coursemainpage");
  };

  const todayIds = todayHistory?.map((o) => o.Courseid);

  const filteredToday = todayHistory?.filter(
    ({ Courseid }, index) => !todayIds.includes(Courseid, index + 1)
  );
  const yesterdayIds = yesterdayHistory?.map((o) => o.Courseid);

  const filteredYesterday = yesterdayHistory?.filter(
    ({ Courseid }, index) => !yesterdayIds.includes(Courseid, index + 1)
  );

  const weekIds = weekHistory?.map((o) => o.Courseid);

  const filteredWeekly = weekHistory?.filter(
    ({ Courseid }, index) => !weekIds.includes(Courseid, index + 1)
  );

  const monthIds = monthHistory?.map((o) => o.Courseid);
  const filteredMonthly = monthHistory?.filter(
    ({ Courseid }, index) => !monthIds.includes(Courseid, index + 1)
  );

  // console.log("filteredToday", filteredToday);
  // console.log("filteredYesterday", filteredYesterday);

  const timeSettings = (response) => {
    // today.setHours(today.getHours() + 24);
    // let newToday = today.toISOString().slice(0, 10);

    let date = new Date();

    response.forEach((item) => {
      item.items.forEach((createdAt) => {
        let createdDate = new Date(createdAt.created.slice(0, 10));
        let difference = Math.abs(createdDate - date);
        let differenceInDays = Math.ceil(difference / (1000 * 60 * 60 * 24));
        console.log("differenceInDays", differenceInDays);

        if (differenceInDays === 1 && differenceInDays < 2) {
          setTodayHistory((prevState) => [...prevState, createdAt]);
          return "TODAY";
        } else if (differenceInDays === 2 && differenceInDays < 3) {
          setYesterdayHistory((prevState) => [...prevState, createdAt]);
          return "YESTERDAY";
        } else if (differenceInDays === 3 || differenceInDays < 8) {
          setWeekHistory((prevState) => [...prevState, createdAt]);
          return "WEEK";
        } else if (differenceInDays === 8 || differenceInDays < 30) {
          setMonthHistory((prevState) => [...prevState, createdAt]);
          return "MONTH";
        }
      });
    });
  };

  useEffect(() => {
    const recentViewedCourses = async () => {
      const response = await dispatch(viewCourseStatus(token, role));
      console.log("response", response);
      timeSettings(response);
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
      {filteredToday.length > 0 && (
        <RecentlyviewdSlider array={filteredToday} day={"Today"} />
      )}
      {filteredYesterday.length > 0 && (
        <RecentlyviewdSlider array={filteredYesterday} day={"Yesterday"} />
      )}
      {filteredWeekly.length > 0 && (
        <RecentlyviewdSlider array={filteredWeekly} day={"This Week"} />
      )}
      {filteredMonthly.length > 0 && (
        <RecentlyviewdSlider array={filteredMonthly} day={"This Month"} />
      )}
      <FooterButtons />
    </>
  );
};
export default Recentlyviewed;
