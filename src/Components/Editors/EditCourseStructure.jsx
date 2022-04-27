import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditCourseStructure.css";
import { Grid } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import { HiArrowSmRight } from "react-icons/hi";
import { HiArrowSmLeft } from "react-icons/hi";
import Vector from "../../assests/Vector.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import { useSelector, useDispatch } from "react-redux";
import { ArrowBack } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {
  getMainCategory,
  getParentChildCategories,
} from "../../Redux/Actions/Editor/Category";
import EditCourseStructureData from "./EditCourseStructureData";
import Select from "react-select";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);
  const [result, setResult] = useState([]);
  const [parentChidCategory, setParentChidCategory] = useState([]);

  console.log("parentChidCategory", parentChidCategory);

  const mainCategories = async () => {
    const response = await dispatch(getMainCategory(token));
    setResult(response);
  };

  const ParentChildCategories = async () => {
    const response = await dispatch(getParentChildCategories(token));
    setParentChidCategory(response);
  };

  const handleBack = () => {
    navigate("/editormainpage");
  };

  useEffect(() => {
    mainCategories();
    ParentChildCategories();
  }, []);

  const options = [
    { value: "chocolate", label: "Git & Git Hub Introduction" },
    { value: "Saab", label: "Saab" },
    { value: "Opel", label: "Opel" },
    { value: "Audi", label: "Audi" },
  ];

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

  return (
    <div style={{ height: "100%" }}>
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
            <Button
              variant="contained"
              className="editcoursestructure_button_two"
              startIcon={<HiArrowSmRight />}
            >
              Import
            </Button>
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
            options={options}
          />

          <Button className="go_button" variant="outlined">
            Go
          </Button>
          <span style={{ paddingLeft: "20px" }}>0 of 9 selected</span>
        </div>
        <TableContainer style={{ padding: "10px 20px" }}>
          <Table
            sx={{ minWidth: 700 }}
            size="small"
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell
                  style={{
                    backgroundColor: "rgba(38, 36, 42, 0.7)",
                  }}
                ></StyledTableCell>
                <StyledTableCell className="tablefirstheader">
                  TITLE
                </StyledTableCell>
                <StyledTableCell className="tablefirstheader">
                  NAME
                </StyledTableCell>
                <StyledTableCell className="tablefirstheader">
                  UNIQUE IDENTIFIER
                </StyledTableCell>
                <StyledTableCell className="tablefirstheader">
                  IMAGE
                </StyledTableCell>
                <StyledTableCell className="tablefirstheader">
                  CREATED DATE
                </StyledTableCell>
                <StyledTableCell className="tablefirstheader">
                  UPDATED DATE
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {parentChidCategory?.length === 0 ? (
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    marginTop: "20px",
                  }}
                >
                  Loading...
                </div>
              ) : (
                <>
                  {parentChidCategory?.map((item) => {
                    return item.SubCategory.map((subItem) => {
                      return (
                        <>
                          <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                              <AddIcon className="tableBody_sub" />
                            </StyledTableCell>
                            <StyledTableCell className="tableBody">
                              {item.CategoryName}
                            </StyledTableCell>
                            <StyledTableCell className="tableBody">
                              {subItem.CategoryName}
                            </StyledTableCell>
                            <StyledTableCell className="tableBody">
                              {subItem.unique_identifier}
                            </StyledTableCell>
                            <StyledTableCell className="tableBody">
                              {subItem.image !== ""
                                ? subItem.image
                                : "No Image"}
                            </StyledTableCell>
                            <StyledTableCell className="tableBody">
                              {subItem.created_at.split("T")[0]}
                            </StyledTableCell>
                            <StyledTableCell className="tableBody">
                              {subItem.updated_at.split("T")[0]}
                            </StyledTableCell>
                          </StyledTableRow>
                        </>
                      );
                    });
                  })}
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <span style={{ padding: "0px 20px" }}>
          {parentChidCategory?.length} categories
        </span>
      </div>
    </div>
  );
};

export default EditCourseStructure;
