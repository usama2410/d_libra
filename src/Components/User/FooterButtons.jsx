import React from "react";
import { Button } from "@material-ui/core";
import sharepic from "../../assests/sharepic.png";
// import Rating from "../../assests/Rating.png";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import Arrow2 from "../../assests/Arrow2.png";
import Arrow3 from "../../assests/Arrow3.png";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
// import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import telegram from "../../assests/telegram.png";
import gmail from "../../assests/gmail.png";
import whatsapp from "../../assests/whatsapp.png";
import facebook from "../../assests/facebook.png";
import messanger from "../../assests/messanger.png";

import Popup_CloseArrow from "../../assests/SVG_Files/New folder/Popup_CloseArrow.svg";
import Popup_OpenArrow from "../../assests/SVG_Files/New folder/Popup_OpenArrow.svg";
import Rating from "../../assests/SVG_Files/Rating.svg";
import MyLibrary from "../../assests/SVG_Files/MyLibrary.svg";
import History from "../../assests/SVG_Files/History.svg";
import Share from "../../assests/SVG_Files/Share.svg";
import Icon_messages from '../../assests/SVG_Files/New folder/icons/Icon_messages.svg'
import Icon_facebook from '../../assests/SVG_Files/New folder/icons/Icon_facebook.svg'
import Icon_gmail from '../../assests/SVG_Files/New folder/icons/Icon_gmail.svg'
import Icon_telegram from '../../assests/SVG_Files/New folder/icons/Icon_telegram.svg'
import Icon_whatsapp from '../../assests/SVG_Files/New folder/icons/Icon_whatsapp.svg'

import { useNavigate } from "react-router-dom";
import { border } from "@mui/system";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

