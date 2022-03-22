import React from "react";
import "./MyContents.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Branches from "./Branches";
import EditCommit from "./EditCommit";
import GitConcepts from "./GitConcepts";
import GitProject from "./GitProejct";
import GitSettings from "./GitSettings";
import Introduction from "./Introduction";
import GitLifeCycle from "./GitLifeCycle";

const MyContents = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div style={{ marginTop: "-40px" }}>
        <button
          onClick={() => navigate("/editcoursestructure")}
          className="back_button"
        >
          <ArrowBackIcon style={{ fontSize: "18px" }} />{" "}
          <span style={{ paddingLeft: "10px", fontSize: "13px" }}>BACK</span>
        </button>
      </div>
      <div className="mainContentContainer">
        <span className="mycontentheadingone">Git & Git Hub Introduction</span>{" "}
        <span className="mycontentheadingtwo">Select a Content for Edit</span>
      </div>
      <div>
        <Introduction />
      </div>
      <div>
        <GitConcepts />
      </div>
      <div>
        <GitLifeCycle />
      </div>
      <div>
        <GitSettings />
      </div>
      <div>
        <GitProject />
      </div>
      <div>
        <EditCommit />
      </div>
      <div>
        <Branches />
      </div>
    </>
  );
};

export default MyContents;
