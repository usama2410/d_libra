import React, { useState, useEffect } from "react";
import { Button, Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useSelector } from "react-redux";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import "./UploadContentMain.css";
import Select from "react-select";
const EditContentMain = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");
  const theme = useSelector((state) => state.theme.state);

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setImageName(e.target.files[0].name);
    }
  };
const handleBack = () => 
{
navigate('/detailpage')
}
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

 
  const options = [
    { value: "chocolate", label: "Git & Git Hub Introduction" },
    { value: "Saab", label: "Saab" },
    { value: "Opel", label: "Opel" },
    { value: "Audi", label: "Audi" },
  ];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: " #FFFFFF",
      borderRadius: "5px",
      border: "none",
      color: " #363636",
      boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)",
      // width: "450px",
      height: "40px",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#111111",
    }),
    menu: (base, state) => ({
      ...base,
      borderRadius: 0,
      marginTop: 0,
      backgroundColor: "yellow",
      color: " #363636",
    }),
    menuList: (base, state) => ({
      ...base,
      padding: 0,
      background: "white",
      color: " #363636",
    }),
    singleValue: (base, state) => ({
      ...base,
      color: " #363636",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: " #363636",
    }),
  };

  const customStyless = {
    control: (base, state) => ({
      ...base,
      background: " #4F4F4F",
      borderRadius: "5px",
      border: "none",
      // backgroundColor: state.isSelected ? "rgba(189,197,209,.3)" : "white",
      color: "white",
      boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)",
      // width: "450px",
      height: "40px",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#FFFFFF",
      opacity: 1,
    }),
    menu: (base, state) => ({
      ...base,
      borderRadius: 0,
      marginTop: 0,
      backgroundColor: "yellow",
      color: "black",
    }),
    menuList: (base, state) => ({
      ...base,
      padding: 0,
      background: "white",
      color: "black",
    }),
    singleValue: (base, state) => ({
      ...base,
      color: "#FFFFFF",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "white",
    }),
  };

 
 
 
 
 
 
 
 
 
 
 
 
 
  useEffect(() => {}, [editorState]);
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

   <div
     style={{ marginBottom: "10px" }}
     className={
       theme ? "upload_new_content_text_sub" : "upload_new_content_text"
     }
   >
     Edit Contents
   </div>
   <Grid container className="main_root_container_upload_content">
     <Grid item lg={4} md={4} sm={12} xs={12} style={{ marginTop: "-15px" }}>
     <div>
              <span
                className="addcategory_text"
                style={{ color: `${theme ? "#363636" : "#FFFFFF"}` }}
              >
                Select Course
              </span>
              <Select
                styles={theme ? customStyles : customStyless}
                className={
                  theme
                    ? "git_introduction_dropdown_sub_three"
                    : "git_introduction_dropdown_sub_two"
                }
                placeholder="Git & GitHub Introduction"
                options={options}
              />
            </div>
            <div>
              <span
                className="addcategory_text"
                style={{ color: `${theme ? "#363636" : "#FFFFFF"}` }}
              >
                Select Chapter
              </span>
           

              <Select
                styles={theme ? customStyles : customStyless}
                className={
                  theme
                    ? "git_introduction_dropdown_sub_three"
                    : "git_introduction_dropdown_sub_two"
                }
                placeholder="Git & GitHub Introduction"
                options={options}
              />
            </div>
       <div>
         <span
           className="addcategory_text"
           style={{   color: `${theme ? "#363636" : "#FFFFFF"}`, }}
         >
           Content Title
         </span>
         <input
           style={{ width: "100%" }}
           className={
             theme ? "uploadcontentinputfieldtwo" : "uploadcontentinputfield"
           }
           placeholder=""
         />
       </div>
       <div>
         <span
           className="addcategory_text"
           style={{   color: `${theme ? "#363636" : "#FFFFFF"}`, }}
         >
           Content ID
         </span>
         <input
           style={{ width: "100%" }}
           className={
             theme ? "uploadcontentinputfieldtwo" : "uploadcontentinputfield"
           }
           placeholder=""
         />
       </div>
       <div>
         <span
           className="addcategory_text"
           style={{   color: `${theme ? "#363636" : "#FFFFFF"}`, }}
         >
           Tags(Max 5 Tags)
         </span>
         <input
           style={{ width: "100%" }}
           className={
             theme ? "uploadcontentinputfieldtwo" : "uploadcontentinputfield"
           }
           placeholder=""
         />
       </div>
       <div>
         <span
           className="addcategory_text"
           style={{   color: `${theme ? "#363636" : "#FFFFFF"}`, }}
         >
           Meta Descriptions
         </span>
         <textarea
           style={{ width: "100%" }}
           className={
             theme ? "addcategory_textarea" : "addcategory_textarea_sub"
           }
           id="message"
           rows="6"
           placeholder=""
         />
       </div>
       <div>
         <span
           className="addcategory_text"
           style={{   color: `${theme ? "#363636" : "#FFFFFF"}`, }}
         >
           OGP(Open Graph Protocol)
         </span>
         <textarea
           style={{ width: "100%" }}
           className={
             theme ? "addcategory_textarea" : "addcategory_textarea_sub"
           }
           id="message"
           rows="6"
           placeholder=""
         />
       </div>
     </Grid>
     <Grid
       item
       lg={8}
       md={8}
       sm={12}
       xs={12}
       className="reactdraftcontainer"
       style={{ float: "right" }}
     >
       <div style={{ width: "100%" }}>
         <Grid container spacing={1}>
           <Grid item lg={4} md={4} sm={12} xs={12} >
             <div className="main_slide_container">
               <div    style={{paddingBottom: "10px"}}>
                 <span>{imageName}</span>
               </div>
               <div>
                 <label htmlFor="contained-button-file">
                   <input
                     accept="image/*"
                     id="contained-button-file"
                     type="file"
                     style={{ display: "none" }}
                     onChange={handleChange}
                   />
                   <Button
                     variant="contained"
                     color="primary"
                     component="span"
                     // style={{ height: "20px" }}
                     className="image_button"
                  
                   >
                     Select an Image File
                   </Button>
                 </label>
               </div>
             </div>
           </Grid>

           <Grid item lg={8} md={8} sm={0} xs={0}  >
             <div
               className="image_none"
               style={{
                 width: "300px",
                 height: "225px",
                 
               }}
             >
               <div>
                 <span 
         style={{   color: `${theme ? "#363636" : "#FFFFFF"}`, }}>Preview</span>
               </div>
               {image ? (
                 <img
                   src={image}
                   style={{
                     width: "100%",
                     height: "100%",
                     marginLeft: "-10px",
                     objectFit: "contain",
                     paddingTop: "10px"
                   }}
                   alt=""
                 />
               ) : (
                 <span>No Image</span>
               )}
             </div>
           </Grid>
         </Grid>
         <div className="editormaincontainer">
           <span className="addcategory_text">Edit Main Content</span>
           <div
             style={{
              padding: "5px 5px 0px 5px",
               backgroundColor: `${theme ? "white" : "#4f4f4f"}`,
             }}
             className="editorstatecontainer"
           >
             <Editor
               editorState={editorState}
               onEditorStateChange={setEditorState}
             />
           </div>
         </div>
       </div>
      
     </Grid>
      <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
       <button className="update_button_new">Update</button>
       </div>
   </Grid>
 </>
  );
};

export default EditContentMain;
