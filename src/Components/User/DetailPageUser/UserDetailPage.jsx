import React, { useEffect, useState } from "react";
import { Grid, Button, Accordion } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import image6 from "../../../assests/image6.png";
import Vectortag from "../../../assests/VectorTag.png";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import NextDarkButton from "../../../assests/NextDarkButton.png";
import PrevLightButton from "../../../assests/PrevLightButton.png";
import { useSelector, useDispatch } from "react-redux";
import NextButton from "../../../assests/NextButton.png";
import PrevButton from "../../../assests/PrevButton.png";
import FooterButtons from "../FooterButtons";
import UserDetailPageData from "./UserDetailPageData";
import Pin from "../../../assests/Pin.png";
import PinBlue from "../../../assests/PinBlue.png";
import Accordian from "../../Guest/Accordian/Accordian";
import UnionClose from "../../../assests/UnionClose.png";

import Next from "../../../assests/SVG_Files/New folder/icons/Next.svg";
import Next_dark from "../../../assests/SVG_Files/New folder/icons/Next_dark.svg";
import Previous from "../../../assests/SVG_Files/New folder/icons/Previous.svg";
import Previous_dark from "../../../assests/SVG_Files/New folder/icons/Previous_dark.svg";

import FooterCopyright from "../../../Components/User/FooterCopyright";
import { pinState } from "../../../Redux/Actions/auth.action";

const UserDetailPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userdata, setUserData] = React.useState(UserDetailPageData);
  const [startdata, setStartData] = useState(0);
  const [enddata, setEndData] = useState(1);
  const theme = useSelector((state) => state.theme.state);
  const [pinstate, setPinState] = useState(false);
  const [transform, setTransform] = React.useState(false);
  // const accordion = useSelector((state) => state.accordion.state)

  const handlePinState = async () => {
    setPinState(!pinstate);
    setTransform(!transform);
    await dispatch(pinState(!pinstate));
  };

  const handle = () => {
    if (pinstate === true && theme === true) {
      return "linear-gradient(180deg, #F3F6FF 82.81%, rgba(243, 246, 255, 0) 100%)";
    } else if (pinstate === false && theme === true) {
      return "#EEEEEE";
    } else if (pinstate === true && theme === false) {
      return "linear-gradient(180deg, #363636 82.81%, rgba(54, 54, 54, 0) 100%)";
    } else if (pinstate === false && theme === false) {
      return " #111111";
    }
  };

  React.useEffect(async () => {
    await dispatch(pinState(pinstate));
  }, []);

  return (
    <>
      <div
        style={{ position: pinstate ? "fixed" : "", top: pinstate ? "0" : "" }}
      >
        <div
          className="detailpage_root_container"
          style={{ paddingTop: "35px" }}
        >
          {userdata.slice(startdata, enddata).map((item) => (
            <span className="header_text" style={{ marginTop: "-14px" }}>
              {item.text}
            </span>
          ))}
        </div>

        <div>
          <Grid container>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              style={{
                background: handle(),
              }}
            >
              {userdata.slice(startdata, enddata).map((item) => (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: " center",
                    transition: "transform .2s",
                    transform: transform && "scale(97%)",
                    padding: `${pinstate ? "0px 0px" : "5px 5px"}`,
                  }}
                >
                  <img
                    src={item.image}
                    alt=""
                    className={
                      pinstate ? "detail_page_image_two" : "detail_page_image"
                    }
                    // style={{
                    //   width: `${pinstate ? "50%" : "100%"}`,
                    //   height: `${pinstate ? "50%" : "100%"}`,
                    // }}
                  />
                </div>
              ))}
              <div
                className={pinstate ? "pincontainertwo" : "pincontainer"}
                // style={{ paddingRight: "10px" }}
              >
                {/* pincontainer */}
                <button
                  style={{
                    marginRight: `${pinstate ? "" : "15px"}`,
                    background: "none",
                    border: "none",
                  }}
                >
                  <img src={Vectortag} alt="" />
                </button>
                <button
                  style={{ background: "none", border: "none" }}
                  onClick={handlePinState}
                >
                  <img src={pinstate ? PinBlue : Pin} alt="" />
                </button>
              </div>

              <div className="buttons_container_detail_page">
                <div className="tags_wrapper_one">
                  <span className="detail_tag_text"> Tag: </span>
                  <button className="detail_tag_button">Git</button>
                  <button className="detail_tag_button">GitHub</button>
                  <button className="detail_tag_button">DevOps</button>
                  <img src={Vectortag} alt="" style={{ paddingLeft: "20px" }} />
                </div>
              </div>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div
                className="detail_page_content"
                style={{
                  height: `${pinstate ? "50vh" : "100%"}`,
                  overflow: `${pinstate ? "scroll" : "visible"}`,
                }}
              >
                <span>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet <br />
                  <br />
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet <br />
                  <br />
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet <br />
                  <br />
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet <br />
                  <br />
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet <br />
                  <br />
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet <br />
                  <br />
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet <br />
                  <br />
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet <br />
                  <br />
                </span>

                <div className="tags_wrapper_two">
                  <div
                    style={{
                      display: "flex",
                      paddingBottom: pinstate ? "15vh" : "",
                    }}
                  >
                    <span className="detail_tag_text"> Tag: </span>
                    <button className="detail_tag_button">Git</button>
                    <button className="detail_tag_button">GitHub</button>
                    <button className="detail_tag_button">DevOps</button>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        {theme ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              backgroundColor: "#F3F6FF",
              position: "fixed",
              bottom: "-1px",
              height: "64px",
              flexDirection: "column",
            }}
          >
            <div style={{ marginTop: "-8px" }}>
              <Button
                dstyle={{ marginLeft: "16px" }}
                disabled={startdata === 0 ? true : false}
              >
                <img
                  src={Previous}
                  alt=""
                  style={{ marginRight: "-15px" }}
                  className="userdetailfootericons userdetailfootericonsleft"
                  onClick={() => {
                    setStartData(startdata - 1);
                    setEndData(enddata - 1);
                  }}
                />
              </Button>
              <Button
                style={{ marginLeft: "-16px" }}
                disabled={enddata >= userdata.length ? true : false}
              >
                <img
                  src={Next}
                  alt=""
                  style={{ marginLeft: "-15px" }}
                  className="userdetailfootericons userdetailfootericonsright"
                  onClick={() => {
                    {
                      setStartData(startdata + 1);
                      setEndData(enddata + 1);
                    }
                  }}
                />
              </Button>
              <span className="userdetailpagefootertext">
                © D-Libra All Rights Reserved
              </span>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              position: "fixed",
              bottom: "-1px",
              height: "64px",
              background: "#111111",
              flexDirection: "column",
            }}
          >
            <div style={{ marginTop: "-8px" }}>
              <Button
                style={{ marginLeft: "16px" }}
                disabled={startdata === 0 ? true : false}
              >
                <img
                  src={Previous_dark}
                  alt=""
                  style={{ marginRight: "-15px" }}
                  className="userdetailfootericons userdetailfootericonsleft"
                  onClick={() => {
                    setStartData(startdata - 1);
                    setEndData(enddata - 1);
                  }}
                />
              </Button>

              <Button
                style={{ marginLeft: "-16px" }}
                disabled={enddata >= userdata.length ? true : false}
              >
                <img
                  src={Next_dark}
                  alt=""
                  className="userdetailfootericons userdetailfootericonsright"
                  onClick={() => {
                    setStartData(startdata + 1);
                    setEndData(enddata + 1);
                  }}
                />
              </Button>
              <span className="userdetailpagefootertext">
                © D-Libra All Rights Reserved
              </span>
            </div>
          </div>
        )}
      </div>
      <FooterButtons />
    </>
  );
};

export default UserDetailPage;
