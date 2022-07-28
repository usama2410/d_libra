import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditCourseStructure.css";
import { Grid } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import { HiArrowSmRight } from "react-icons/hi";
import { HiArrowSmLeft } from "react-icons/hi";
import Vector from "../../assests/Vector.png";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import { useSelector, useDispatch } from "react-redux";
import { ArrowBack } from "@mui/icons-material";
import Table from "./CustomeTable/Table";
import Select from "react-select";
import { importCoursesOrChapters } from "../../Redux/Actions/Editor/Category";
import { toast } from "react-toastify";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "transparent",
    color: "black",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "rgba(38, 36, 42, 0.7)",
    border: "none",
    color: "black",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const EditCourseStructure = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);
  const [message, setMessage] = useState("");

  // const [fileName, setFileName] = useState("");

  // console.log(fileName);

  const handleBack = () => {
    navigate("/editormainpage");
  };

  const handleChange = async (e) => {
    // setFileName(e.target.files[0]);

    const response = await dispatch(
      importCoursesOrChapters(e.target.files[0], token)
    );
    console.log(response);
    setMessage(response.message);
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "black",
      borderRadius: "5px",
      border: "none",
      color: " #363636",
      boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)",
      width: "100%",
      height: "28px !important",
      marginLeft: "5px !important",
      marginTop: "-1px !important",
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

  // console.log(message?.includes("already exists"));

  return (
    <div style={{ height: "100%" }}>
      {message === "Data Upload Successfully"
        ? toast.success(message, {
            toastId: "",
            position: "top-center",
          })
        : message?.includes("already exists")
        ? toast.info(message, {
            toastId: "",
            position: "top-center",
          })
        : message?.includes("xlsx files") &&
          toast.error(message, {
            toastId: "",
            position: "top-center",
          })}
      <button
        onClick={handleBack}
        className="back_button"
        style={{ color: `${theme ? " #363636" : "  #C8C8C8"}` }}
      >
        <ArrowBack className="backbutton_icon" />{" "}
        <span className="backbutton_text">Back</span>
      </button>

      <div className="editcoursestructurecontainer">
        <div>
          <Button
            variant="outlined"
            className="newcategory_main_button"
            onClick={() => navigate("/addnewcategory")}
          >
            Add a New Category, Course or Chapter{" "}
          </Button>
        </div>
        <div className="editcoursestructuretext">
          <Typography variant="h6" noWrap component="div">
            <span
              className={
                theme ? "editors_menu_heading_sub_two" : "editors_menu_heading"
              }
            >
              Edit Course Structure
            </span>
          </Typography>
        </div>
      </div>
      <div className="editcoursesection">
        <div className="editcoursesectiontwo">
          <Grid container>
            <Grid item lg={2} md={3} sm={12} xs={12}>
              <span>Select Category to change</span>
            </Grid>
            <Grid item lg={10} md={9} sm={12} xs={12}>
              <div className="button_container">
                <Button
                  variant="contained"
                  className="editcoursestructure_button"
                >
                  Expand Three
                </Button>
                <Button
                  variant="contained"
                  className="editcoursestructure_button"
                >
                  Collapse Three
                </Button>

                <Button
                  variant="contained"
                  className="editcoursestructure_button"
                >
                  Import
                </Button>
                <Button
                  variant="contained"
                  className="editcoursestructure_button"
                  endIcon={<AddIcon />}
                  onClick={() => navigate("/addnewcategory")}
                >
                  Add Category
                </Button>
              </div>
            </Grid>
          </Grid>
          <div
            className="button_container_two"
            style={{ marginTop: "16px", width: "100%" }}
          >
            <Button
              variant="contained"
              className="editcoursestructure_button_two"
              startIcon={<HiArrowSmLeft />}
            >
              Export
            </Button>

            <label htmlFor="contained-button-file">
              <input
                accept="image/*"
                id="contained-button-file"
                type="file"
                style={{ display: "none" }}
                onChange={(e) => handleChange(e)}
              />

              <Button
                variant="contained"
                component="span"
                // className="image_button selectanimagebutton"
                className="editcoursestructure_button_two"
                startIcon={<HiArrowSmRight />}
              >
                Import
              </Button>
            </label>
          </div>
          <div className="search_main_container">
            <img src={Vector} alt="" className="editcourseimagesection" />
            <input className="editor_input_field" />
            <Button className="editor_submit_button" variant="contained">
              Search
            </Button>
          </div>
        </div>
        <div className="action_container">
          <span>Action:</span>

          <Select
            styles={customStyles}
            className={
              theme
                ? "git_introduction_dropdown_sub"
                : "git_introduction_dropdown"
            }
            placeholder=""
          />

          <Button className="go_button" variant="outlined">
            Go
          </Button>
          <span style={{ paddingLeft: "20px" }}>0 of 9 selected</span>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default EditCourseStructure;
