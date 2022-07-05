import React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./Accordian.css";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector, useDispatch } from "react-redux";
import { getParentChildCategories } from "../../../Redux/Actions/Editor/Category";

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

  const [expanded, setExpanded] = React.useState("panel1");
  const [parentCategory, setParentCategory] = React.useState([]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const token = useSelector((state) => state.auth.token);

  console.log("parentCategory", parentCategory);

  const handleParentChildeCategory = async () => {
    const response = await dispatch(getParentChildCategories(token));
    // console.log("getParentChildCategories response", response)
    setParentCategory(response);
  };

  React.useEffect(() => {
    handleParentChildeCategory();
  }, []);
  return (
    <>
      <div className="mainAccordionContainer">
        {parentCategory?.map((category) => {
          return (
            <Accordion
              expanded={expanded === category?.id}
              onChange={handleChange(category?.id)}
              className="main_accordian_container"
            >
              <AccordionSummary
                className="accordianmain"
                expandIcon={<ExpandMoreIcon className="accordionarrowicon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="accordiantext">
                  {category?.CategoryName}
                </Typography>
              </AccordionSummary>
              {category?.SubCategory?.map((childCategory) => {
                return (
                  <AccordionDetails className="sub_accordain_text">
                    <Typography className="accordiantext">
                      {childCategory?.CategoryName}
                    </Typography>
                  </AccordionDetails>
                );
              })}
            </Accordion>
          );
        })}
      </div>
    </>
  );
};

export default Accordian;
