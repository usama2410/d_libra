import React, { useState } from "react";
import { Typography, Button } from "@material-ui/core";
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
            message === "Account Created Successfully" ? (
              <div className={theme ? "successMessage" : "successMessageTwo"}>
                {message}
              </div>
            ) : null
          ) : null}

          {data === "Email already exist" ? (
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
<div style={{marginTop: "-16px"}}>  

        <Button className="update_button" onClick={handleRegister}>
          Register
        </Button>
</div>
      </div>

      <div>
      <span className={theme ? "texttwo" : "orText"}>Or</span>
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
