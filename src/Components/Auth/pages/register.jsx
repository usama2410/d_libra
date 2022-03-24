import React, { useState } from "react";
import { Typography, Button } from "@material-ui/core";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import googleIcon from "../../../assests/google.png";
import { useDispatch } from "react-redux";

import "../Stylesheet/stylesheet.css";
import { signUp } from "../../../Redux/Actions/auth.action";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUserName] = useState("MuhammadIbrar");
  const [email, setEmail] = useState("babuibrar@gmail.com");
  const [password, setPassword] = useState("babuibrar@93");
  const [data, setData] = useState("");
  const [message, setMessage] = useState("");

  const handleBack = (e) => {
    e.preventDefault();

    navigate("/");
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await dispatch(signUp(username, email, password));

    // setData(response?.data);
    // setMessage(response?.message);

    // const timer = setTimeout(() => {
    //   setData("");
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
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className="addcategory_input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="addcategory_input"
            placeholder="Create a Password"
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
{/* 
        <div>
          {data && (
            <Typography style={{ color: "red" }} variant="body1">
              {data}
            </Typography>
          )}
          {message && (
            <Typography style={{ color: "white" }} variant="body1">
              {message} !
            </Typography>
          )}
        </div> */}

        <Button className="update_button" onClick={handleRegister}>
          Register
        </Button>
      </div>

      <div>
        <Typography className="orText">Or</Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <Button variant="text" className="signWithGoogle">
            <img src={googleIcon} className="googleIcon" alt="google" />
            Sign up with Google
          </Button>
        </div>
      </div>
    </>
  );
};

export default Register;
