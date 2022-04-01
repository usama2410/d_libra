import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./Accordian.css";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import arrow from "../../../assests/Arrow.png";

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

// const AccordionSummary = styled((props) => (
//   <MuiAccordionSummary
//     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} style={{color: "white"}}/>}
//     {...props}
//   />
// ))(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === "dark"
//       ? "rgba(255, 255, 255, .05)"
//       : "rgba(0, 0, 0, .03)",
//   flexDirection: "row-reverse",
//   "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
//     transform: "rotate(90deg)",
//   },
//   "& .MuiAccordionSummary-content": {
//     marginLeft: theme.spacing(1),
//   },
// }));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Accordian = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <div className="mainAccordionContainer">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className="main_accordian_container"
      >
        <AccordionSummary
        className="accordianmain"
          expandIcon={
            <ExpandMoreIcon
             className="accordionarrowicon"
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accordiantext"> 
            Git & GitHub Introduction
          </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className="main_accordian_container"
      >
        <AccordionSummary
            className="accordianmain"
          expandIcon={
            <ExpandMoreIcon
             className="accordionarrowicon"
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accordiantext">
            Git & GitHub Key Concepts
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="sub_accordain_text">
          <Typography className="accordiantext">
            Chapter 1.Git & GitHub Key Concepts
          </Typography>
        </AccordionDetails>
        <AccordionDetails className="sub_accordain_text">
          <Typography className="accordiantext">What is Git?</Typography>
        </AccordionDetails>
        <AccordionDetails className="sub_accordain_text">
          <Typography className="accordiantext">
            What is Version Control?
          </Typography>
        </AccordionDetails>
        <AccordionDetails className="sub_accordain_text">
          <Typography className="accordiantext">
            Collaborating On Git & GitHub
            <br />
            --Remote Repository
          </Typography>
        </AccordionDetails>
        <AccordionDetails className="sub_accordain_text">
          <Typography className="accordiantext">
            Collaborating On Git & GitHub
            <br />
            --Branch
          </Typography>
        </AccordionDetails>
        <AccordionDetails className="sub_accordain_text">
          <Typography className="accordiantext">
            What You Can Do On GitHub Beyond Coding Collaboration
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className="main_accordian_container"
      >
        <AccordionSummary
            className="accordianmain"
          expandIcon={
            <ExpandMoreIcon
             className="accordionarrowicon"
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accordiantext">
            Chapter 2. Git & GitHub Life Cycle
          </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        className="main_accordian_container"
      >
        <AccordionSummary
            className="accordianmain"
          expandIcon={
            <ExpandMoreIcon
             className="accordionarrowicon"
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accordiantext">
            Chapter 3. Git & GitHub Initial Settings
          </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        className="main_accordian_container"
      >
        <AccordionSummary
            className="accordianmain"
          expandIcon={
            <ExpandMoreIcon
             className="accordionarrowicon"
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accordiantext">
            Chapter 4. Launch Git Project
          </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
        className="main_accordian_container"
      >
        <AccordionSummary
            className="accordianmain"
          expandIcon={
            <ExpandMoreIcon
             className="accordionarrowicon"
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accordiantext">
            Chapter 5. Edit & Commit
          </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
        className="main_accordian_container"
      >
        <AccordionSummary
            className="accordianmain"
          expandIcon={
            <ExpandMoreIcon
             className="accordionarrowicon"
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accordiantext">
            Chapter 6. Work With Branches
          </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
        className="main_accordian_container"
      >
        <AccordionSummary
            className="accordianmain"
          expandIcon={
            <ExpandMoreIcon
             className="accordionarrowicon"
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accordiantext">
            Chapter 7. Remote Collaboration
          </Typography>
        </AccordionSummary>
      </Accordion>

      <Accordion
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
        className="main_accordian_container"
      >
        <AccordionSummary
            className="accordianmain"
          expandIcon={
            <ExpandMoreIcon
             className="accordionarrowicon"
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accordiantext">
            Chapter 8. Supplemental Topics
          </Typography>
        </AccordionSummary>
      </Accordion>
      </div>
    </>
  );
};

export default Accordian;
