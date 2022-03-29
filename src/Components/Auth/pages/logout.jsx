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
        <button onClick={handleBack}  className="back_button"
          style={{ color: `${theme ? 'black' : 'white'}` }}>
          <ArrowBack style={{ fontSize: "18px" }} />{" "}
          <span style={{ paddingLeft: "10px", fontSize: "13px" }}>BACK</span>
        </button>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
        <Typography className="logoutText" style={{color: `${theme ? '#008EEC' : 'white'}`}}>
          You've successfully logged out
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button className="buttons" onClick={() => navigate('/login')}>Log in</Button>
          <Button className="buttons" onClick={() => navigate('/')}>Continue without login</Button>
        </div>
      </div>
    </>
  );
};

export default Logout;
