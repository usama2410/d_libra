import React from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Popup_CloseArrow from "../../assests/SVG_Files/New folder/Popup_CloseArrow.svg";
import Popup_OpenArrow from "../../assests/SVG_Files/New folder/Popup_OpenArrow.svg";
import Rating from "../../assests/SVG_Files/Rating.svg";
import MyLibrary from "../../assests/SVG_Files/MyLibrary.svg";
import History from "../../assests/SVG_Files/History.svg";
import Share from "../../assests/SVG_Files/Share.svg";
import Icon_messages from "../../assests/SVG_Files/New folder/icons/Icon_messages.svg";
import Icon_facebook from "../../assests/SVG_Files/New folder/icons/Icon_facebook.svg";
import Icon_gmail from "../../assests/SVG_Files/New folder/icons/Icon_gmail.svg";
import Icon_telegram from "../../assests/SVG_Files/New folder/icons/Icon_telegram.svg";
import Icon_whatsapp from "../../assests/SVG_Files/New folder/icons/Icon_whatsapp.svg";

const drawerBleeding = 56;
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const FooterButtons = (props) => {
  const [footerbutton, setFooterButton] = React.useState(false);
  const handleFotterButton = () => {
    setFooterButton(true);
    if (footerbutton === true) {
      setFooterButton(false);
    }
  };

  const [open, setOpen] = React.useState(false);
  const [mobileView, setMobileView] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  React.useEffect(() => {
    if (window.innerWidth > 425) {
      setMobileView(false);
    } else {
      setMobileView(true);
    }
  }, []);

  return (
    <>
      <div>
        <div className="footer_buttons_container">
          <img src={History} alt="" className="footerbuttonimages" />
          <img src={MyLibrary} alt="" className="footerbuttonimages" />
          <img src={Rating} alt="" className="footerbuttonimages" />
          <img
            src={Share}
            onClick={toggleDrawer(true)}
            alt=""
            className="footerbuttonimages"
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
                src={History}
                alt=""
                style={{ cursor: "pointer" }}
                width="50px"
                height="50px"
              />
              <img
                src={MyLibrary}
                alt=""
                style={{ cursor: "pointer" }}
                width="50px"
                height="50px"
              />
              <img
                src={Rating}
                alt=""
                style={{ cursor: "pointer" }}
                width="50px"
                height="50px"
              />
              <img
                src={Share}
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
          <Button className="footer_buttons" onClick={handleFotterButton}>
            <div className="footer_sub">
              {footerbutton ? (
                <img src={Popup_CloseArrow} alt="logo" />
              ) : (
                <img src={Popup_OpenArrow} alt="logo" />
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
