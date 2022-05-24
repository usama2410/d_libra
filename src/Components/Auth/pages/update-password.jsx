import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../Stylesheet/stylesheet.css";

import {
    resetPassword
  } from "../../../Redux/Actions/auth.action";

const UpdatePassword = ({ email }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);

  const [password, setPassword] = useState();
  const [message, setMessage] = useState("");
  const [validation, setValidation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    const response = await dispatch(resetPassword(email, password, token));
    console.log("response", response);
  };

  return (
    <>
      <div className="editormainpage_root_contianer">
        <div className="editormainpage_container">
          <input
            className={theme ? "addcategory_input_sub" : "addcategory_input"}
            type="email"
            placeholder="Email"
            value={email}
          />
          <input
            className={theme ? "addcategory_input_sub" : "addcategory_input"}
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button className="update_button" onClick={handleResetPassword}>
          Reset Password
        </Button>
      </div>
    </>
  );
};

export default UpdatePassword;