const FooterButtons = (props) => {
  const navigate = useNavigate();

  const [footerbutton, setFooterButton] = React.useState(false);
  const handleFotterButton = () => {
    setFooterButton(true);
    if (footerbutton === true) {
      setFooterButton(false);
    }
  };

  const actions = [
    { icon: <FileCopyIcon />, name: "Copy" },
    { icon: <SaveIcon />, name: "Save" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
  ];

  // const { window } = props;
  const [open, setOpen] = React.useState(false);
  const [mobileView, setMobileView] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  // const container = window !== undefined ? () => window().document.body : undefined;

  React.useEffect(() => {
    if (window.innerWidth > 425) {
      setMobileView(false);
    } else {
      setMobileView(true);
    }
    // console.log("Width: " , window.innerWidth);
  }, []);

  return (
    <>
      <div>
        <div className="footer_buttons_container">
          {/* <Button className="footer_buttons" variant="contained"> */}
          <img
            src={History}
            alt=""
            style={{ cursor: "pointer" }}
            width="50px"
            height="50px"
          />
          {/* <div className="footer_sub">
              <img
                src={sharepic}
                alt=""
                style={{ width: "22px", height: "22px" }}
              />
              <span>history</span>
            </div> */}
          {/* </Button> */}

          {/* <Button className="footer_buttons" variant="contained"> */}
          <img
            src={MyLibrary}
            alt=""
            style={{ cursor: "pointer" }}
            width="50px"
            height="50px"
          />
          {/* <div className="footer_sub">
              <img
                src={Rating}
                alt=""
                style={{ width: "22px", height: "22px" }}
              />
              <span>Library</span>
            </div> */}
          {/* </Button> */}
          {/* <Button
            className="footer_buttons"
            variant="contained"
            onClick={() => navigate("/ratingform")}
          > */}
          <img
            src={Rating}
            alt=""
            style={{ cursor: "pointer" }}
            width="50px"
            height="50px"
          />
          {/* <div className="footer_sub">
              <MenuBookIcon style={{ width: "20px", height: "20px" }} />
              <span>rating</span>
            </div> */}
          {/* </Button> */}
          {/* <Button
            className="footer_buttons"
            variant="contained"
            onClick={toggleDrawer(true)}
          > */}

          <img
            src={Share}
            onClick={toggleDrawer(true)}
            alt=""
            style={{ cursor: "pointer" }}
            width="50px"
            height="50px"
          />
          {/* <div className="footer_sub">
              <AccessTimeIcon style={{ width: "22px", height: "22px" }} />
              <span>Share</span>
            </div> */}
          {/* </Button> */}
        </div>

        <div className="mobile_view_button">
          <div style={{ display: footerbutton ? "block" : "none" }}>
            <div
              style={{
                display: "flex",
                marginBottom: "10px",
                marginLeft: "30px",
              }}
            >
              {/* <Button className="footer_buttons" variant="contained"> */}
              <img
                src={History}
                alt=""
                style={{ cursor: "pointer" }}
                width="50px"
                height="50px"
              />
              {/* <div className="footer_sub">
                  <img
                    src={sharepic}
                    alt=""
                    style={{ width: "22px", height: "22px" }}
                  />
                  <span>history</span>
                </div> */}
              {/* </Button> */}

              {/* <Button className="footer_buttons" variant="contained"> */}
              <img
                src={MyLibrary}
                alt=""
                style={{ cursor: "pointer" }}
                width="50px"
                height="50px"
              />
              {/* <div className="footer_sub">
                  <img
                    src={Rating}
                    alt=""
                    style={{ width: "22px", height: "22px" }}
                  />
                  <span>Library</span>
                </div> */}
              {/* </Button> */}
              {/* <Button className="footer_buttons" variant="contained"> */}
              <img
                src={Rating}
                alt=""
                style={{ cursor: "pointer" }}
                width="50px"
                height="50px"
              />
              {/* <div className="footer_sub">
                  <MenuBookIcon style={{ width: "20px", height: "20px" }} />
                  <span>rating</span>
                </div> */}
              {/* </Button> */}
              {/* <Button
                className="footer_buttons"
                variant="contained"
                onClick={toggleDrawer(true)}
              > */}
              <img
                src={Share}
                onClick={toggleDrawer(true)}
                alt=""
                style={{ cursor: "pointer" }}
                width="50px"
                height="50px"
              />
              {/* <div className="footer_sub">
                  <AccessTimeIcon style={{ width: "22px", height: "22px" }} />
                  <span>Share</span>
                </div> */}
              {/* </Button> */}
            </div>

            <SwipeableDrawer
              className="footer-drawer"
              anchor="bottom"
              open={open}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
              swipeAreaWidth={drawerBleeding}
              disableSwipeToOpen={true}
              ModalProps={{
                keepMounted: true,
              }}
            >
              <div className="bottomnavigator">
                <StyledBox
                  sx={{
                    px: 10,
                    pb: 24,
                    height: "100%",
                    overflow: "auto",
                  }}
                  style={{
                    paddingTop: "10px",
                    // border: "1px solid red",
                    // height :"50px ",
                    background: "#363636",
                    borderRadius: mobileView ? "10px" : "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {mobileView ? (
                        <>
                          <img
                            src={Icon_messages}
                            alt=""
                            style={{ paddingLeft: "0px" }}
                          />
                          <img
                            src={Icon_whatsapp}
                            alt=""
                            style={{ paddingLeft: "15px" }}
                          />
                          <img
                            src={Icon_facebook}
                            alt=""
                            style={{ paddingLeft: "15px" }}
                          />
                          <img
                            src={Icon_gmail}
                            alt=""
                            style={{ paddingLeft: "15px" }}
                          />
                          <img
                            src={Icon_telegram}
                            alt=""
                            style={{ paddingLeft: "15px" }}
                          />
                        </>
                      ) : (
                        <>
                          <img
                            src={Icon_messages}
                            alt=""
                            style={{
                              position: "relative",
                              bottom: "-90px",
                              left: "-45px",
                            }}
                          />
                          <img
                            src={Icon_whatsapp}
                            alt=""
                            style={{
                              position: "relative",
                              bottom: "-40px",
                              left: "-22px",
                            }}
                          />
                          <img
                            src={Icon_facebook}
                            alt=""
                            style={{
                              position: "relative",
                              bottom: "-26px",
                              left: "8px",
                            }}
                          />
                          <img
                            src={Icon_gmail}
                            alt=""
                            style={{
                              position: "relative",
                              bottom: "-40px",
                              left: "40px",
                            }}
                          />
                          <img
                            src={Icon_telegram}
                            alt=""
                            style={{
                              position: "relative",
                              bottom: "-90px",
                              left: "52px",
                            }}
                          />
                        </>
                      )}
                    </div>
                    <Typography
                      className="sharingthispagetext"
                      variant="h6"
                      style={{
                        color: "white",
                        position: "absolute",
                        bottom: "150px",
                      }}
                    >
                      {" "}
                      sharing this Page
                    </Typography>
                  </div>
                </StyledBox>
              </div>
            </SwipeableDrawer>
          </div>
          <Button
            className="footer_buttons"
            // variant="contained"
            onClick={handleFotterButton}
          >
            <div className="footer_sub">
              {footerbutton ? (
                <img
                  src={Popup_CloseArrow}
                  alt="logo"
                  // style={{
                  //   position: "relative",
                  //   top: "-10px",
                  //   right: "-10px",
                  //   width: "16px",
                  //   height: "16px",
                  // }}
                />
              ) : (
                <img
                  src={Popup_OpenArrow}
                  alt="logo"
                  // style={{
                  //   position: "relative",
                  //   top: "-10px",
                  //   right: "-10px",
                  //   width: "16px",
                  //   height: "16px",
                  // }}
                />
              )}
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

FooterButtons.propTypes = {
  window: PropTypes.func,
};

export default FooterButtons;
