import React from "react";
import { Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {useSelector} from 'react-redux'
import "./DeleteContent.css";
import image5 from "../../assests/image5.png";
const DeleteContent = () => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.state)
  return (
    <>
     
        <button
          onClick={() => navigate("/detailpage")}
          className="back_button"
          style={{ color: `${theme ? 'black' : 'white'}` }}
        >
          <ArrowBackIcon style={{ fontSize: "18px" }} />{" "}
          <span style={{ paddingLeft: "10px", fontSize: "13px" }}>Back</span>
        </button>

      
      <div style={{position: "absolute", top: "50%", left:"50%", transform: "translate(-50%, -50%)"}}>

        <div className="delete_content_textone">
            <span>Are you really deleting the following content?</span>
          </div>
      <div className="delete_content_main_container">
        <div style={{ display: "flex", flexDirection: "column" }}>
        
          <div className={theme ? "delete_content_texttwo_sub" : "delete_content_texttwo"}>
            <span>What is Git?</span>
          </div>
          <img src={image5} alt="" />
          <div
            style={{
              widthy: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button className="delete_content_button" style={{color: "white"}}> 
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
