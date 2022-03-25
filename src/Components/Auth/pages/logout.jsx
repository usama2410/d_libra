import React from "react";
import { Button, Typography } from "@material-ui/core";
import { ArrowBack } from "@mui/icons-material";

import "../Stylesheet/stylesheet.css";

const Logout = () => {
  const handleBack = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div style={{ marginTop: "-40px" }}>
        <button onClick={handleBack} className="back_button">
          <ArrowBack style={{ fontSize: "18px" }} />{" "}
          <span style={{ paddingLeft: "10px", fontSize: "13px" }}>BACK</span>
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography className="logoutText">
          You've successfully logged out
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button className="buttons">Log in</Button>
          <Button className="buttons">Continue with login</Button>
        </div>
      </div>
    </>
  );
};

export default Logout;
