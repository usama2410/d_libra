import Sidebar from "./Components/Sidebar";
import EditorsMainPage from "../src/Components/Editors/EditorsMainPage";
import EditCourseStructure from "./Components/Editors/EditCourseStructure";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AddNewCategory from "./Components/Editors/AddNewCategory";
import UploadContentMain from "./Components/Editors/UploadContent/UploadContentMain";
import DetailPage from "./Components/Editors/DetailPage";
import DeleteContent from './Components/Editors/DeleteContent'
import EditContentMain from './Components/Editors/UploadContent/EditContentMain'
import MyContents from './Components/Editors/MyContent/MyContents'

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
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
          <Route path="/editcontentmain" exact element={<EditContentMain />} />
          <Route path="/mycontents" exact element={<MyContents />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
