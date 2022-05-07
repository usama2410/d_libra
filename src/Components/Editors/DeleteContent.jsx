import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import "./DeleteContent.css";
import WhatIsGit_ from "../../assests/SVG_Files/Slides/WhatIsGit_.svg";
import {
  deletePost,
  getPostByID,
} from "../../Redux/Actions/Editor/post.action";

const DeleteContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);

  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [details, setDetails] = useState([]);

  console.log(params);

  const handleBack = () => {
    navigate(`/detailpage/${params.id}/${params.role}/${params.categoryid}`);
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

  // console.log(params)
  const handleDeleteContent = async () => {
    const response = await dispatch(deletePost(params.id, token));
    // console.log(response);
    setMessage(response?.message);
    setShowMessage(true);
    if (response?.message === "Delete successfully") {
      const timer = setTimeout(() => {
        navigate("/mycontents");
      }, 5000);

      return () => clearTimeout(timer);
    }
  };

  return (
    <>
      <button
        onClick={handleBack}
        className="back_button"
        style={{ color: `${theme ? " #363636" : "  #C8C8C8"}` }}
      >
        <ArrowBack className="backbutton_icon" />{" "}
        <span className="backbutton_text">Back</span>
      </button>
      <div className="deletecontentcontainer">
        <div className="delete_content_textone">
          <span>Are you really deleting the following content?</span>
        </div>
        <div className="delete_content_main_container">
          <div className="deletecontainer">
            <div
              className={
                theme ? "delete_content_texttwo_sub" : "delete_content_texttwo"
              }
            >
              <span>What is Git?</span>
            </div>
            <img
              style={{ cursor: "pointer" }}
              src={`https://libra.pythonanywhere.com/media/${details?.post?.images}`}
              alt=""
              className="deletecontentimage"
            />
            <div className="updatecontainerbutton">
              <button
                onClick={handleDeleteContent}
                className="delete_content_button"
                style={{ color: "#FFFFFF", cursor: "pointer" }}
              >
                Yes, delete the content
              </button>
            </div>
            <div>
              <h3 style={{ marginTop: "20px" }}>
                {showMessage ? (
                  <h3
                    style={{
                      color: "green",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {message}
                  </h3>
                ) : null}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteContent;
