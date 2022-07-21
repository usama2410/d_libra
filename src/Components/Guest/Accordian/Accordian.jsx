import React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./Accordian.css";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getPostByIDAccordian } from "../../../Redux/Actions/Editor/post.action";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Accordian = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);
  const location = useLocation();
  const token = useSelector((state) => state.auth.token);

  const [expanded, setExpanded] = React.useState("panel1");
  const [parentCategory, setParentCategory] = React.useState([]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  let id = location?.pathname?.split("/")[2];
  let categoryid = location?.pathname?.split("/")[4];
  let courseid = categoryid?.split("=")[1];

  console.log(id, categoryid, courseid);

  const postById = async () => {
    const response = await dispatch(
      getPostByIDAccordian(
        id,
        role === null ? "role=normaluser" : `role=${role}`,
        categoryid,
        courseid,
        token
      )
    );
    console.log(response);
    setParentCategory(response);
  };

  React.useEffect(() => {
    postById();
  }, []);
  return (
    <>
      <div className="mainAccordionContainer">
        <Accordion
          expanded={expanded === "category?.id"}
          onChange={handleChange("category?.id")}
          className="main_accordian_container"
        >
          <AccordionSummary
            className="accordianmain"
            expandIcon={<ExpandMoreIcon className="accordionarrowicon" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="accordiantext">
              {parentCategory?.post?.categories__name !== undefined ? (
                parentCategory?.post?.categories__name
                  ?.charAt(0)
                  .toUpperCase() +
                parentCategory?.post?.categories__name?.slice(1)
              ) : (
                <Box sx={{ display: "flex" }}>
                  <CircularProgress color="inherit" size={20} />
                </Box>
              )}
            </Typography>
          </AccordionSummary>
          {parentCategory?.chapters?.map((childCategory) => {
            return (
              <AccordionDetails className="sub_accordain_text">
                <Typography className="accordiantext">
                  {childCategory?.CategoryName?.charAt(0).toUpperCase() +
                    childCategory?.CategoryName?.slice(1)}
                </Typography>
              </AccordionDetails>
            );
          })}
        </Accordion>
      </div>
    </>
  );
};

export default Accordian;
