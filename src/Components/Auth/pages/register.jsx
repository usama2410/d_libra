import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import googleIcon from "../../../assests/google.png";
import { useDispatch, useSelector } from "react-redux";
import "../Stylesheet/stylesheet.css";
import { signUp } from "../../../Redux/Actions/auth.action";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.state);
  const [username, setUserName] = useState("MuhammadIbrar");
  const [email, setEmail] = useState("babuibrar@gmail.com");
  const [password, setPassword] = useState("babuibrar@93");
  const [errorMessage, setErrorMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState("");

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await dispatch(signUp(username, email, password));
    // console.log("response", response)
    setMessage(response.message);
    setData(response.data);
    if (email === "" && password === "") {
      setErrorMessage(true);
    }

    const timer = setTimeout(() => {
      setErrorMessage(false);
      setMessage("");
      setData("");
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

      <div className="registermaincontainer">
        <div className="editomainpage_container">
          {errorMessage === true ? (
            <div className="errorMessage">Feilds cannot be empty!</div>
          ) : message ? (
            message === "Account Created Successfully" ? (
              <div className={theme ? "successMessage" : "successMessageTwo"}>
                {message}
              </div>
            ) : message === "All Fields are Required" ? (<div className="errorMessage"> All Fields are Required </div>) : null
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
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className={theme ? "addcategory_input_sub" : "addcategory_input"}
            placeholder="Create a Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="registercontainer">
          <Button className="update_button" onClick={handleRegister}>
            Register
          </Button>
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
