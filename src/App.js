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
import Accord from "./Components/Guest/Accordian/Accordian";
// import Course from "./Components/Guest/CoursePg/Course";
import LibraryBookmark from "./Components/User/Library/LibraryBookmark";

/* Auth imports */
import Login from "./Components/Auth/pages/login";
import Register from "./Components/Auth/pages/register";
import Logout from "./Components/Auth/pages/logout";

import { useSelector } from "react-redux";

import "./index.css";

function App() {
  const theme = useSelector((state) => state.theme.state);

  return (
    <>
      <div className={theme ? "lightTheme" : "darkTheme"}>
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" exact element={<MyContents />} />

            {/* Auth Routes */}
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/logout" element={<Logout />} />

            <Route path="/editormainpage" exact element={<EditorsMainPage />} />
            <Route
              path="/editcoursestructure"
              exact
              element={<EditCourseStructure />}
            />
            <Route path="/addnewcategory" exact element={<AddNewCategory />} />
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
            <Route path="/LandingPage" exact element={<LandingPage />} />
            <Route
              path="/librarybookmark"
              exact
              element={<LibraryBookmark />}
            />
            <Route path="/Accordian" exact element={<Accord />} />
          </Routes>
          <FooterCopyright />
        </Router>
      </div>
    </>
  );
}

export default App;