import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { ArrowBack} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../Stylesheet/stylesheet.css";
import { changePassword } from "../../../Redux/Actions/auth.action";

const ChangePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [oldPassword, setOldPassword] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState("");
  const [validation, setValidation] = useState(false);
  const theme = useSelector((state) => state.theme);
  const token = useSelector((state) => state.auth.token);

  const handleBack = (e) => {
    e.preventDefault();

    navigate("/");
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    const response = await dispatch(changePassword(oldPassword, password, token));
    // console.log("change password response", response);
    setMessage(response?.message);

    setValidation(true);
    const timer = setTimeout(() => {
      setValidation(false);
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
            placeholder="Old Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />

          <input
            className={theme ? "addcategory_input_sub" : "addcategory_input"}
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button className="update_button" onClick={handleChangePassword}>
          Chnage Password
        </Button>
      </div>
    </>
  );
};

export default ChangePassword;
