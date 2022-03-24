import React from "react";
import { Button } from "@material-ui/core";
import sharepic from "../../assests/sharepic.png";
import Rating from "../../assests/Rating.png";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
const FooterButtons = () => {
  const actions = [
    { icon: <FileCopyIcon />, name: "Copy" },
    { icon: <SaveIcon />, name: "Save" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
  ];
  return (
    <>
     <div>
    
      <div
      className="footer_buttons_container"
      >
        <Button className="footer_buttons" variant="contained">
          <div className="footer_sub">
            <img
              src={sharepic}
              alt=""
              style={{ width: "22px", height: "22px" }}
            />
            <span>history</span>
          </div>
        </Button>

        <Button className="footer_buttons" variant="contained">
          <div className="footer_sub">
            <img
              src={Rating}
              alt=""
              style={{ width: "22px", height: "22px" }}
            />
            <span>Library</span>
          </div>
        </Button>
        <Button className="footer_buttons" variant="contained">
          <div className="footer_sub">
            <MenuBookIcon style={{ width: "20px", height: "20px" }} />
            <span>rating</span>
          </div>
        </Button>
        <Button className="footer_buttons" variant="contained">
          <div className="footer_sub">
            <AccessTimeIcon style={{ width: "22px", height: "22px" }} />
            <span>Share</span>
          </div>
        </Button>
      </div>

      </div>
     
    </>
  );
};

export default FooterButtons;



// <div className="footer_buttons_speedial">
// <SpeedDial
//   ariaLabel="SpeedDial basic example"
//   sx={{ position: "absolute", bottom: 16, right: 16 }}
//   icon={<SpeedDialIcon />}
// >
//   {actions.map((action) => (
//     <SpeedDialAction
//       key={action.name}
//       icon={action.icon}
//       tooltipTitle={action.name}
//     />
//   ))}
// </SpeedDial>
// </div>