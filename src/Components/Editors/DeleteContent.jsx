import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { useSelector } from "react-redux";
import "./DeleteContent.css";
import WhatIsGit_ from "../../assests/SVG_Files/Slides/WhatIsGit_.svg";

const DeleteContent = () => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.state);

  const handleBack = () => {
    navigate("/editcontentmain");
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
      <div className="deletecontentcontainer">
        <div className="delete_content_textone">
          <span>Are you really deleting the following content?</span>
        </div>
        <div className="delete_content_main_container">
          <div className="deletecontainer">
            <div
              className={
                theme ? "delete_content_texttwo_sub" : "delete_content_texttwo"
              }
            >
              <span>What is Git?</span>
            </div>
            <img src={WhatIsGit_} alt="" className="deletecontentimage" />
            <div className="updatecontainerbutton">
              <button
                onClick={() => navigate("/mycontents")}
                className="delete_content_button"
                style={{ color: "#FFFFFF" }}
              >
                Yes, delete the content
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteContent;
