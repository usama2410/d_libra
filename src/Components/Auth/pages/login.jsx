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
        style={{ color: `${theme ? "black" : "white"}` }}
      >
        <ArrowBack style={{ fontSize: "18px" }} />{" "}
        <span style={{ paddingLeft: "10px", fontSize: "13px" }}>Back</span>
      </button>

      <div className="editormainpage_root_contianer">
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

        <Button className="update_button" onClick={handleLogin}>
          Log in
        </Button>

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
            style={{
              marginTop: "41px",
              color: `${theme ? "black" : "white"}`,
              display: "flex",
              marginRight: "-100px",
            }}
          >
            <Link
              style={{
                color: `${theme ? "black" : "white"}`,
                textDecoration: "none",
              }}
              to="/"
            >
              {" "}
              Forget Password ?
            </Link>
            <ArrowForward />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
