import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Accordian.css";
import arrow from "../../../assests/Arrow.png";

const Accord = () => {
  return (
    <>
      <Accordion className="AccArror">
        <img src={arrow} alt="" />
        <AccordionSummary></AccordionSummary>
      </Accordion>
      <Accordion className="AccColor">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className="typo">Git & GitHub Introduction</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="typo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="AccColor">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className="typo">
            Chapter 1. Git & GitHub Key Concepts
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="typo">
            Chapter 1. Git & GitHub Key Concepts
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography className="typo">What Is Git?</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography className="typo">What Is Version Control?</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography className="typo">
            Collaborating On Git & GitHub — Remote Repository
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography className="typo">
            Collaborating On Git & GitHub — Branch
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography className="typo">
            What You Can Do On GitHub Beyond Coding Collaboration
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="AccColor">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className="typo">
            Chapter 2. Git & GitHub Life Cycle
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="typo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="AccColor">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className="typo">
            Chapter 3. Git & GitHub Initial Settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="typo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="AccColor">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className="typo">
            Chapter 4. Launch Git Project
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="typo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="AccColor">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className="typo">Chapter 5. Edit & Commit</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="typo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="AccColor">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className="typo">
            Chapter 6. Work With Branches
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="typo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="AccColor">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className="typo">
            Chapter 7. Remote Collaboration
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="typo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="AccColor">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className="typo">
            Chapter 8. Supplemental Topics
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="typo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Accord;
