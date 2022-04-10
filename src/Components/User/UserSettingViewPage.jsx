import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import icon5 from "../../assests/icon5.png";
import Vector90 from "../../assests/Vector90.png";
import Vector92 from "../../assests/Vector92.png";
import Vector91 from "../../assests/Vector91.png";
import Member_Icon from '../../assests/SVG_Files/Member_Icon.svg'
import addwhite from "../../assests/addwhite.png";
import addblack from "../../assests/addblack.png";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { MdModeEditOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import "./UserSettingViewPage.css";
import { profileData, updateProfile } from "../../Redux/Actions/Profile.action";
import { useDispatch } from "react-redux";

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

  useEffect(() => {
    const userData = async () => {
      const response = await dispatch(profileData(token));
      setUsername(response?.data?.username);
      setEmail(response?.data?.email);
    };
    userData();
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const response = await dispatch(updateProfile(firstName, lastName, token));
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

  }
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
      {validation ? (
        firstName && lastName !== "" ? (
          message ? (
            message === "Update Successfully" ? (
              <div className={theme ? "successMessage" : "successMessageTwo"}>
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

      <div className="user_container_root">
        <div className="user_sub_root_container">
          <div className="user_root_container">
            <img src={Member_Icon} alt=""  className="usersettingmembericon"/>
            <div className="user_header_container">
              <div
                className="vector_container vectorcontainermobile"
                style={{ color: `${theme ? "#009AF9" : "#C8C8C8"}` }}
              >
                <MdModeEditOutline     className="editorimage_icon"/>
                <span
                  className="editoricon_image"
                 
                >
                  Editor
                </span>
              </div>
              <Button
                className={
                  theme ? "user_update_button_sub" : "user_update_button"
                }
              >
                Update Icon
              </Button>
            </div>
          </div>


          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              className="addcategory_text_bookmark_two"
              style={{ color: `${theme ? "#363636" : "white"}` }}
            >
              Username
            </span>
            <input
              className={theme ? "addcategory_input_sub" : "addcategory_input"}
              placeholder="Username"
              value={username}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column"}}>
            <span
              className="addcategory_text_bookmark_two"
              style={{ color: `${theme ? "#363636" : "white"}` }}
            >
              E-mail Address
            </span>
            <input
              className={theme ? "addcategory_input_sub" : "addcategory_input"}
              placeholder="E-mail Address"
              value={email}
            />
          </div>
          {/* <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              className="addcategory_text"
              style={{ color: `${theme ? "#363636" : "white"}` }}
            >
              First Name
            </span>
            <input
              className={theme ? "addcategory_input_sub" : "addcategory_input"}
              placeholder=" First Name"
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
              placeholder=" Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div> */}
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
                <img src={Vector90} alt=""  className="tagimageusersettingpage" />
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
              marginBottom: "-5px"
            }}
          >
            Bookmark Name
          </span>
          <div className="vector_container">
            <div className="vector_image">
              <img src={Vector90} alt="" className="tagimageusersettingpage" />
            </div>
            <input
              className={theme ? "profile_sub_input" : "profile_sub_input_two"}
              placeholder="High Priority Review List"
            />
          </div>
          <div className="vector_container">
            <div className="vector_image">
              <img src={Vector91} alt="" className="tagimageusersettingpage" />
            </div>
            <input
              className={theme ? "profile_sub_input" : "profile_sub_input_two"}
              placeholder="Review List"
            />
          </div>
          <div className="vector_container">
            <div className="vector_image">
              <img src={Vector92} alt="" className="tagimageusersettingpage" />
            </div>

            <input
              className={theme ? "profile_sub_input" : "profile_sub_input_two"}
              placeholder="For future need"
            />
          </div>
          <div className="vector_container">
            <img
              src={theme ? addblack : addwhite}
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
        <Button variant="contained" className="user_buttons">
          Log out
        </Button>
      </div>
    </div>
  );
};

export default UserSettingViewPage;
