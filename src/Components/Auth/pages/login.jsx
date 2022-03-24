import React, { useState } from "react";
import { Typography, Button } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import googleIcon from "../../../assests/google.png";

import "../Stylesheet/stylesheet.css";
import { logIn } from "../../../Redux/Actions/auth.action";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("babuibrar@gmail.com");
  const [password, setPassword] = useState("babuibrar@93");
  const [message, setMessage] = useState("");

  const handleBack = (e) => {
    e.preventDefault();

    navigate("/");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await dispatch(logIn(email, password));
    // setMessage(response?.message);

    // const timer = setTimeout(() => {
    //   setMessage("");
    // }, 5000);
    // return () => clearTimeout(timer);
  };
  return (
    <>
      <div style={{ marginTop: "-40px" }}>
        <button onClick={handleBack} className="back_button">
          <ArrowBack style={{ fontSize: "18px" }} />{" "}
          <span style={{ paddingLeft: "10px", fontSize: "13px" }}>BACK</span>
        </button>
      </div>
      <div className="editormainpage_root_contianer">
        <div
          style={{
            paddingTop: "20px",
            display: "flex",
            flexDirection: "column",
            className: "inputs",
          }}
        >
          <input
            className="addcategory_input"
            placeholder="Email Address or Username"
            
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="addcategory_input"
            placeholder="Password"
            
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
            }}
          ></div>
        </div>
        {/* <div>
          {message && (
            <Typography variant="body1" style={{ color: "red" }}>
              {message}
            </Typography>
          )}
        </div> */}
        <Button className="update_button" onClick={handleLogin}>
          Log in
        </Button>
      </div>

      <div>
        <Typography className="orText">Or</Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <Button variant="text" className="signWithGoogle">
            <img src={googleIcon} className="googleIcon" alt="google" />
            Log in with Google
          </Button>
        </div>
      </div>

      <div style={{ width: "62%" }}>
        <div
          style={{
            float: "right",
            marginTop: "41px",
            color: "white",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link style={{ color: "white" }} to="/">
            {" "}
            Forget Password ?
          </Link>
          <ArrowForward />
        </div>
      </div>
    </>
  );
};

export default Login;
