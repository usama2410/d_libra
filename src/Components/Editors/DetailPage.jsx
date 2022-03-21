import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import image6 from "../../assests/image6.png";
import "./DetailPage.css";
import Vectortag from "../../assests/VectorTag.png";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";

const DetailPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="detailpage_root_container">
        <button
          onClick={() => navigate("/editcoursestructure")}
          className="back_button_detail_page"
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
              <div style={{ display: "flex" }}>
                <button className="detail_delete_button" onClick={() => navigate('/deletecontent')}>Delete</button>
                <button className="detail_edit_button">Edit</button>
              </div>
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
    </>
  );
};

export default DetailPage;
