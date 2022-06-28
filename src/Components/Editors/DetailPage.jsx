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
import { development } from "../../endpoints";
import parse from "html-react-parser";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Bookmark_blue from "../../assests/SVG_Files/New folder/Bookmark_blue.svg";
import Bookmark_yellow from "../../assests/SVG_Files/New folder/Bookmark_yellow.svg";
import Bookmark_red from "../../assests/SVG_Files/New folder/Bookmark_red.svg";
import Bookmark_grey from "../../assests/SVG_Files/New folder/Bookmark_gray.svg";
import Bookmark_green from "../../assests/SVG_Files/New folder/Bookmark_green.svg";
import Swal from "sweetalert2";
import { addContentBookmark } from "../../Redux/Actions/bookmark.action";

const DetailPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();

  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);

  const [details, setDetails] = React.useState([]);
  const [startdata, setStartData] = React.useState(0);
  const [enddata, setEndData] = React.useState(1);

  let [selected, setSelected] = React.useState(0);
  const [disable, setDisable] = React.useState(false);
  const [disablePrevious, setDisablePrevious] = React.useState(false);
  const [bookmark, setBookmark] = React.useState(Bookmark_blue);

  const handleBack = () => {
    navigate("/mycontents");
  };

  const handleBookMark = () => {
    if (details?.bookmark?.PriorityType === "personalcloud") {
      return Bookmark_blue;
    } else if (details?.bookmark?.PriorityType === undefined) {
      return Bookmark_grey;
    } else if (details?.bookmark?.PriorityType === "highpriority") {
      return Bookmark_red;
    } else if (details?.bookmark?.PriorityType === "reviewlist") {
      return Bookmark_green;
    } else if (details?.bookmark?.PriorityType === "futureread") {
      return Bookmark_red;
    } else if (details?.bookmark?.PriorityType === "Personal") {
      return Bookmark_yellow;
    } else if (details?.bookmark?.PriorityType === "Dayend") {
      return Bookmark_grey;
    }
  };

  useEffect(() => {
    const postById = async () => {
      const response = await dispatch(
        getPostByID(params.id, params.role, params.categoryid, token)
      );
      // console.log("response", response);

      setDetails(response);
    };
    postById();
    handleBookMark();
  }, [params, details?.bookmark?.PriorityType, bookmark]);

  const handleNextMark = () => {
    let previousItem = details?.all?.filter((item, index) => {
      return item.id !== Number(params.id?.split("=")[1]);
    });

    // console.log("Next", previousItem);

    selected < previousItem.length && setSelected(selected + 1);
    // console.log(previousItem[selected]);
    // console.log(previousItem[selected]);
    // if (selected === previousItem.length - 1) {
    //   setDisable(true);
    // }
    if (previousItem[selected] !== undefined) {
      navigate(
        `/detailpage/id=${previousItem[selected]?.id}/${params.role}/${params.categoryid}`
      );
    }
  };

  const handlePreviousMark = () => {
    let previousItem = details?.all?.filter((item, index) => {
      return item.id !== Number(params.id?.split("=")[1]);
    });
    // console.log("previousItem", previousItem);

    selected > 0 && setSelected(selected - 1);
    let previous = Math.abs(previousItem?.length - 1 - selected);
    // console.log("previous", previous);
    // console.log(previousItem[previous]);
    // if (previous === 0) {
    //   setDisablePrevious(true);
    // }
    if (previousItem[previous] !== undefined) {
      navigate(
        `/detailpage/id=${previousItem[previous]?.id}/${params.role}/${params.categoryid}`
      );
    }
  };

  const hanldeBookMarkPriority = async () => {
    const response = await dispatch(
      addContentBookmark(params?.id?.split("=")[1], role, token)
    );
    // console.log("response", response);
    setBookmark(response);
    !token &&
      Swal.fire({
        title: "Unauthenticated",
        text: "Please login to bookmark",
        iconColor: "red",
        icon: "error",
      });
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
      {details?.status ? (
        <div>
          <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className="detailpagesubcontainertwo">
                <img
                  src={`${development}/media/${details?.post?.images}`}
                  alt=""
                  className="detail_page_image"
                />
              </div>
              <div
                className={
                  role === "normaluser"
                    ? "buttons_container_detail_page_two_two"
                    : "buttons_container_detail_page_two"
                }
              >
                {role === "editor" && (
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
                )}
                <div className="tags_wrapper_one">
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
                  <img
                    src={handleBookMark()}
                    alt=""
                    className="detail_tag_text_two"
                    style={{ paddingLeft: "24px", cursor: "pointer" }}
                    onClick={hanldeBookMarkPriority}
                  />
                </div>
              </div>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className="detail_page_content">
                <div className="scrollable">
                  <span>
                    {details?.post?.content !== "" ? (
                      parse(`${details?.post?.content}`)
                    ) : (
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        No content
                      </div>
                    )}
                  </span>
                </div>
                {/* <div className="noscrollable">
                    
                  </div> */}
              </div>
              <div className="tags_wrapper_two">
                <span
                  className="detail_tag_text"
                  style={{ color: theme ? " #363636" : " #C8C8C8" }}
                >
                  {" "}
                  Tag:{" "}
                </span>
                {details?.post?.tags !== "" ? (
                  <button className="detail_tag_button">
                    {details?.post?.tags}
                  </button>
                ) : null}

                <img
                  src={handleBookMark()}
                  alt=""
                  className="detail_tag_text_two"
                  style={{ paddingLeft: "24px", cursor: "pointer" }}
                  onClick={hanldeBookMarkPriority}
                />
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
      ) : (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
        >
          <CircularProgress color="inherit" size={30} />
        </Box>
      )}

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
              <Button style={{ marginLeft: "16px" }} disabled={disablePrevious}>
                <img
                  src={Previous_dark}
                  alt=""
                  style={{ marginRight: "-15px" }}
                  className="userdetailfootericons userdetailfootericonsleft"
                  onClick={handlePreviousMark}
                />
              </Button>

              <Button
                style={{ marginLeft: "-16px" }}
                // disabled={enddata >= userdata.length ? true : false}
                disabled={disable}
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
