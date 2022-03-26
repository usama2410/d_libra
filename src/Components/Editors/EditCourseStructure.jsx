import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./EditCourseStructure.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
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
import { useSelector } from "react-redux";

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
  const theme = useSelector((state) => state.theme.state);
  return (
    <div style={{ height: "100%" }}>
      <div style={{ marginTop: "-40px" }}>
        <Button
          onClick={() => navigate("/editormainpage")}
          className="back_button"
          style={{ color: `${theme ? 'black' : 'white'}` }}
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
      </div>
      <div className="editormainpage_root_contianer">
        <div>
          <Button
            variant="outlined"
            className="newcategory_main_button"
            onClick={() => navigate("/addnewcategory")}
          >
            Add a New Category, Course or Chapter{" "}
          </Button>
        </div>
        <div style={{ marginTop: "20px" }}>
          <Typography variant="h6" noWrap component="div">
            <span
              className={theme ? "editors_menu_heading_sub": "editors_menu_heading"}
              // style={{ color: `${theme ? "black" : "white"}` }}
            >
              Edit Course Structure
            </span>
          </Typography>
        </div>
      </div>
      <div style={{ background: "black", color: "white" }}>
        <div style={{ marginTop: "30px", width: "100%", padding: "10px 20px" }}>
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
            <img
              src={Vector}
              alt=""
              style={{ paddingLeft: "10px", marginRight: "-20px" }}
            />
            <input className="editor_input_field" />
            <Button className="editor_submit_button" variant="contained">
              Search
            </Button>
          </div>
        </div>
        <div className="action_container">
          <span>Action:</span>
          <select
            className="git_introduction_dropdown_two"
            name="cars"
            id="cars"
          >
            <option value="volvo">Git & GitHub Introduction</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
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
                  style={{ backgroundColor: "rgba(38, 36, 42, 0.7)" }}
                ></StyledTableCell>
                <StyledTableCell
                  style={{
                    backgroundColor: "rgba(38, 36, 42, 0.7)",
                    fontSize: "12px",
                  }}
                >
                  TITLE
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    backgroundColor: "rgba(38, 36, 42, 0.7)",
                    fontSize: "12px",
                  }}
                >
                  NAME
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    backgroundColor: "rgba(38, 36, 42, 0.7)",
                    fontSize: "12px",
                  }}
                >
                  UNIQUE IDENTIFIER
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    backgroundColor: "rgba(38, 36, 42, 0.7)",
                    fontSize: "12px",
                  }}
                >
                  IMAGE
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    backgroundColor: "rgba(38, 36, 42, 0.7)",
                    fontSize: "12px",
                  }}
                >
                  CREATED DATE
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    backgroundColor: "rgba(38, 36, 42, 0.7)",
                    fontSize: "12px",
                  }}
                >
                  UPDATED DATE
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  <AddIcon className="tableBody_sub" />
                </StyledTableCell>
                <StyledTableCell className="tableBody">
                  Git and GitHub Introduction
                </StyledTableCell>
                <StyledTableCell className="tableBody">
                  Git and GitHub Introduction
                </StyledTableCell>
                <StyledTableCell className="tableBody">457687</StyledTableCell>
                <StyledTableCell className="tableBody">
                  http://localhost:3000/editcoursestructure
                </StyledTableCell>
                <StyledTableCell className="tableBody">
                  Nov,10 2020
                </StyledTableCell>
                <StyledTableCell className="tableBody">
                  Nov,10 2020
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <span style={{ padding: "0px 20px" }}>9 categories</span>
      </div>
    </div>
  );
};

export default EditCourseStructure;
