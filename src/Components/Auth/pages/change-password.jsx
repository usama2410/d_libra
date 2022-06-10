import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../Stylesheet/stylesheet.css";
import { changePassword } from "../../../Redux/Actions/auth.action";
import { editorChangePassword } from "../../../Redux/Actions/Editor/auth.action";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ChangePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);

  const [oldPassword, setOldPassword] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState("");
  const [validation, setValidation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/usersettingviewpage");
  };

  const handleErrors = (response) => {
    setMessage(response?.message);
    setValidation(true);
    if (response?.message === "Change Password Successfully") {
      navigate("/login");
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (role === "normaluser") {
      const response = await dispatch(
        changePassword(oldPassword, password, token)
      );
      handleErrors(response);
    } else {
      const response = await dispatch(
        editorChangePassword(password, oldPassword, role, token)
      );
      handleErrors(response);
    }

    const timer = setTimeout(() => {
      setValidation(false);
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
        <ArrowBack className="backbutton_icon" />
        <span className="backbutton_text">Back</span>
      </button>

      <div className="editormainpage_root_contianer">
        <div className="editormainpage_container">
          {validation ? (
            oldPassword && password !== undefined ? (
              message ? (
                message === "Password Update Successfully" ? (
                  <div
                    className={theme ? "successMessage" : "successMessageTwo"}
                  >
                    {message}
                  </div>
                ) : (
                  <div className="errorMessage">{message}</div>
                )
              ) : null
            ) : (
              <div className="errorMessage">Feilds cannot be empty!</div>
            )
          ) : null}
          <input
            className={theme ? "addcategory_input_sub" : "addcategory_input"}
            type="password"
            placeholder="Old Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />

          <input
            className={theme ? "addcategory_input_sub" : "addcategory_input"}
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {isLoading ? (
          <Box
            className="update_button"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <CircularProgress color="inherit" size={30} />
          </Box>
        ) : (
          <Button className="update_button" onClick={handleChangePassword}>
            Change Password
          </Button>
        )}
      </div>
      <div
        className="footer_copyright editor_mainPage_footer"
        style={{ color: theme ? " #000000" : " #C8C8C8 " }}
      >
        <span style={{ fontSize: "12px" }}>
          &copy; D-Libra All Rights Reserved
        </span>
      </div>
    </>
  );
};

export default ChangePassword;
