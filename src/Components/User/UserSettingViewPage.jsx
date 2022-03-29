import React, { useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import icon5 from "../../assests/icon5.png";
import Vector90 from "../../assests/Vector90.png";
import Vector92 from "../../assests/Vector92.png";
import Vector91 from "../../assests/Vector91.png";
import { MdModeEditOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import "./UserSettingViewPage.css";
import { profileData } from "../../Redux/Actions/Profile.action";
import { useDispatch } from "react-redux";
const UserSettingViewPage = () => {
  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(profileData());
  });
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.state);
  return (
    <div>
      <Button
        onClick={() => navigate("/editormainpage")}
        className="back_button"
        style={{ color: `${theme ? "black" : "white"}` }}
        startIcon={<ArrowBackIcon />}>
        Back
      </Button>

      <div className="user_container_root">
        <div className="user_sub_root_container">
          <div className="user_root_container">
            <img src={icon5} alt="" />
            <div className="user_header_container">
              <div
                className="vector_container"
                style={{ color: `${theme ? "#009AF9" : "white"}` }}>
                <MdModeEditOutline />
                <span
                  className="vector_container"
                  style={{ fontSize: "14px", paddingLeft: "4px" }}>
                  Editor
                </span>
              </div>
              <Button
                className={
                  theme ? "user_update_button_sub" : "user_update_button"
                }>
                Update Icon
              </Button>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              className="addcategory_text"
              style={{ color: `${theme ? "#363636" : "white"}` }}>
              Username
            </span>
            <input
              className={theme ? "addcategory_input_sub" : "addcategory_input"}
              placeholder="Username"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              className="addcategory_text"
              style={{ color: `${theme ? "#363636" : "white"}` }}>
              E-mail Address
            </span>
            <input
              className={theme ? "addcategory_input_sub" : "addcategory_input"}
              placeholder="E-mail Address"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              className="addcategory_text"
              style={{ color: `${theme ? "#363636" : "white"}` }}>
              First Name
            </span>
            <input
              className={theme ? "addcategory_input_sub" : "addcategory_input"}
              placeholder=" First Name"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              className="addcategory_text"
              style={{ color: `${theme ? "#363636" : "white"}` }}>
              Last Name
            </span>
            <input
              className={theme ? "addcategory_input_sub" : "addcategory_input"}
              placeholder=" Last Name"
            />
          </div>
        </div>

        <div className="user_bookmark_container">
          <div className="hidden_user_input">
            <span
              className="addcategory_text"
              style={{ color: `${theme ? "#363636" : "white"}` }}>
              Bookmark Name
            </span>
            <div className="vector_container">
              <div className="vector_image">
                <img src={Vector90} alt="" />
              </div>
              <input
                className={
                  theme ? "addcategory_input_sub" : "addcategory_input"
                }
                placeholder="High Priority Review List"
              />
            </div>
          </div>
          <span
            className="addcategory_text"
            style={{
              color: `${theme ? "#363636" : "white"}`,
              marginTop: "12px",
            }}>
            Bookmark Name
          </span>
          <div className="vector_container">
            <div className="vector_image">
              <img src={Vector90} alt="" />
            </div>
            <input
              className={theme ? "addcategory_input_sub" : "addcategory_input"}
              placeholder="High Priority Review List"
            />
          </div>
          <div className="vector_container">
            <div className="vector_image">
              <img src={Vector91} alt="" />
            </div>
            <input
              className={theme ? "addcategory_input_sub" : "addcategory_input"}
              placeholder="Review List"
            />
          </div>
          <div className="vector_container">
            <div className="vector_image">
              <img src={Vector92} alt="" />
            </div>
            <input
              className={theme ? "addcategory_input_sub" : "addcategory_input"}
              placeholder="For future need"
            />
          </div>
        </div>
      </div>

      <div className="user_buttons_container">
        <Button variant="contained" className="user_buttons">
          Change Password
        </Button>
        <Button variant="contained" className="user_buttons">
          Update
        </Button>
        <Button variant="contained" className="user_buttons">
          Log out
        </Button>
      </div>
    </div>
  );
};

export default UserSettingViewPage;
