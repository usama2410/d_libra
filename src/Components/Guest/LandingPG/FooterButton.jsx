import React from "react";
import { Button } from "@material-ui/core";
import sharepic from "../../../assests/sharepic.png";
import Rating from "../../../assests/Rating.png";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import Arrow2 from "../../../assests/Arrow2.png";
import Arrow3 from "../../../assests/Arrow3.png";
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

import telegram from "../../../assests/telegram.png";
import gmail from "../../../assests/gmail.png";
import whatsapp from "../../../assests/whatsapp.png";
import facebook from "../../../assests/facebook.png";
import messanger from "../../../assests/messanger.png";

import MyLibrary from "../../../assests/SVG_Files/MyLibrary.svg";

import Popup_Rating_off from "../../../assests/SVG_Files/New folder/icons/Popup_Rating_off.svg";
import Popup_My_library_off from "../../../assests/SVG_Files/New folder/icons/Popup_My_library_off.svg";
import Popup_History_off from "../../../assests/SVG_Files/New folder/icons/Popup_History_off.svg";
import Popup_Rating from "../../../assests/SVG_Files/New folder/icons/Popup_Rating.svg";
import Popup_Share from "../../../assests/SVG_Files/New folder/icons/Popup_Share.svg";

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
        <div
          className="footer_buttons_container"
          style={{ marginLeft: "30px" }}
        >
          <img
            src={Popup_History_off}
            // onClick={toggleDrawer(true)}
            alt=""
            style={{ cursor: "pointer" }}
            width="50px"
            height="50px"
          />

          <img
            src={Popup_My_library_off}
            // onClick={toggleDrawer(true)}
            alt=""
            style={{ cursor: "pointer" }}
            width="50px"
            height="50px"
          />

          <img
            src={Popup_Rating_off}
            // onClick={toggleDrawer(true)}
            alt=""
            style={{ cursor: "pointer" }}
            width="50px"
            height="50px"
          />
          <img
            src={Popup_Share}
            onClick={toggleDrawer(true)}
            alt=""
            style={{ cursor: "pointer" }}
            width="50px"
            height="50px"
          />
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
              <img
                src={Popup_History_off}
                // onClick={toggleDrawer(true)}
                alt=""
                style={{ cursor: "pointer" }}
                width="50px"
                height="50px"
              />

              <img
                src={Popup_My_library_off}
                // onClick={toggleDrawer(true)}
                alt=""
                style={{ cursor: "pointer" }}
                width="50px"
                height="50px"
              />

              <img
                src={Popup_Rating_off}
                // onClick={toggleDrawer(true)}
                alt=""
                style={{ cursor: "pointer" }}
                width="50px"
                height="50px"
              />
              <img
                src={Popup_Share}
                onClick={toggleDrawer(true)}
                alt=""
                style={{ cursor: "pointer" }}
                width="50px"
                height="50px"
              />
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
              <div
                style={{
                  borderRadius: "100%",
                  width: "473px",
                  height: "304px",
                  background: "none",
                  position: "fixed",
                  bottom: "-140px",
                }}
              >
                <StyledBox
                  sx={{
                    px: 1,
                    pb: 24,
                    height: "100%",
                    overflow: "auto",
                  }}
                  style={{
                    paddingTop: "10px",
                    background: "#363636",
                    borderRadius: mobileView ? "90px" : "100%",
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
                            src={messanger}
                            alt=""
                            style={{ paddingLeft: "0px" }}
                          />
                          <img
                            src={whatsapp}
                            alt=""
                            style={{ paddingLeft: "15px" }}
                          />
                          <img
                            src={facebook}
                            alt=""
                            style={{ paddingLeft: "15px" }}
                          />
                          <img
                            src={gmail}
                            alt=""
                            style={{ paddingLeft: "15px" }}
                          />
                          <img
                            src={telegram}
                            alt=""
                            style={{ paddingLeft: "15px" }}
                          />
                        </>
                      ) : (
                        <>
                          <img
                            src={messanger}
                            alt=""
                            style={{
                              position: "relative",
                              bottom: "-90px",
                              left: "-45px",
                            }}
                          />
                          <img
                            src={whatsapp}
                            alt=""
                            style={{
                              position: "relative",
                              bottom: "-40px",
                              left: "-22px",
                            }}
                          />
                          <img
                            src={facebook}
                            alt=""
                            style={{
                              position: "relative",
                              bottom: "-26px",
                              left: "8px",
                            }}
                          />
                          <img
                            src={gmail}
                            alt=""
                            style={{
                              position: "relative",
                              bottom: "-40px",
                              left: "40px",
                            }}
                          />
                          <img
                            src={telegram}
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
                      variant="h6"
                      style={{
                        color: "white",
                        position: "absolute",
                        bottom: "150px",
                      }}
                      className="sharingthispagetext"
                    >
                      {" "}
                      Share this Page
                    </Typography>
                  </div>
                </StyledBox>
              </div>
            </SwipeableDrawer>
          </div>
          <Button
            className="footer_buttons"
            variant="contained"
            onClick={handleFotterButton}
          >
            <div className="footer_sub">
              {footerbutton ? (
                <img
                  src={Arrow3}
                  alt="logo"
                  style={{
                    position: "relative",
                    top: "-10px",
                    right: "-10px",
                    width: "16px",
                    height: "16px",
                  }}
                />
              ) : (
                <img
                  src={Arrow2}
                  alt="logo"
                  style={{
                    position: "relative",
                    top: "-10px",
                    right: "-10px",
                    width: "16px",
                    height: "16px",
                  }}
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
