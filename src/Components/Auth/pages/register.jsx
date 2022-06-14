import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import googleIcon from "../../../assests/google.png";
import { useDispatch, useSelector } from "react-redux";
import "../Stylesheet/stylesheet.css";
import { signUp } from "../../../Redux/Actions/auth.action";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.state);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await dispatch(signUp(username, email, password));
    // console.log("response", response);
    setMessage(response.message);
    setData(response.data);
    if (email === "" && password === "") {
      setErrorMessage(true);
    } else if (response.message === "Account Created Successfully") {
      navigate("/");
    }

    const timer = setTimeout(() => {
      setErrorMessage(false);
      setMessage("");
      setData("");
    }, 5000);
    setIsLoading(false);
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

      <div className="registermaincontainer">
        <div className="editomainpage_container">
          {errorMessage === true ? (
            <div className="errorMessage">Feilds cannot be empty!</div>
          ) : message ? (
            message === "Account Created Successfully" ? (
              <div className={theme ? "successMessage" : "successMessageTwo"}>
                {message}
              </div>
            ) : message === "All Fields are Required" ? (
              <div className="errorMessage"> All Fields are Required </div>
            ) : message === "Password must be 8 or less than 20 characters" ? (
              <div className="errorMessage">{message}</div>
            ) : message === "Email format is incorrect" ? (
              <div className="errorMessage">{message}</div>
            ) : null
          ) : null}

          {data === "Email or Username already exist" ? (
            <div className="errorMessage">{data}</div>
          ) : null}

          <input
            className={theme ? "addcategory_input_sub" : "addcategory_input"}
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className={theme ? "addcategory_input_sub" : "addcategory_input"}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className={theme ? "addcategory_input_sub" : "addcategory_input"}
            type="password"
            placeholder="Create a Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="registercontainer">
          {isLoading ? (
            <Box
              className="loginbuttontext"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <CircularProgress color="inherit" size={30} />
            </Box>
          ) : (
            <Button className="update_button" onClick={handleRegister}>
              Register
            </Button>
          )}
        </div>
      </div>

      <div>
        <span className={theme ? "texttwo" : "orText"}>Or</span>
      </div>

      <div className="loginwithgooglecontainer">
        <div>
          <Button variant="text" className="signWithGoogle">
            <img src={googleIcon} className="googleIcon" alt="google" />
            Sign up with Google
          </Button>
        </div>
        <div
          className="footer_copyright editor_mainPage_footer"
          style={{ color: theme ? " #000000" : " #C8C8C8 " }}
        >
          <span className="d_libratext">
            &copy; D-Libra All Rights Reserved
          </span>
        </div>
      </div>
    </>
  );
};

export default Register;
