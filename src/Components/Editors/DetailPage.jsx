import React, { useState, useEffect } from "react";
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
import {
  addContentBookmark,
  showAllBoomark,
} from "../../Redux/Actions/bookmark.action";
import FooterButtons from "../User/FooterButtons";

const DetailPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { state } = useLocation();
  const location = useLocation();
  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);

  const [details, setDetails] = React.useState([]);
  const [tagslength, setTagsLength] = React.useState(true);
  const [startdata, setStartData] = React.useState(0);
  const [enddata, setEndData] = React.useState(1);

  let [selected, setSelected] = React.useState(0);
  const [disable, setDisable] = React.useState(false);
  const [disablePrevious, setDisablePrevious] = React.useState(false);
  const [bookmark, setBookmark] = React.useState();
  const [showAllBookmark, setShowAllBookmark] = useState([]);

  console.log("showAllBookmark", showAllBookmark);

  const handleBack = () => {
    navigate(state?.path, {
      path: location.pathname,
      search: state?.search,
      state: state?.path?.includes("tagpage")
        ? {
            search: state?.search,
            path: location.pathname,
            previous: state?.previous,
          }
        : state?.path,
      previous: state?.previous,
      search: state?.search,
    });
  };

  console.log(state);
  console.log(location);

  // const handleBookMark = () => {
  //   if (details?.bookmark?.PriorityType === undefined) {
  //     return Bookmark_grey;
  //   } else if (details?.bookmark === "null") {
  //     return Bookmark_grey;
  //   } else if (details?.bookmark?.PriorityType === "highpriority") {
  //     return Bookmark_red;
  //   } else if (details?.bookmark?.PriorityType === "reviewlist") {
  //     return Bookmark_green;
  //   } else if (details?.bookmark?.PriorityType === "futureread") {
  //     return Bookmark_red;
  //   } else if (handleSetBook[0].colorcode === "#FFAA1D") {
  //     return Bookmark_yellow;
  //   } else if (handleSetBook[1].colorcode === "#C8C8C8") {
  //     return Bookmark_grey;
  //   } else {
  //     return Bookmark_grey;
  //   }
  // };

  const handleBookMark = async () => {
    // setCount(count + 1);
    // if (count === 0) {
    //   setPriority("highpriority");
    // } else if (count === 1) {
    //   setPriority("reviewlist");
    // } else if (count === 2) {
    //   setPriority("futureread");
    // } else if (count === 3) {
    //   setPriority(showAllBookmark[0]?.name);
    // } else if (count === 4) {
    //   setPriority(showAllBookmark[1]?.name);
    //   setCount(0);
    // }

    // const result = await dispatch(
    //   setBookMarkPriority(role, params.id, priority, token)
    // );
    // console.log("result", result);

    if (token) {
      const response = await dispatch(
        addContentBookmark(params.id, role, token)
      );
      console.log("response", response);
      setBookmark(response);
    } else {
      Swal.fire({
        title: "Unauthenticated",
        text: "Please login to bookmark",
        iconColor: "red",
        icon: "error",
      });
    }
  };

  const handleShowAllBookmark = async () => {
    const response = await dispatch(showAllBoomark(role, token));
    // console.log(response);
    setShowAllBookmark(response?.slice(0, 2));
  };

  useEffect(() => {
    const postById = async () => {
      const response = await dispatch(
        getPostByID(params.id, params.role, params.categoryid, token)
      );
      setDetails(response);
    };

    postById();
    handleShowAllBookmark();
  }, [params, details?.bookmark?.PriorityType, bookmark]);

  useEffect(() => {
    details?.post?.tags
      ?.split(",")
      .map((tags, i) => (i <= 2 ? setTagsLength(true) : setTagsLength(false)));
  }, [details]);

  const handleNextMark = () => {
    let previousItem = details?.all?.filter((item, index) => {
      return item.id !== Number(params.id?.split("=")[1]);
    });
    selected < previousItem.length && setSelected(selected + 1);
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
    selected > 0 && setSelected(selected - 1);
    let previous = Math.abs(previousItem?.length - 1 - selected);
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
    setBookmark(response);
    !token &&
      Swal.fire({
        title: "Unauthenticated",
        text: "Please login to bookmark",
        iconColor: "red",
        icon: "error",
      });
  };

  const handleTag = (tag) => {
    // console.log(tag.trim());
    navigate(`/tagpage/${tag.replace(/\s+/g, "-")}`, {
      state: {
        search: tag.trim(),
        path: `${location.pathname}${location.search}`,
        previous: state?.path,
      },
    });
  };

  return (
    <>
      <div className="detailpage_root_container ">
        {role === "editor" && (
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
        )}
        <span
          className={
            role === "editor" ? "header_text" : "header_text_NormalUser"
          }
        >
          {details?.post?.categories__name}
        </span>
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
                <div className="deleteeditcontainer">
                  {role === "editor" && (
                    <>
                      <div className="subcontainerdelete">
                        <button
                          className="detail_delete_button"
                          onClick={() =>
                            navigate(
                              `/deletecontent/${params.id}/${params.role}/${params.categoryid}`,
                              { state: { path: state?.path } }
                            )
                          }
                        >
                          Delete
                        </button>
                        <button
                          className="detail_edit_button"
                          onClick={() =>
                            navigate(
                              `/editcontentmain/${params.id}/${params.role}/${params.categoryid}`,
                              { state: state?.path }
                            )
                          }
                        >
                          Edit
                        </button>
                      </div>

                      <div style={{ display: "flex" }}>
                        {/* {console.log("Ahsan length", tagslength)} */}
                        {tagslength && (
                          <div className="tags_wrapper_three">
                            {details?.post?.tags !== "" ? (
                              <>
                                <span
                                  className="detail_tag_text"
                                  style={{
                                    color: theme ? " #363636" : " #C8C8C8",
                                  }}
                                >
                                  Tag:
                                </span>
                                {details?.post?.tags?.split(",")?.map((tag) => (
                                  <button
                                    className="detail_tag_button"
                                    onClick={() => handleTag(tag)}
                                  >
                                    {tag}
                                  </button>
                                ))}
                              </>
                            ) : null}
                          </div>
                        )}

                        {token ? (
                          <img
                            src={
                              details?.bookmark?.PriorityType === "highpriority"
                                ? Bookmark_blue
                                : details?.bookmark?.PriorityType ===
                                  "reviewlist"
                                ? Bookmark_green
                                : details?.bookmark?.PriorityType ===
                                  "futureread"
                                ? Bookmark_red
                                : token &&
                                  details?.bookmark?.PriorityType ===
                                    showAllBookmark[0]?.name
                                ? Bookmark_yellow
                                : token &&
                                  details?.bookmark?.PriorityType ===
                                    showAllBookmark[1]?.name
                                ? Bookmark_grey
                                : details?.bookmark === "null"
                                ? Bookmark_grey
                                : Bookmark_grey
                            }
                            alt=""
                            className="detail_tag_text_two"
                            style={{ paddingLeft: "24px", cursor: "pointer" }}
                            onClick={hanldeBookMarkPriority}
                          />
                        ) : (
                          <img
                            src={Bookmark_grey}
                            alt=""
                            className="detail_tag_text_two"
                            style={{ paddingLeft: "24px", cursor: "pointer"}}
                            onClick={hanldeBookMarkPriority}
                          />
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {(role === "normaluser" || role === null) && (
                <>
                  <div className="normaluser_container">
                    <div style={{ display: "flex" }}>
                      <span
                        className="detail_tag_text"
                        style={{ color: theme ? " #363636" : " #C8C8C8" }}
                      >
                        Tag:
                      </span>
                      {details?.post?.tags?.split(",")?.map((tag) => (
                        <button
                          className="detail_tag_button"
                          onClick={() => handleTag(tag)}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                    {token ? (
                      <img
                        src={
                          details?.bookmark?.PriorityType === "highpriority"
                            ? Bookmark_blue
                            : details?.bookmark?.PriorityType === "reviewlist"
                            ? Bookmark_green
                            : details?.bookmark?.PriorityType === "futureread"
                            ? Bookmark_red
                            : details?.bookmark?.PriorityType ===
                              showAllBookmark[0]?.name
                            ? Bookmark_yellow
                            : details?.bookmark?.PriorityType ===
                              showAllBookmark[1]?.name
                            ? Bookmark_grey
                            : details?.bookmark === "null"
                            ? Bookmark_grey
                            : Bookmark_grey
                        }
                        alt=""
                        className="detail_tag_text_two"
                        style={{ paddingLeft: "24px", cursor: "pointer" }}
                        onClick={hanldeBookMarkPriority}
                      />
                    ) : (
                      <img
                        src={Bookmark_grey}
                        alt=""
                        className="detail_tag_text_two"
                        style={{ paddingLeft: "24px", cursor: "pointer" }}
                        onClick={hanldeBookMarkPriority}
                      />
                    )}
                  </div>
                </>
              )}
              {role === "editor" && !tagslength && (
                <div className="tags_wrapper_one">
                  {details?.post?.tags !== "" ? (
                    <>
                      <span
                        className="detail_tag_text"
                        style={{ color: theme ? " #363636" : " #C8C8C8" }}
                      >
                        Tag:
                      </span>
                      {details?.post?.tags?.split(",")?.map((tag) => (
                        <button
                          className="detail_tag_button"
                          onClick={() => handleTag(tag)}
                        >
                          {tag}
                        </button>
                      ))}
                    
                    </>
                  ) :  null}
                </div>
              )}
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className="detail_page_content">
                <div className="scrollable">
                  <span style={{ lineHeight: "35px" }}>
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
              </div>
              <div className="tags_wrapper_two">
                {details?.post?.tags !== "" ? (
                  <>
                  <div style={{display: 'flex'}}>

                    <span
                      className="detail_tag_text"
                      style={{ color: theme ? " #363636" : " #C8C8C8" }}
                    >
                      Tag:
                    </span>
                    {details?.post?.tags?.split(",")?.map((tag) => (
                      <button
                        className="detail_tag_button"
                        onClick={() => handleTag(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                  {
                    role !== "editor" && 
                    <img
                        src={Bookmark_grey}
                        alt=""
                        className="detail_tag_text_two"
                        style={{ paddingLeft: "24px", cursor: "pointer", marginRight: "5px"}}
                        onClick={hanldeBookMarkPriority}
                      />
                  }
                  </>
                ) : null}
              </div>
              <div className="noscrollable">
                  <span style={{ lineHeight: "35px" }}>
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
              <Button style={{ marginLeft: "-16px" }}>
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
      {role === "normaluser" && <FooterButtons />}
    </>
  );
};

export default DetailPage;
