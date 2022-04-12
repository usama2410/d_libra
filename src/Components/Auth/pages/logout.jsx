import React from "react";
import { Button, Typography } from "@material-ui/core";
import { ArrowBack } from "@mui/icons-material";
import {useSelector} from 'react-redux'
import "../Stylesheet/stylesheet.css";
import { useNavigate } from "react-router-dom";

const Logout = () => {
const navigate = useNavigate();

const theme = useSelector((state) => state.theme.state)

  const handleBack = (e) => {
    e.preventDefault();
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
        <div className="logoutmaincontainer">

      <div style={{ display: "flex", justifyContent: "center"}}>
        <Typography className="logoutText" style={{color: `${theme ? '#008EEC' : ' #FFFFFF'}`}}>
          You've successfully logged out.
        </Typography>
      </div>
      <div className="logoutcontainer">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button className="buttons" onClick={() => navigate('/login')}>Log in</Button>
          <Button  style={{marginTop: "30px"}}className="buttons" onClick={() => navigate('/')}>Continue without login</Button>
        </div>
      </div>
        </div>
    </>
  );
};

export default Logout;
