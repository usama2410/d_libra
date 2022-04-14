import React, { useState } from "react";
import { Typography, Button } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import googleIcon from "../../../assests/google.png";

import "../Stylesheet/stylesheet.css";
import { logIn } from "../../../Redux/Actions/auth.action";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("babuibrar@gmail.com");
  const [password, setPassword] = useState("babuibrar@93");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const theme = useSelector((state) => state.theme.state);

  const handleBack = (e) => {
    e.preventDefault();

    navigate("/");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await dispatch(logIn(email, password));
    setMessage(response.message);
    if (email === "" && password === "") {
      setErrorMessage(true);
    }

    const timer = setTimeout(() => {
      setErrorMessage(false);
      setMessage("");
    }, 5000);
    return () => clearTimeout(timer);
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

      <div className="loginmaincontainer">
        <div
          style={{
            paddingTop: "20px",
            display: "flex",
            flexDirection: "column",
            className: "inputs",
          }}
        >
          {errorMessage === true ? (
            <div className="errorMessage">Feilds cannot be empty!</div>
          ) : message ? (
            message === "Login SuccessFully" ? (
              <div className={theme ? "successMessage" : "successMessageTwo"}>
                {message}
              </div>
            ) : message === "Invalid Credential" ? (
              <div className="errorMessage">{message}</div>
            ) : null
          ) : null}

          <input
            className={theme ? "addcategory_input_sub" : "addcategory_input"}
            placeholder="Email Address or Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className={theme ? "addcategory_input_sub" : "addcategory_input"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
           <div className="logininbuttoncontainer">

        <Button className="loginbuttontext" onClick={handleLogin}>
          Log in
        </Button>
           </div>

        <div>
          <span className={theme ? "texttwo" : "orText"}>Or</span>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <Button variant="text" className="signWithGoogle">
              <img src={googleIcon} className="googleIcon" alt="google" />
              Log in with Google
            </Button>
          </div>
        </div>
        <div style={{ Width: "62%" }}>
          <div
          className="forgotpasswordcontainer"
            style={{
              color: `${theme ? "#363636" : "#FFFFFF"}`,
            
            }}
          >
            <span
            className="forgotpasswordtext"
              style={{
                color: `${theme ? "#363636" : "#FFFFFF"}`,
                
              }}
            >
              {" "}
              Forget Password ?
            </span>
            <ArrowForward  className="arrowforwardicon"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
