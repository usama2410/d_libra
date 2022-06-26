import React, { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { styled } from "@mui/material/styles";
import TableRow from "@material-ui/core/TableRow";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getParentChildCategories } from "../../../Redux/Actions/Editor/Category";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import "../EditCourseStructure.css";

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

const CollapsibleTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.state);
  const token = useSelector((state) => state.auth.token);
  const [selectedID, setSelectedID] = useState(null);
  const [parentChidCategory, setParentChidCategory] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [order, setOrder] = React.useState(false);

  // console.log("parentChidCategory", parentChidCategory);

  const handleDragEnd = (e) => {
    // if (!e.destination) return;
    let tempData = Array.from(parentChidCategory);
    let [source_data] = tempData.splice(e?.source?.index, 1);
    tempData.splice(e?.destination?.index, 0, source_data);
    setParentChidCategory(tempData);

    console.log("[source_data]", [source_data]);
    console.log("e?.source?.index", e?.source?.index);
    console.log("e?.destination?.index", e?.destination);
  };

  const hanldeUpdateStatus = () => {
    setOrder(!order);
  };

  const ParentChildCategories = async () => {
    const response = await dispatch(getParentChildCategories(token));
    setParentChidCategory(response);
  };

  useEffect(() => {
    order ? handleDragEnd() : ParentChildCategories();
  }, []);

  return (
    <TableContainer style={{ padding: "10px 20px" }}>
      <Table sx={{ minWidth: 700 }} size="small" aria-label="customized table">
        <TableHead>
          <StyledTableCell
            style={{
              backgroundColor: "rgba(38, 36, 42, 0.7)",
              borderBottom: "none !important",
            }}
          ></StyledTableCell>
          <StyledTableCell
            className="tablefirstheader"
            sx={{ borderBottom: "none !important" }}
          >
            TITLE
          </StyledTableCell>
          <StyledTableCell
            className="tablefirstheader"
            sx={{ borderBottom: "none !important" }}
          >
            NAME
          </StyledTableCell>
          <StyledTableCell
            className="tablefirstheader"
            sx={{ borderBottom: "none !important" }}
          >
            UNIQUE IDENTIFIER
          </StyledTableCell>
          <StyledTableCell
            className="tablefirstheader"
            sx={{ borderBottom: "none !important" }}
          >
            IMAGE
          </StyledTableCell>
          <StyledTableCell
            className="tablefirstheader"
            sx={{ borderBottom: "none !important" }}
          >
            CREATED DATE
          </StyledTableCell>
          <StyledTableCell
            className="tablefirstheader"
            sx={{ borderBottom: "none !important" }}
          >
            UPDATED DATE
          </StyledTableCell>
        </TableHead>
        <TableBody>
          {parentChidCategory?.map((row, index) => (
            <>
              <TableRow
                className="zia"
                style={{
                  backgroundColor:
                    index % 2 === 0
                      ? " rgba(42, 36, 42, 0.9) !important"
                      : "rgba(38, 36, 42, 0.7)",
                  borderBottom: "none !important",
                }}
              >
                <StyledTableCell sx={{ border: "none !important" }}>
                  <IconButton size="small" onClick={() => setOpen(!open)}>
                    {open ? (
                      <KeyboardArrowUpIcon color="info" />
                    ) : (
                      <KeyboardArrowDownIcon color="info" />
                    )}
                  </IconButton>
                  <IconButton size="small">
                    <OpenWithIcon onClick={hanldeUpdateStatus} color="info" />
                  </IconButton>
                </StyledTableCell>

                <StyledTableCell
                  className="tableBody"
                  sx={{
                    borderBottom: "none !important",
                    color: "#009af9 !important",
                  }}
                >
                  {row.CategoryName}
                </StyledTableCell>
                <StyledTableCell
                  className="tableBody"
                  sx={{ borderBottom: "none !important" }}
                >
                  {row.CategoryName}
                </StyledTableCell>
                <StyledTableCell
                  className="tableBody"
                  sx={{ borderBottom: "none !important" }}
                >
                  {row.CategoryName}
                </StyledTableCell>
                <StyledTableCell
                  className="tableBody"
                  sx={{
                    borderBottom: "none !important",
                    color: "#009af9 !important",
                  }}
                >
                  {row.image}
                </StyledTableCell>
                <StyledTableCell
                  className="tableBody"
                  sx={{ borderBottom: "none !important" }}
                >
                  {row.created_at?.split("T")[0]}
                </StyledTableCell>
                <StyledTableCell
                  className="tableBody"
                  sx={{ borderBottom: "none !important" }}
                >
                  {row.updated_at?.split("T")[0]}
                </StyledTableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                  colSpan={8}
                  sx={{ borderBottom: "none !important" }}
                >
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box margin={1}>
                      <Table>
                        <StyledTableRow>
                          <StyledTableCell
                            sx={{
                              borderBottom: "none !important",
                              color: "#ffffff !important",
                            }}
                          >
                            TITLE
                          </StyledTableCell>
                          <StyledTableCell
                            sx={{
                              borderBottom: "none !important",
                              color: "#ffffff !important",
                            }}
                          >
                            NAME
                          </StyledTableCell>
                          <StyledTableCell
                            sx={{
                              borderBottom: "none !important",
                              color: "#ffffff !important",
                            }}
                          >
                            UNIQUE IDENTIFIER
                          </StyledTableCell>
                          <StyledTableCell
                            sx={{
                              borderBottom: "none !important",
                              color: "#ffffff !important",
                            }}
                          >
                            IMAGE
                          </StyledTableCell>
                          <StyledTableCell
                            sx={{
                              borderBottom: "none !important",
                              color: "#ffffff !important",
                            }}
                          >
                            CREATE DATE
                          </StyledTableCell>
                          <StyledTableCell
                            sx={{
                              borderBottom: "none !important",
                              color: "#ffffff !important",
                            }}
                          >
                            UPDATE DATE
                          </StyledTableCell>
                        </StyledTableRow>
                        <TableBody>
                          {row?.SubCategory?.map((category) => (
                            <StyledTableRow
                              key={category.id}
                              sx={{ borderBottom: "none !important" }}
                            >
                              <StyledTableCell
                                sx={{
                                  borderBottom: "none !important",
                                  color: "#009af9 !important",
                                }}
                              >
                                {category.CategoryName}
                              </StyledTableCell>
                              <StyledTableCell
                                sx={{
                                  borderBottom: "none !important",
                                  color: "#ffffff !important",
                                }}
                              >
                                {category.CategoryName}
                              </StyledTableCell>
                              <StyledTableCell
                                sx={{
                                  borderBottom: "none !important",
                                  color: "#ffffff !important",
                                }}
                              >
                                {category.unique_identifier}
                              </StyledTableCell>
                              <StyledTableCell
                                sx={{
                                  borderBottom: "none !important",
                                  color: "#009af9 !important",
                                }}
                              >
                                {category.image}
                              </StyledTableCell>
                              <StyledTableCell
                                sx={{
                                  borderBottom: "none !important",
                                  color: "#ffffff !important",
                                }}
                              >
                                {category.created_at?.split("T")[0]}
                              </StyledTableCell>
                              <StyledTableCell
                                sx={{
                                  borderBottom: "none !important",
                                  color: "#ffffff !important",
                                }}
                              >
                                {category.updated_at?.split("T")[0]}
                              </StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default CollapsibleTable;
