import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./EditCourseStructure.css";
import { ArrowBack } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
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
import Green_Bookmark from "../../assests/SVG_Files/New folder/Green_Bookmark.svg";
import Swal from "sweetalert2";
import Pin_off from "../../assests/SVG_Files/New folder/icons/Pin_off.svg";
import Pin_on from "../../assests/SVG_Files/New folder/icons/Pin_on.svg";
import {
  addContentBookmark,
  showAllBoomark,
} from "../../Redux/Actions/bookmark.action";
import FooterButtons from "../User/FooterButtons";

import { pinState } from "../../Redux/Actions/auth.action";

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

  const [pinstate, setPinState] = useState(false);
  const [transform, setTransform] = React.useState(false);
  const handlePinState = async () => {
    setPinState(!pinstate);
    setTransform(!transform);
    await dispatch(pinState(!pinstate));
  };

  React.useEffect(async () => {
    await dispatch(pinState(pinstate));
  }, []);

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

  const handleShowAllBookmark = async () => {
    const response = await dispatch(showAllBoomark(role, token));
    setShowAllBookmark(response?.slice(0, 2));
  };

  useEffect(() => {
    const postById = async () => {
      const response = await dispatch(
        getPostByID(params.id, params.role, params.categoryid, token)
      );
      console.log(response);
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
    console.log("response", response);
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
      <div
        style={{ position: pinstate ? "fixed" : "", top: pinstate ? "0" : "" }}
      >
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
            {details?.post?.title !== undefined &&
              details?.post?.title?.charAt(0)?.toUpperCase() +
                details?.post?.title?.slice(1)}
          </span>
        </div>
        {details?.status ? (
          <div>
            <Grid container>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <div
                  className="detailpagesubcontainertwo"
                  style={{
                    transition: "transform .2s",
                    transform: transform && "scale(97%)",
                    padding: `${pinstate ? "0px 0px" : "5px 5px"}`,
                  }}
                >
                  <img
                    src={`${development}/media/${details?.post?.images}`}
                    alt=""
                    className={
                      pinstate ? "detail_page_image_two" : "detail_page_image"
                    }
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
                                  {details?.post?.tags
                                    ?.split(",")
                                    ?.map((tag) => (
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

                          {token ? ( // Bookmark For Editor
                            <img
                              src={
                                details?.bookmark === null
                                  ? Bookmark_grey
                                  : details?.bookmark?.PriorityType ===
                                    "highpriority"
                                  ? Bookmark_blue
                                  : details?.bookmark?.PriorityType ===
                                    "reviewlist"
                                  ? Bookmark_green
                                  : details?.bookmark?.PriorityType ===
                                    "futureread"
                                  ? Bookmark_red
                                  : details?.bookmark?.PriorityType ===
                                    showAllBookmark[0]?.name
                                  ? Bookmark_yellow
                                  : details?.bookmark?.PriorityType ===
                                    showAllBookmark[1]?.name
                                  ? Green_Bookmark
                                  : details?.bookmark === "null"
                                  ? Bookmark_grey
                                  : Bookmark_grey
                              }
                              alt=""
                              className="detail_tag_text_two"
                              style={{
                                paddingLeft: "42px",
                                cursor: "pointer",
                                height: "30px",
                                width: "58px",
                              }}
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
                  </div>
                </div>

                {role === "normaluser" || role === null ? (
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

                      {/*  Normal User Bookmark For PC */}
                      {token ? (
                        <img
                          src={
                            details?.bookmark === null
                              ? Bookmark_grey
                              : details?.bookmark?.PriorityType ===
                                "highpriority"
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
                              ? Green_Bookmark
                              : details?.bookmark === "null"
                              ? Bookmark_grey
                              : Bookmark_grey
                          }
                          alt=""
                          className="detail_tag_text_two"
                          style={{
                            paddingLeft: "24px",
                            cursor: "pointer",
                            height: "30px",
                            width: "58px",
                          }}
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
                ) : null}
                {role === "editor" && !tagslength ? (
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
                    ) : null}
                  </div>
                ) : null}
              </Grid>

              <Grid item lg={6} md={6} sm={12} xs={12}>
                <div
                  className="detail_page_content"
                  style={{ display: role === "normaluser" ? "none" : "block" }}
                >
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

                {/* Bookmark For Normaluser Mobile View */}

                {role !== "editor" && (
                  <>
                    <div style={{ position: "relative" }}>
                      <div
                        className={
                          pinstate ? "pincontainertwo" : "pincontainer"
                        }
                      >
                        <button
                          style={{
                            marginRight: `${pinstate ? "" : "15px"}`,
                            background: "none",
                            border: "none",
                          }}
                        >
                          {token ? (
                            <img
                              src={
                                details?.bookmark === null
                                  ? Bookmark_grey
                                  : details?.bookmark?.PriorityType ===
                                    "highpriority"
                                  ? Bookmark_blue
                                  : details?.bookmark?.PriorityType ===
                                    "reviewlist"
                                  ? Bookmark_green
                                  : details?.bookmark?.PriorityType ===
                                    "futureread"
                                  ? Bookmark_red
                                  : details?.bookmark?.PriorityType ===
                                    showAllBookmark[0]?.name
                                  ? Bookmark_yellow
                                  : details?.bookmark?.PriorityType ===
                                    showAllBookmark[1]?.name
                                  ? Green_Bookmark
                                  : details?.bookmark === "null"
                                  ? Bookmark_grey
                                  : Bookmark_grey
                              }
                              alt=""
                              className="userdetailpinimage"
                              style={{
                                paddingLeft: "24px",
                                cursor: "pointer",
                                height: "30px",
                                width: "58px",
                              }}
                              onClick={hanldeBookMarkPriority}
                            />
                          ) : (
                            <img
                              src={Bookmark_grey}
                              alt=""
                              className="userdetailpinimage"
                              style={{ paddingLeft: "24px", cursor: "pointer" }}
                              onClick={hanldeBookMarkPriority}
                            />
                          )}
                        </button>
                        <button
                          style={{ background: "none", border: "none" }}
                          onClick={handlePinState}
                        >
                          <img
                            className="userdetailpinimage"
                            style={{
                              marginRight: `${
                                pinstate
                                  ? role === "normaluser"
                                    ? "-40px"
                                    : "0px"
                                  : "0px"
                              }`,
                              marginTop: `${
                                pinstate
                                  ? role === "normaluser"
                                    ? "0px"
                                    : "-40px"
                                  : "0px"
                              }`,
                            }}
                            src={pinstate ? Pin_on : Pin_off}
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {/* Mobile View Excluding Bookmarks And Pin Icon For Both Normal User and Null User*/}

                {role === "normaluser" || role === null ? (
                  <div
                    className={
                      role === "normaluser"
                        ? "detail_page_content"
                        : "detail_page_content_fornull"
                    }
                    style={{
                      height: `${pinstate ? "50vh" : "100%"}`,
                      paddingLeft: "24px",
                      overflow: `${pinstate ? "scroll" : "visible"}`,
                    }}
                  >
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

                      <div className="tags_for_user_null">
                        {details?.post?.tags !== "" ? (
                          <>
                            <div style={{ display: "flex" }}>
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
                            </div>
                          </>
                        ) : null}
                      </div>
                    </span>
                  </div>
                ) : (
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
                )}

                {/* Tags For Editor Role */}

                <div className="tags_wrapper_two">
                  {details?.post?.tags !== "" ? (
                    <>
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
                    </>
                  ) : null}
                </div>

                {/* Footer Back Button  */}

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
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
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
                <Button
                  style={{ marginLeft: "16px" }}
                  disabled={disablePrevious}
                >
                  <img
                    src={Previous_dark}
                    alt=""
                    style={{ marginRight: "-15px" }}
                    className="userdetailfootericons userdetailfootericonsleft"
                    onClick={handlePreviousMark}
                  />
                </Button>

                <Button style={{ marginLeft: "-16px" }} disabled={disable}>
                  <img
                    src={Next_dark}
                    alt=""
                    style={{ marginleft: "15px" }}
                    className="userdetailfootericons userdetailfootericonsright"
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
      </div>
    </>
  );
};

export default DetailPage;
