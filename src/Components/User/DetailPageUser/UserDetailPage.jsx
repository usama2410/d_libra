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
import { useSelector } from "react-redux";
import NextButton from "../../../assests/NextButton.png";
import PrevButton from "../../../assests/PrevButton.png";
import FooterButtons from "../FooterButtons";
import UserDetailPageData from "./UserDetailPageData";
import Pin from "../../../assests/Pin.png";
import PinBlue from "../../../assests/PinBlue.png";
import Accordian from "../../Guest/Accordian/Accordian";
import UnionClose from '../../../assests/UnionClose.png'

const UserDetailPage = () => {
  const navigate = useNavigate();
  const [userdata, setUserData] = React.useState(UserDetailPageData);
  const [startdata, setStartData] = useState(0);
  const [enddata, setEndData] = useState(1);
  const theme = useSelector((state) => state.theme.state);
  const [pinstate, setPinState] = useState(false);
  const [transform, setTransform] = React.useState(false);
  const accordion = useSelector((state) => state.accordion.state)
  

  const handlePinState = () => {
    setPinState(!pinstate);
    setTransform(!transform);
  };

  return (
    <>
      <div style={{ position: pinstate ? "fixed" : "" }}>
        <div
          className="detailpage_root_container"
          style={{ paddingTop: "35px" }}
        >
          {/* <button
          onClick={() => navigate("/")}
          className="back_button"
          style={{ color: `${theme ? "white" : "black"}` }}
        >
          <ArrowBackIcon style={{ fontSize: "18px" }} />{" "}
          <span style={{ paddingLeft: "10px", fontSize: "13px" }}>BACK</span>
        </button> */}
          {userdata.slice(startdata, enddata).map((item) => (
            <div className="header_text" style={{ color: "white" }}>
              <span>{item.text}</span>
            </div>
          ))}
{/* {
  accordion ? <div className="responsiveaccordian">
    <div style={{ background: '#212121', height: "30px", padding: "10px 20px"}}>
      <img  src={UnionClose} alt="" />
    </div>
  <Accordian />
  </div> : ''
} */}


        </div>

        <div>
          <Grid container>
            <Grid
              item
              lg={4}
              md={6}
              sm={12}
              xs={12}
              style={{
                background: `${
                  pinstate
                    ? "linear-gradient(180deg, #363636 82.81%, rgba(54, 54, 54, 0) 100%)"
                    : "none"
                }`,
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
                    transform: transform && "scale(95%)",
                    padding: `${pinstate ? "0px 0px" : "5px 5px"}`,
                  }}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="detail_page_image"
                    style={{
                      width: `${pinstate ? "90%" : "100%"}`,
                      height: `${pinstate ? "90%" : "100%"}`,
                    }}
                  />
                </div>
              ))}
              <div className="pincontainer" style={{ paddingRight: "10px" }}>
                <button
                  style={{
                    marginRight: "15px",
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

            <Grid item lg={8} md={6} sm={12} xs={12}>
              <div
                className="detail_page_content"
                style={{
                  marginTop: `${pinstate ? "-20px" : ""}`,
                  height: `${pinstate ? "180px" : "100%"}`,
                  overflow: `${pinstate ? "scroll" : "visible"}`,
                  // marginBottom: `${pinstate ? "-100px" : ""}`,
                }}
              >
                <span>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet.Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem{" "}
                  <br />
                  sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                  quia dolor sit amet. Nemo enim ipsam voluptatem quia voluptas
                  sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est, qui dolorem ipsum quia dolor sit amet.Nemo enim
                  ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                  fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet.Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia
                  <br /> consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                  quia dolor sit amet. Nemo enim ipsam voluptatem quia voluptas
                  sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est, qui dolorem ipsum quia dolor sit amet.Nemo enim
                  ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                  fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam
                  <br /> est, qui dolorem ipsum quia dolor sit amet.Nemo enim
                  ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                  fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut
                  <br /> odit aut fugit, sed quia consequuntur magni dolores eos
                  qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                  est, qui dolorem ipsum quia dolor sit amet.Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia
                </span>

                <div className="tags_wrapper_two">
                  <div style={{ display: "flex" }}>
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
              bottom: "0",
              height: "50px",
              // border: "1px solid black"
            }}
          >
            <Button disabled={startdata === 0 ? true : false}>
              <img
                src={PrevButton}
                alt=""
                width="50px"
                height="50px"
                // style={{ cursor: "pointer" }}
                onClick={() => {
                  setStartData(startdata - 1);
                  setEndData(enddata - 1);
                }}
              />
            </Button>
            <Button disabled={enddata >= userdata.length ? true : false}>
              <img
                src={NextButton}
                alt=""
                width="50px"
                height="50px"
                // style={{ cursor: "pointer" }}
                onClick={() => {
                  {
                    setStartData(startdata + 1);
                    setEndData(enddata + 1);
                  }
                }}
              />
            </Button>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              position: "fixed",
              bottom: "0",
              height: "45px",
              // borderTop: "1px solid white",
              background: "#111111",
            }}
          >
            <Button disabled={startdata === 0 ? true : false}>
              <img
                src={PrevLightButton}
                alt=""
                style={{ width: "50px", height: "50px", cursro: "pointer" }}
                onClick={() => {
                  setStartData(startdata - 1);
                  setEndData(enddata - 1);
                }}
              />
            </Button>

            <Button disabled={enddata >= userdata.length ? true : false}>
              <img
                src={NextDarkButton}
                alt=""
                style={{ width: "50px", height: "50px", cursro: "pointer" }}
                onClick={() => {
                  setStartData(startdata + 1);
                  setEndData(enddata + 1);
                }}
              />
            </Button>
          </div>
        )}
      </div>
      <FooterButtons />
    </>
  );
};

export default UserDetailPage;
