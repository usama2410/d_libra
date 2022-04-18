import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const FooterCopyright = (props) => {
  const location = useLocation();
  console.log("props", props?.backgroundHanld);
  const params = useParams();
  const theme = useSelector((state) => state.theme.state);

  const handleFooterBackground = () => {
    if (props?.backgroundHanld === "lightTheme") {
      return "#f3f6ff";
    }
    if (props?.backgroundHanld === "CreamyTheme") {
      return "#eeeeee";
    }
    if (props?.backgroundHanld === "darkTheme") {
      return "#111111";
    }
  };

  const handleFooter = () => {
    if (
      "/editormainpage" === location.pathname ||
      "/register" === location.pathname ||
      "/login" === location.pathname ||
      "/logout" === location.pathname ||
      "/changepassword" === location.pathname ||
      "/ratingsidebar" === location.pathname
    ) {
      return "none";
    } else {
      return "flex";
    }
  };

  return (
    <div
      className="footer_copyright"
      style={{
        color: theme ? " #000000" : " #C8C8C8 ",
        display: handleFooter(),
      }}
    >
      <span style={{ fontSize: "12px" }}>
        &copy; D-Libra All Rights Reserved
      </span>
    </div>
  );
};

export default FooterCopyright;
