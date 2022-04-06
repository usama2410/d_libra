import React from "react";
import { Grid, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import image6 from "../../assests/image6.png";
import "./EditCourseStructure.css";
import Vectortag from "../../assests/VectorTag.png";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import Polygon4 from "../../assests/Polygon4.png";
import Polygon5 from "../../assests/Polygon5.png";
import { useSelector } from "react-redux";
import NextButton from "../../assests/NextButton.png";
import PrevButton from "../../assests/PrevButton.png";
import NextDarkButton from "../../assests/NextDarkButton.png";
import PrevLightButton from "../../assests/PrevLightButton.png";
import UserDetailPageData from "../User/DetailPageUser/UserDetailPageData";


import Next from '../../assests/SVG_Files/New folder/icons/Next.svg'
import Next_dark from '../../assests/SVG_Files/New folder/icons/Next_dark.svg'
import Previous from '../../assests/SVG_Files/New folder/icons/Previous.svg'
import Previous_dark from '../../assests/SVG_Files/New folder/icons/Previous_dark.svg'

const DetailPage = () => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.state);
  const [userdata, setUserData] = React.useState(UserDetailPageData);
  const [startdata, setStartData] = React.useState(0);
  const [enddata, setEndData] = React.useState(1);
  const [pinstate, setPinState] = React.useState(false);
  const [transform, setTransform] = React.useState(false);

  return (
    <>
      <div className="detailpage_root_container">
        <button
          onClick={() => navigate("/")}
          className="back_button"
          style={{ color: "white" }}
        >
          <ArrowBackIcon style={{ fontSize: "18px" }} />{" "}
          <span style={{ paddingLeft: "10px", fontSize: "13px" }}>BACK</span>
        </button>
        {userdata.slice(startdata, enddata).map((item) => (
            <span className="header_text" style={{ marginTop: "-5px" }}>
              {item.text}
            </span>
          ))}
      </div>

      <div className="detailpagesubcontainer">
        <Grid container>
          <Grid item lg={4} md={6} sm={12} xs={12}>
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
                   
              <img src={item.image} alt="" className="detail_page_image" />
           
                </div>
              ))}


         
            <div className="buttons_container_detail_page">
              <div style={{ display: "flex" }}>
                <button
                  className="detail_delete_button"
                  onClick={() => navigate("/deletecontent")}
                 
                >
                  Delete
                </button>
                <button
                  className="detail_edit_button"
                  onClick={() => navigate("/editcontentmain")}
                  
                >
                  Edit
                </button>
              </div>
              <div className="tags_wrapper_one">
                <span className="detail_tag_text"> Tag: </span>
                <button className="detail_tag_button">Git</button>
                <button className="detail_tag_button">GitHub</button>
                <button className="detail_tag_button">DevOps</button>
                <img src={Vectortag} alt="" style={{ paddingLeft: "3px" }} />
              </div>
            </div>
          </Grid>

          <Grid item lg={8} md={6} sm={12} xs={12}>
            <div className="detail_page_content">
              <span>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet.Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem <br />
                sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                dolor sit amet. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                quisquam est, qui dolorem ipsum quia dolor sit amet.Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet.Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                aut odit aut fugit, sed quia
                <br /> consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                dolor sit amet. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                quisquam est, qui dolorem ipsum quia dolor sit amet.Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam
                <br /> est, qui dolorem ipsum quia dolor sit amet.Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut
                <br /> odit aut fugit, sed quia consequuntur magni dolores eos
                qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                qui dolorem ipsum quia dolor sit amet.Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
              </span>
            </div>
            <div className="tags_wrapper_two">
              <span className="detail_tag_text"> Tag: </span>
              <button className="detail_tag_button">Git</button>
              <button className="detail_tag_button">GitHub</button>
              <button className="detail_tag_button">DevOps</button>
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
            height: "70px",
            flexDirection: "column",
          }}
        >
          <div style={{ marginTop: "-8px" }}>
            <Button  style={{marginLeft: "16px"}} disabled={startdata === 0 ? true : false}>
              <img
                src={Previous}
                alt=""
                width="50px"
                height="50px"
                onClick={() => {
                  setStartData(startdata - 1);
                  setEndData(enddata - 1);
                }}
              />
            </Button>
            <Button  style={{marginLeft: "-16px"}} disabled={enddata >= userdata.length ? true : false}>
              <img
                src={Next}
                alt=""
                width="50px"
                height="50px"
                onClick={() => {
                  {
                    setStartData(startdata + 1);
                    setEndData(enddata + 1);
                  }
                }}
              />
            </Button>
          </div>
          <span style={{ fontSize: "12px" }}>
            © D-Libra All Rights Reserved
          </span>
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
            height: "70px",
            flexDirection: "column",
            background: "#111111",
          }}
        >
          <div style={{ marginTop: "-8px" }}>
            <Button style={{marginLeft: "16px"}} disabled={startdata === 0 ? true : false}>
              <img
                src={Previous_dark}
                alt=""
                style={{ width: "50px", height: "50px", cursro: "pointer" }}
                onClick={() => {
                  setStartData(startdata - 1);
                  setEndData(enddata - 1);
                }}
              />
            </Button>

            <Button style={{marginLeft: "-16px"}}disabled={enddata >= userdata.length ? true : false}>
              <img
                src={Next_dark}
                alt=""
                style={{ width: "50px", height: "50px", cursro: "pointer" }}
                onClick={() => {
                  setStartData(startdata + 1);
                  setEndData(enddata + 1);
                }}
              />
            </Button>
          </div>
          <span style={{ fontSize: "12px" }}>
            © D-Libra All Rights Reserved
          </span>
        </div>
      )}
    </>
  );
};

export default DetailPage;
