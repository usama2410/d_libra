import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FooterButtons from "../FooterButtons";
import Bookmark_gray from "../../../assests/SVG_Files/New folder/Bookmark_gray.svg";
import UserDetailPageData from "./UserDetailPageData";
import Pin_off from "../../../assests/SVG_Files/New folder/icons/Pin_off.svg";
import Pin_on from "../../../assests/SVG_Files/New folder/icons/Pin_on.svg";
import Next from "../../../assests/SVG_Files/New folder/icons/Next.svg";
import Next_dark from "../../../assests/SVG_Files/New folder/icons/Next_dark.svg";
import Previous from "../../../assests/SVG_Files/New folder/icons/Previous.svg";
import Previous_dark from "../../../assests/SVG_Files/New folder/icons/Previous_dark.svg";
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
          // style={{ paddingTop: "24px" }}
        >
          {userdata.slice(startdata, enddata).map((item) => (
            <span className="header_texttwo" >
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
                  />
                </div>
              ))}
              <div style={{ position: "relative" }}>
                <div className={pinstate ? "pincontainertwo" : "pincontainer"}>
                  <button
                    style={{
                      marginRight: `${pinstate ? "" : "15px"}`,
                      background: "none",
                      border: "none",
                    }}
                  >
                    <img
                      src={Bookmark_gray}
                      alt=""
                      style={{ width: "18px", height: "18px" }}
                    />
                  </button>
                  <button
                    style={{ background: "none", border: "none" }}
                    onClick={handlePinState}
                  >
                    <img
                      style={{ width: "18px", height: "18px" }}
                      src={pinstate ? Pin_on : Pin_off}
                      alt=""
                    />
                  </button>
                </div>
              </div>

              <div className="buttons_container_detail_page">
                <div className="tags_wrapper_one">
                  <span className="detail_tag_text"> Tag: </span>
                  <button className="detail_tag_button">Git</button>
                  <button className="detail_tag_button">GitHub</button>
                  <button className="detail_tag_button">DevOps</button>
                  <img
                    src={Bookmark_gray}
                    alt=""
                    style={{
                      width: "15px",
                      height: "18px",
                      marginLeft: "24px",
                    }}
                  />
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