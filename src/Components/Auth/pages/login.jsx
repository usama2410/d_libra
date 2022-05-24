import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import googleIcon from "../../../assests/google.png";
import "../Stylesheet/stylesheet.css";
import { logIn } from "../../../Redux/Actions/auth.action";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import GoogleLogin from "react-google-login";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(false);
  const theme = useSelector((state) => state.theme.state);
  const role = useSelector((state) => state.auth.role);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // console.log("email", email, password);
  // console.log("role", role);

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await dispatch(logIn(email, password));
    console.log("response", response);
    setMessage(response?.message);
    if (!email || !password) {
      setErrorMessage(true);
    } else if (response?.data?.role === "normaluser") {
      setIsLoading(false);
      navigate("/");
    } else if (response?.data?.role === "editor") {
      setIsLoading(false);
      navigate("/editormainpage");
    }

    const timer = setTimeout(() => {
      setErrorMessage(false);
      setMessage("");
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

      <div className="loginmaincontainer">
        <div className="editomainpage_container">
          {errorMessage === true ? (
            <div className="errorMessage">Feilds cannot be empty!</div>
          ) : message ? (
            message === "Invalid Credential" ? (
              <div className="errorMessage">{message}</div>
            ) : null
          ) : null}

          <input
            className={theme ? "addcategory_input_sub" : "addcategory_input"}
            type="email"
            placeholder="Email Address or Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className={theme ? "addcategory_input_sub" : "addcategory_input"}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="logininbuttoncontainer">
          {isLoading ? (
            <Box
              className="loginbuttontext"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <CircularProgress color="inherit" size={30} />
            </Box>
          ) : (
            <Button className="loginbuttontext" onClick={handleLogin}>
              Log in
            </Button>
          )}
        </div>

        <div>
          <span className={theme ? "texttwo" : "orText"}>Or</span>
        </div>

        <div className="loginwithgooglecontainer">
          <div>
            {/* <GoogleOAuthProvider
              clientId="589338479437-kg18vpo3jkntfmefr8rl3cqug31c5rk9.apps.googleusercontent.com"
              redirectUri="http://localhost:3000/"
              scope="https://www.googleapis.com/auth/userinfo.email"
              onSuccess={(response) => {
                console.log("response", response);
                navigate("/");
              }}
              onFailure={(error) => {
                console.log("error", error);
              }}
            > */}
            <GoogleLogin
              clientId="557890712742-u2b9oop79pjvdq9e5s1n9pqmuuugodhd.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={(response) => {
                console.log("response", response);
              }}
              onFailure={(response) => {
                console.log("response", response);
              }}
              cookiePolicy={"single_host_origin"}
            />
            {/* </GoogleOAuthProvider> */}
          </div>
        </div>
        <div style={{ Width: "62%" }}>
          <div
            className="forgotpasswordcontainer"
            style={{
              color: `${theme ? "#363636" : "#FFFFFF"}`,
            }}
          >
            <Link
              to="/forgetPassword"
              className="forgotpasswordtext"
              style={{
                color: `${theme ? "#363636" : "#FFFFFF"}`,
              }}
            >
              {" "}
              Forget Password ?
              <ArrowForward className="arrowforwardicon" />
            </Link>
          </div>
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

export default Login;
