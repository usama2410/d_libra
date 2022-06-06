import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Member_Icon from "../../assests/SVG_Files/Member_Icon.svg";
import { ArrowBack } from "@mui/icons-material";
import { useSelector } from "react-redux";
import "./UserSettingViewPage.css";
import { profileData, updateProfile } from "../../Redux/Actions/Profile.action";
import { useDispatch } from "react-redux";
import Add_dark from "../../assests/SVG_Files/New folder/Add_dark.svg";
import Add_light from "../../assests/SVG_Files/New folder/Add_light.svg";
import Bookmark_green from "../../assests/SVG_Files/New folder/Bookmark_green.svg";
import Bookmark_blue from "../../assests/SVG_Files/New folder/Bookmark_blue.svg";
import Bookmark_red from "../../assests/SVG_Files/New folder/Bookmark_red.svg";
import FooterButtons from "./FooterButtons";
import Editor_icon_dark from "../../assests/SVG_Files/New/Editor_icon_dark.svg";
import Editor_icon_light from "../../assests/SVG_Files/New/Editor_icon_light.svg";
import { development } from "../../endpoints";

const UserSettingViewPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);

  const [username, setUsername] = useState();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [validation, setValidation] = useState(false);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");
  const [showImage, setShowImage] = useState(false);
  const user = useSelector((state) => state?.auth);

  // console.log("image", image, imageName);

  useEffect(() => {
    const userData = async () => {
      const response = await dispatch(profileData(token));
      console.log("respinse", response);
      setUsername(response?.data?.username);
      setEmail(response?.data?.email);
      // setImageName(response?.data?.profile);
      setFirstName(response?.data?.fname);
      setLastName(response?.data?.lname);
    };
    userData();
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const response = await dispatch(
      updateProfile(firstName, lastName, imageName, token)
    );
    setMessage(response?.message);
    setValidation(true);
    const timer = setTimeout(() => {
      setValidation(false);
      setMessage("");
    }, 5000);
    return () => clearTimeout(timer);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    navigate("/changepassword");
  };

  const handleBack = () => {
    navigate("/userdetailpage");
  };

  const handleChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setImageName(e.target.files[0]);
    if (imageName.name !== "") {
      setShowImage(true);
    }
  };

  return (
    <div>
      <button
        onClick={handleBack}
        className="back_button"
        style={{ color: `${theme ? " #363636" : " #FFFFFF"}` }}
      >
        <ArrowBack className="backbutton_icon" />{" "}
        <span className="backbutton_text">Back</span>
      </button>

      <div className="user_container_root">
        <div className="user_sub_root_container">
          <div
            className={
              theme ? "user_root_container" : "user_root_container_two"
            }
          >
            <img
              src={
                showImage
                  ? image
                  : user
                  ? `${development}/${user?.profile}`
                  : Member_Icon
              }
              alt=""
              style={{ borderRadius: "50%" }}
              className="usersettingmembericon"
            />
            <div className="user_header_container">
              <div
                className="vector_container vectorcontainermobile"
                style={{ color: `${theme ? "#009AF9" : "#C8C8C8"}` }}
              >
                {theme ? (
                  <img
                    src={Editor_icon_light}
                    alt=""
                    className="editoricon_image"
                  />
                ) : (
                  <img
                    src={Editor_icon_dark}
                    alt=""
                    className="editoricon_image_two"
                  />
                )}
                <span
                  className={
                    theme ? " editorimage_icon" : "  editorimage_icon_two"
                  }
                >
                  Editor
                </span>
              </div>
              <div>
                <label htmlFor="contained-button-file">
                  <input
                    accept="image/*"
                    id="contained-button-file"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) => handleChange(e)}
                  />
                  <Button
                    component="span"
                    className={
                      theme ? "user_update_button_sub" : "user_update_button"
                    }
                    onChange={(e) => handleChange(e)}
                  >
                    Update Icon
                  </Button>
                </label>
              </div>
            </div>
          </div>

          <div className="userinputfieldmaincontainer">
            {validation ? (
              firstName && lastName !== "" ? (
                message ? (
                  message === "Update Successfully" ? (
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
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                className="addcategory_text_bookmark_two"
                style={{ color: `${theme ? "#363636" : "white"}` }}
              >
                Username
              </span>
              <input
                className={
                  theme
                    ? "usersetting_inputfield_light"
                    : "usersetting_inputfield_dark"
                }
                placeholder="Username"
                value={username}
              />
            </div>
            <div className="emailaddresscontainer">
              <span
                className="addcategory_text_bookmark_two"
                style={{ color: `${theme ? "#363636" : "white"}` }}
              >
                E-mail Address
              </span>
              <input
                className={
                  theme
                    ? "usersetting_inputfield_light"
                    : "usersetting_inputfield_dark"
                }
                placeholder="E-mail Address"
                value={email}
              />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              className="addcategory_text"
              style={{ color: `${theme ? "#363636" : "white"}` }}
            >
              First Name
            </span>
            <input
              className={theme ? "addcategory_input_sub" : "addcategory_input"}
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              className="addcategory_text"
              style={{ color: `${theme ? "#363636" : "white"}` }}
            >
              Last Name
            </span>
            <input
              className={theme ? "addcategory_input_sub" : "addcategory_input"}
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="user_bookmark_container">
          <div className="hidden_user_input">
            <span
              className="addcategory_text_bookmark"
              style={{ color: `${theme ? "#363636" : "white"}` }}
            >
              Bookmark Name
            </span>
            <div className="vector_container">
              <div className="vector_image">
                <img
                  src={Bookmark_blue}
                  alt=""
                  className="tagimageusersettingpage"
                />
              </div>
              <input
                className={
                  theme ? "profile_sub_input" : "profile_sub_input_two"
                }
                placeholder="High Priority Review List"
              />
            </div>
          </div>
          <span
            className="addcategory_text_bookmark"
            style={{
              color: `${theme ? "#363636" : "white"}`,
              marginTop: "20px",
              marginBottom: "-5px",
            }}
          >
            Bookmark Name
          </span>
          <div className="vector_container">
            <div className="vector_image">
              <img
                src={Bookmark_blue}
                alt=""
                className="tagimageusersettingpage"
              />
            </div>
            <input
              className={theme ? "profile_sub_input" : "profile_sub_input_two"}
              placeholder="High Priority Review List"
            />
          </div>
          <div className="vector_container">
            <div className="vector_image">
              <img
                src={Bookmark_green}
                alt=""
                className="tagimageusersettingpage"
              />
            </div>
            <input
              className={theme ? "profile_sub_input" : "profile_sub_input_two"}
              placeholder="Review List"
            />
          </div>
          <div className="vector_container">
            <div className="vector_image">
              <img
                src={Bookmark_red}
                alt=""
                className="tagimageusersettingpage"
              />
            </div>

            <input
              className={theme ? "profile_sub_input" : "profile_sub_input_two"}
              placeholder="For future need"
            />
          </div>
          <div className="vector_container">
            <img
              src={theme ? Add_light : Add_dark}
              alt=""
              className="addiconcontainer"
            />

            <input
              className={theme ? "profile_sub_input" : "profile_sub_input_two"}
              placeholder="For future need"
              style={{ visibility: "hidden" }}
            />
          </div>

          <div className="vector_image"></div>
        </div>
      </div>

      <div className="user_buttons_container" style={{ paddingBottom: "20px" }}>
        <Button
          variant="contained"
          className="user_buttons"
          onClick={handleChangePassword}
        >
          Change Password
        </Button>
        <Button
          variant="contained"
          className="user_buttons"
          onClick={handleUpdateProfile}
        >
          Update
        </Button>
        <Button variant="contained" className="user_buttons" onClick={() => navigate('/logout')}>
          Log out
        </Button>
      </div>
      <FooterButtons />
    </div>
  );
};

export default UserSettingViewPage;
