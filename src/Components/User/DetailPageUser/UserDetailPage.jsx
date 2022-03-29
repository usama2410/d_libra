import React from "react";
import { Grid, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import image6 from "../../../assests/image6.png";
import Vectortag from "../../../assests/VectorTag.png";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import Polygon4 from "../../../assests/Polygon4.png";
import Polygon5 from "../../../assests/Polygon5.png";
import { useSelector } from "react-redux";
import NextButton from "../../../assests/NextButton.png";
import PrevButton from "../../../assests/PrevButton.png";
import FooterButtons from "../FooterButtons";

const UserDetailPage = () => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.state);
  return (
    <>
      <div className="detailpage_root_container">
        <button
          onClick={() => navigate("/")}
          className="back_button"
          style={{ color: `${theme ? "black" : "white"}` }}
        >
          <ArrowBackIcon style={{ fontSize: "18px" }} />{" "}
          <span style={{ paddingLeft: "10px", fontSize: "13px" }}>BACK</span>
        </button>
        <div className="header_text">
          <span>What is Git?</span>
        </div>
      </div>

      <div style={{ padding: "20px 20px" }}>
        <Grid container>
          <Grid item lg={5} md={6} sm={12} xs={12}>
            <div>
              <img src={image6} alt="" className="detail_page_image" />
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

          <Grid item lg={7} md={6} sm={12} xs={12}>
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
          }}
        >
          <img
            src={PrevButton}
            alt=""
            width="50px"
            height="50px"
            style={{ cursor: "pointer" }}
          />

          <img
            src={NextButton}
            alt=""
            width="50px"
            height="50px"
            style={{ cursor: "pointer" }}
          />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <IoMdArrowDropleftCircle fontSize="50px" />
          <IoMdArrowDroprightCircle fontSize="50px" />
        </div>
      )}
      <FooterButtons />
    </>
  );
};

export default UserDetailPage;
