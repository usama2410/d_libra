import React from "react";
import { Grid, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import "./EditCourseStructure.css";
import Vectortag from "../../assests/VectorTag.png";
import { ArrowBack } from "@mui/icons-material";
import { useSelector } from "react-redux";
import UserDetailPageData from "../User/DetailPageUser/UserDetailPageData";
import Next from "../../assests/SVG_Files/New folder/icons/Next.svg";
import Next_dark from "../../assests/SVG_Files/New folder/icons/Next_dark.svg";
import Previous from "../../assests/SVG_Files/New folder/icons/Previous.svg";
import Previous_dark from "../../assests/SVG_Files/New folder/icons/Previous_dark.svg";

const DetailPage = () => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.state);
  const [userdata, setUserData] = React.useState(UserDetailPageData);
  const [startdata, setStartData] = React.useState(0);
  const [enddata, setEndData] = React.useState(1);

  const handleBack = () => {
    navigate("/mycontents");
  };

  return (
    <>
      <div className="detailpage_root_container ">
        <div className="backbutton_disable">
          <button
            onClick={handleBack}
            className="back_button"
            style={{ color: "#FFFFFF " }}
          >
            <ArrowBack className="backbutton_icon" />{" "}
            <span className="backbutton_text">Back</span>
          </button>
        </div>
        {userdata.slice(startdata, enddata).map((item) => (
          <span className="header_text">{item.text}</span>
        ))}
      </div>

      <div>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            {userdata.slice(startdata, enddata).map((item) => (
              <div className="detailpagesubcontainertwo">
                <img src={item.image} alt="" className="detail_page_image" />
              </div>
            ))}

            <div className="buttons_container_detail_page_two">
              <div className="deleteeditcontainer">
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
                <span
                  className="detail_tag_text"
                  style={{ color: theme ? " #363636" : " #C8C8C8" }}
                >
                  {" "}
                  Tag:{" "}
                </span>
                <button className="detail_tag_button">Git</button>
                <button className="detail_tag_button">GitHub</button>
                <button className="detail_tag_button">DevOps</button>
                <img
                  src={Vectortag}
                  alt=""
                  className="detail_tag_text_two"
                  style={{ paddingLeft: "24px" }}
                />
              </div>
            </div>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div className="detail_page_content">
              <div className="scrollable">
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
              </div>
              <div className="noscrollable">
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
              </div>
            </div>
            <div className="tags_wrapper_two">
              <span
                className="detail_tag_text"
                style={{ color: theme ? " #363636" : " #C8C8C8" }}
              >
                {" "}
                Tag:{" "}
              </span>

              <button className="detail_tag_button">Git</button>
              <button className="detail_tag_button">GitHub</button>
              <button className="detail_tag_button">DevOps</button>
            </div>
            <div className="detailpagesub">
              <button
                onClick={handleBack}
                className="back_button"
                style={{ color: `${theme ? " #363636" : " #FFFFFF"}` }}
              >
                <ArrowBack className="backbutton_icon" />{" "}
                <span className="backbutton_text">Back</span>
              </button>
            </div>
          </Grid>
        </Grid>
      </div>

      {theme ? (
        <div className="detailpagebuttoncontainer">
          <div className="detailpagebuttoncontainertwo">
            <div className="footerbuttoncontainer">
              <Button
                style={{ marginLeft: "16px" }}
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
                  style={{ marginleft: "15px" }}
                  className="userdetailfootericons userdetailfootericonsright"
                  onClick={() => {
                    setStartData(startdata + 1);
                    setEndData(enddata + 1);
                  }}
                />
              </Button>
            </div>
            <span className="userdetailpagefootertexttwo">
              © D-Libra All Rights Reserved
            </span>
          </div>
        </div>
      ) : (
        <div className="detailpagebuttoncontainedark">
          <div className="detailpagebuttoncontainerdarksub">
            <div className="footerbuttoncontainer">
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
                  style={{ marginleft: "15px" }}
                  className="userdetailfootericons userdetailfootericonsright"
                  onClick={() => {
                    setStartData(startdata + 1);
                    setEndData(enddata + 1);
                  }}
                />
              </Button>
            </div>
            <span className="userdetailpagefootertexttwo">
              © D-Libra All Rights Reserved
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailPage;
