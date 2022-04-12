import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const FooterCopyright = () => {
  //  const location = useLocation();
  const params = useParams();
  const theme = useSelector((state) => state.theme.state);

  // useEffect(() => {
  const backgroundHanlde = () => {
    if (
      (window.location.href.split("/")[3] === "mycontents" &&
        theme === false) ||
      (window.location.href.split("/")[3] === "uploadcontentmain" &&
        theme === false) ||
      (window.location.href.split("/")[3] === "editormainpage" &&
        theme === false) ||
      (window.location.href.split("/")[3] === "addnewcategory" &&
        theme === false) ||
      (window.location.href.split("/")[3] === "deletecontent" &&
        theme === false) ||
      (window.location.href.split("/")[3] === "detailpage" &&
        theme === false) ||
      (window.location.href.split("/")[3] === "editcoursestructure" &&
        theme === false)
    ) {
      console.log("home");
      return "footer_copyright_two";
    } else if (
      (window.location.href.split("/")[3] === "mycontents" && theme === true) ||
      (window.location.href.split("/")[3] === "uploadcontentmain" &&
        theme === true) ||
      (window.location.href.split("/")[3] === "editormainpage" &&
        theme === true) ||
      (window.location.href.split("/")[3] === "addnewcategory" &&
        theme === true) ||
      (window.location.href.split("/")[3] === "deletecontent" &&
        theme === true) ||
      (window.location.href.split("/")[3] === "detailpage" && theme === true) ||
      (window.location.href.split("/")[3] === "editcoursestructure" &&
        theme === true)
    ) {
      return "footer_copyright";
    } else {
      return "footer_copyright_three";
    }
  };
  // }, []);
  return (
    <div className={backgroundHanlde()}>
      <span style={{ fontSize: "12px" }}>
        &copy; D-Libra All Rights Reserved
      </span>
    </div>
  );
};

export default FooterCopyright;
