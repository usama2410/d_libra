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
import Bookmark_yellow from "../../assests/SVG_Files/New folder/Bookmark_yellow.svg";
import Bookmark_grey from "../../assests/SVG_Files/New folder/Bookmark_gray.svg";
import FooterButtons from "./FooterButtons";
import Editor_icon_dark from "../../assests/SVG_Files/New/Editor_icon_dark.svg";
import Editor_icon_light from "../../assests/SVG_Files/New/Editor_icon_light.svg";
import { development } from "../../endpoints";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { logout } from "../../Redux/Actions/auth.action";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { home } from "../../Redux/Actions/Client Side/home.action";
import {
  addBookmark,
  showAllBoomark,
} from "../../Redux/Actions/bookmark.action";

const UserSettingViewPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);

  const [username, setUsername] = useState();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [validation, setValidation] = useState(false);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [addBookMark, setAddBookMark] = useState([]);
  const [show, setShow] = useState(false);
  let [count, setCount] = useState(0);
  let [countTwo, setCountTwo] = useState(1);
  const [personal, setPersonal] = useState("");
  const [dayend, setDayend] = useState("");

  const user = useSelector((state) => state?.auth?.profile);

  // console.log("count", count, "countTwo", countTwo);

  const handleBack = () => {
    navigate("/");
  };

  const handleShowAllBookmark = async () => {
    const response = await dispatch(showAllBoomark(role, token));
    // console.log(response.slice(0, 2));
    setAddBookMark(response?.slice(0, 2));
  };

  const userData = async () => {
    const response = await dispatch(profileData(token));
    setUsername(response?.data?.username);
    setEmail(response?.data?.email);
    setFirstName(response?.data?.fname);
    setLastName(response?.data?.lname);
  };

  useEffect(() => {
    userData();
    handleShowAllBookmark();
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await dispatch(
      updateProfile(firstName, lastName, imageName, token, auth)
    );
    // console.log("response", response);
    setMessage(response?.message);
    setValidation(true);
    const timer = setTimeout(() => {
      setValidation(false);
      setMessage("");
    }, 5000);
    setIsLoading(false);
    return () => clearTimeout(timer);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    navigate("/changepassword");
  };

  const handleChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setImageName(e.target.files[0]);
    if (imageName.name !== "") {
      setShowImage(true);
    }
  };

  const handleLogout = async () => {
    // localStorage.clear();
    // window.load((window.location.href = "/logout"));
    const response = await dispatch(logout(role, token));
    // console.log("response", response);
    response?.message === "logout successfully" && navigate("/logout");
    // navigate("/logout")
  };

  const hanldeAddBookmark = async () => {
    setShow(true);
    setCount(count + 1);
    if (count === 1) {
      setCount(1);
    }
    setCountTwo(count + 1);
    if (countTwo === 2) {
      setShow(false);
    }
    if (addBookMark?.length === 1) {
      setCountTwo(2);
      setCount(0);
    }
  };

  const hanldeAddCustomPriority = async () => {
    let priorityArray = [];

    if (count === 1) {
      setCount(1);
      priorityArray.push({
        colorcode: "#FFAA1D",
        bookmarkname: personal,
      });
    }
    if (countTwo === 2) {
      priorityArray = [];
      priorityArray.push({
        colorcode: "#C8C8C8",
        bookmarkname: dayend,
      });
    }

    // console.log("priorityArray", priorityArray);
    if (personal.length || dayend.length !== 0) {
      const response = await dispatch(addBookmark(priorityArray, role, token));
      // console.log("response", response);
    } else {
      setMessage("Please enter bookmark name");
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
            {user !== null ? (
              <img
                src={showImage ? image : `${development}/${user}`}
                alt="No Image"
                style={{ borderRadius: "50%" }}
                className="usersettingmembericon"
              />
            ) : (
              <img
                src={Member_Icon}
                alt="No Image"
                style={{ borderRadius: "50%" }}
                className="usersettingmembericon"
              />
            )}
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
                  {!firstName || !lastName
                    ? "Editor"
                    : `${firstName} ${lastName}`}
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

            {/* AUTOCOMPLETE */}
            <input
              className={theme ? "profile_sub_input" : "profile_sub_input_two"}
              value="High Priority Review List"
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
              value="Review List"
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
              value="For future read"
            />
          </div>

          {addBookMark?.map((bookmark) => {
            return (
              <div className="vector_container">
                <div className="vector_image">
                  <img
                    src={
                      bookmark.colorcode === "#FFAA1D"
                        ? Bookmark_yellow
                        : bookmark.colorcode === "#C8C8C8" && Bookmark_grey
                    }
                    alt=""
                    className="tagimageusersettingpage"
                  />
                </div>
                <input
                  className={
                    theme ? "profile_sub_input" : "profile_sub_input_two"
                  }
                  value={bookmark?.name}
                />
              </div>
            );
          })}
          {/* {console.log(addBookMark?.length)} */}
          {show === true || addBookMark?.length < 0 ? (
            <>
              {count === 1 && (
                <>
                  <div className="vector_container">
                    <div className="vector_image">
                      <img
                        src={Bookmark_yellow}
                        alt=""
                        className="tagimageusersettingpage"
                      />
                    </div>

                    <input
                      className={
                        theme ? "profile_sub_input" : "profile_sub_input_two"
                      }
                      placeholder="Add Your Custom Bookmark"
                      value={personal}
                      onChange={(e) => setPersonal(e.target.value)}
                    />
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      size="small"
                      style={{
                        backgroundColor: "#FFAA1D",
                        borderRadius: "50px",
                      }}
                      onClick={hanldeAddCustomPriority}
                    >
                      Add
                    </Button>
                  </div>
                </>
              )}
            </>
          ) : null}

          {countTwo === 2 && (
            <>
              <div className="vector_container">
                <div className="vector_image">
                  <img
                    src={Bookmark_grey}
                    alt=""
                    className="tagimageusersettingpage"
                  />
                </div>

                <input
                  className={
                    theme ? "profile_sub_input" : "profile_sub_input_two"
                  }
                  placeholder="Add Your Custom Bookmark"
                  value={dayend}
                  onChange={(e) => setDayend(e.target.value)}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  size="small"
                  style={{ backgroundColor: "#C8C8C8", borderRadius: "50px" }}
                  onClick={hanldeAddCustomPriority}
                >
                  Add
                </Button>
              </div>
            </>
          )}

          {countTwo < 2 && (
            <div className="vector_container">
              <img
                src={theme ? Add_light : Add_dark}
                alt=""
                className="addiconcontainer"
                style={{ cursor: "pointer" }}
                onClick={hanldeAddBookmark}
              />

              <input
                className={
                  theme ? "profile_sub_input" : "profile_sub_input_two"
                }
                placeholder="For future need"
                style={{ visibility: "hidden" }}
              />
            </div>
          )}

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
        {isLoading ? (
          <Box
            className="user_buttons"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <CircularProgress color="inherit" size={30} />
          </Box>
        ) : (
          <Button
            variant="contained"
            className="user_buttons"
            onClick={handleUpdateProfile}
          >
            Update
          </Button>
        )}

        <Button
          variant="contained"
          className="user_buttons"
          onClick={handleLogout}
        >
          Log out
        </Button>
      </div>
      <FooterButtons />
    </div>
  );
};

export default UserSettingViewPage;
