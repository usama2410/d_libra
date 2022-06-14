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

  const timeSettings = (response) => {
    let date = new Date();

    // var REFERENCE = moment("2022/06/07");
    // var TODAY = REFERENCE.clone().startOf("day");
    // var YESTERDAY = REFERENCE.clone().subtract(1, "days").startOf("day");
    // var A_WEEK_OLD = REFERENCE.clone().subtract(7, "days").startOf("day");

    // let isToday = (momentDate) => {
    //   return momentDate.isSame(TODAY, "d");
    // };
    // let isYesterday = (momentDate) => {
    //   return momentDate.isSame(YESTERDAY, "d");
    // };
    // let isWithinAWeek = (momentDate) => {
    //   return momentDate.isAfter(A_WEEK_OLD);
    // };
    // let isMonth = (momentDate) => {
    //   return !isWithinAWeek(momentDate);
    // };

    // console.log(
    //   "is it today? ..................Should be true: " +
    //     isToday(moment("2015-06-05"))
    // );
    // console.log(
    //   "is it yesterday? ..............Should be true: " +
    //     isYesterday(moment("2015-06-04"))
    // );
    // console.log(
    //   "is it within a week? ..........Should be true: " +
    //     isWithinAWeek(moment("2015-06-03"))
    // );
    // console.log(
    //   "is it within a week? ..........Should be false: " +
    //     isWithinAWeek(moment("2015-05-29"))
    // );
    // console.log(
    //   "is it two weeks older or more? Should be false: " +
    //     isMonth(moment("2015-05-30"))
    // );
    // console.log(
    //   "is it two weeks older or more? Should be true: " +
    //     isMonth(moment("2015-05-29"))
    // );

    response.forEach((item) => {
      item.items.forEach((createdAt) => {
        // let localDate = localStorage.getItem("date");
        console.log(createdAt);
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

        // if (isToday(moment(date))) {
        //   setTodayHistory((prevState) => [...prevState, createdAt]);
        // } else if (isYesterday(moment(date))) {
        //   setYesterdayHistory((prevState) => [...prevState, createdAt]);
        // } else if (isWithinAWeek(moment(date))) {
        //   setWeekHistory((prevState) => [...prevState, createdAt]);
        // } else if (isMonth(moment(date))) {
        //   setMonthHistory((prevState) => [...prevState, createdAt]);
        // }
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
