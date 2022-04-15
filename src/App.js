
import React, {useEffect} from 'react'
import Sidebar from "./Components/Sidebar";
import EditorsMainPage from "../src/Components/Editors/EditorsMainPage";
import EditCourseStructure from "./Components/Editors/EditCourseStructure";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AddNewCategory from "./Components/Editors/AddNewCategory";
import UploadContentMain from "./Components/Editors/UploadContent/UploadContentMain";
import DetailPage from "./Components/Editors/DetailPage";
import DeleteContent from "./Components/Editors/DeleteContent";
import EditContentMain from "./Components/Editors/UploadContent/EditContentMain";
import MyContents from "./Components/Editors/MyContent/MyContents";

import FooterCopyright from "./Components/User/FooterCopyright";
import Feedback from "./Components/User/Feedback";
import RatingForm from "./Components/User/RatingForm";
import RatingSidebar from "./Components/User/RatingSidebar";
import UserSettingViewPage from "./Components/User/UserSettingViewPage";
import LandingPage from "./Components/Guest/LandingPG/LandingPage";
import Accordian from "./Components/Guest/Accordian/Accordian";
// import Course from "./Components/Guest/CoursePg/Course";
import LibraryBookmark from "./Components/User/Library/LibraryBookmark";

import UserDetailPage from "./Components/User/DetailPageUser/UserDetailPage";

/* Auth imports */
import Login from "./Components/Auth/pages/login";
import Register from "./Components/Auth/pages/register";
import Logout from "./Components/Auth/pages/logout";
import ChangePassword from "./Components/Auth/pages/change-password";

import { useSelector } from "react-redux";

import "./index.css";
import MylibraryCorse from "./Components/Extras/MylibraryCorse";
import Tagpage from "./Components/Extras/Tagpage";
import Searchresult from "./Components/Extras/Searchresult";
import Recentlyviewed from "./Components/Extras/Recentlyviewed";
import CourseMainPage from "./Components/Guest/LandingPG/CourseMainPage";
import CoursePageGuest from "./Components/Guest/LandingPG/CoursePageGuest";
// import {useLocation} from 'react-router-dom'

function App() {
  // const location = useLocation()
  const theme = useSelector((state) => state.theme.state);
  console.log("url", window.location.href.split("/")[3], theme);

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
      document.body.style.backgroundColor = "#111111"
      return "darkTheme";
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
      document.body.style.backgroundColor = "#eeeeee"
      return "CreamyTheme";
    } else if (theme === true) {
      document.body.style.backgroundColor = "#F3F6FF"
      return "lightTheme";
    } else {
      document.body.style.backgroundColor = "#111111"
      return "darkTheme";
    }
  };




useEffect(() => {
  const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()
})






  return (
    <>
      <div className={backgroundHanlde()}>
        <Router>
          <Sidebar />
          <div>
            <Routes>
              <Route path="/" exact element={<LandingPage />} />
              <Route path="/mycontents" exact element={<MyContents />} />

              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/logout" element={<Logout />} />
              <Route
                exact
                path="/changepassword"
                element={<ChangePassword />}
              />

              <Route
                path="/editormainpage"
                exact
                element={<EditorsMainPage />}
              />
              <Route
                path="/editcoursestructure"
                exact
                element={<EditCourseStructure />}
              />
              <Route
                path="/addnewcategory"
                exact
                element={<AddNewCategory />}
              />
              <Route
                path="/uploadcontentmain"
                exact
                element={<UploadContentMain />}
              />
              <Route path="/detailpage" exact element={<DetailPage />} />
              <Route path="/deletecontent" exact element={<DeleteContent />} />
              <Route
                path="/editcontentmain"
                exact
                element={<EditContentMain />}
              />
              <Route path="/feedback" exact element={<Feedback />} />
              <Route path="/ratingsidebar" exact element={<RatingSidebar />} />
              <Route
                path="/usersettingviewpage"
                exact
                element={<UserSettingViewPage />}
              />
              <Route path="/ratingform" exact element={<RatingForm />} />

              <Route
                path="/librarybookmark"
                exact
                element={<LibraryBookmark />}
              />
              <Route path="/Accordian" exact element={<Accordian />} />
              <Route
                path="/MylibraryCorse"
                exact
                element={<MylibraryCorse />}
              />
              <Route path="/Tagpage" exact element={<Tagpage />} />
              {/* <Route path="/Searchresult" exact element={<Searchresult />} /> */}
              <Route
                path="/Recentlyviewed"
                exact
                element={<Recentlyviewed />}
              />
              <Route
                path="/userdetailpage"
                exact
                element={<UserDetailPage />}
              />
              <Route
                path="/coursemainpage"
                exact
                element={<CourseMainPage />}
              />
              <Route
                path="/coursepageguest"
                exact
                element={<CoursePageGuest />}
              />
            </Routes>
          </div>
        </Router>
        <FooterCopyright backgroundHanld={backgroundHanlde()} />
      </div>
    </>
  );
}

export default App;
