import React, { useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./EditCourseStructure.css";
import Vectortag from "../../assests/VectorTag.png";
import { ArrowBack } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import UserDetailPageData from "../User/DetailPageUser/UserDetailPageData";
import Next from "../../assests/SVG_Files/New folder/icons/Next.svg";
import Next_dark from "../../assests/SVG_Files/New folder/icons/Next_dark.svg";
import Previous from "../../assests/SVG_Files/New folder/icons/Previous.svg";
import Previous_dark from "../../assests/SVG_Files/New folder/icons/Previous_dark.svg";
import { getPostByID } from "../../Redux/Actions/Editor/post.action";

const DetailPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);

  const [details, setDetails] = React.useState([]);
  const [startdata, setStartData] = React.useState(0);
  const [enddata, setEndData] = React.useState(1);

  // console.log(details);

  // console.log(params);

  const handleBack = () => {
    navigate("/mycontents");
  };

  useEffect(() => {
    const postById = async () => {
      const response = await dispatch(
        getPostByID(params.id, params.role, params.categoryid, token)
      );
      setDetails(response);
    };
    postById();
  }, [params]);

  const handleNextMark = () => {
    navigate(
      `/detailpage/${params.id}/${params.role}/categoryid=${details.nextcategory}`
    );
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
        <span className="header_text">{details?.post?.categories__name}</span>
      </div>

      <div>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div className="detailpagesubcontainertwo">
              <img
                src={`https://libra.pythonanywhere.com/media/${details?.post?.images}`}
                alt=""
                className="detail_page_image"
              />
            </div>

            <div className="buttons_container_detail_page_two">
              <div className="deleteeditcontainer">
                <button
                  className="detail_delete_button"
                  onClick={() =>
                    navigate(
                      `/deletecontent/${params.id}/${params.role}/${params.categoryid}`
                    )
                  }
                >
                  Delete
                </button>
                <button
                  className="detail_edit_button"
                  onClick={() =>
                    navigate(
                      `/editcontentmain/${params.id}/${params.role}/${params.categoryid}`
                    )
                  }
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
                  {details?.post?.meta_description !== "" ? (
                    details?.post?.meta_description
                  ) : (
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      No description
                    </div>
                  )}
                  {/* Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
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
                  <br /> */}
                </span>
              </div>
              <div className="noscrollable">
                {/* <span>
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
                </span> */}
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

              <button className="detail_tag_button">
                {details?.post?.tags}
              </button>
              {/* <button className="detail_tag_button">GitHub</button>
              <button className="detail_tag_button">DevOps</button> */}
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
                // disabled={enddata >= userdata.length ? true : false}
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
                // disabled={enddata >= userdata.length ? true : false}
              >
                <img
                  src={Next_dark}
                  alt=""
                  style={{ marginleft: "15px" }}
                  className="userdetailfootericons userdetailfootericonsright"
                  // onClick={() => {
                  //   setStartData(startdata + 1);
                  //   setEndData(enddata + 1);
                  // }}
                  onClick={handleNextMark}
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
