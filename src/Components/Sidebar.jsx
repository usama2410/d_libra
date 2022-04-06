import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Fill1 from "../assests/Fill1.png";
import image3 from "../assests/image3.png";
import Vector from "../assests/Vector.png";
import Fill2 from "../assests/Fill2.png";
import Fill12 from "../assests/Fill12.png";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { RiFileEditFill } from "react-icons/ri";
import NightMode from "../assests/NightMode.png";
import Rating from "../assests/Rating.png";
import Login from "../assests/Login.png";
import user from "../assests/user.png";
import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { themeSwitch } from "../Redux/Actions/auth.action";
import VectorBlue from "../assests/VectorBlue.png";
import { useLocation } from "react-router-dom";
import UnionOpen from "../assests/UnionOpen.png";
import UnionClose from "../assests/UnionClose.png";
import UnionBlue from "../assests/UnionBlue.png";
import editor_icon from "../assests/SVG_Files/editor_icon.svg";
import white_icon from "../assests/SVG_Files/New folder/white_icon.svg";
import darkmode_logo from "../assests/SVG_Files/New folder/darkmode_logo.svg";
import lightmode_logo from "../assests/SVG_Files/New folder/lightmode_logo.svg";
import Sidebar_My_library from '../assests/SVG_Files/New folder/icons/Sidebar_My_library.svg'
import Sidebar_Signup from "../assests/SVG_Files/New folder/icons/Sidebar_Signup.svg";
import Sidebar_Login from "../assests/SVG_Files/New folder/icons/Sidebar_Login.svg";
import Sidebar_Logout from '../assests/SVG_Files/New folder/icons/Sidebar_Logout.svg'
import Sidebar_EditorPage from "../assests/SVG_Files/New folder/icons/Sidebar_EditorPage.svg";
import Sidebar_NightMode from '../assests/SVG_Files/New folder/icons/Sidebar_NightMode.svg'
import Accordian from "./Guest/Accordian/Accordian";

const drawerWidth = () => {
  if (window.innerWidth <= 600) {
    return 258;
  } else {
    return 341;
  }
};

const drawerWidthTwo = () => {
  if (window.innerWidth <= 600) {
    return 300;
  } else {
    return 388;
  }
};

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Sidebar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const [statetwo, setStateTwo] = React.useState({
    right: false,
  });

  const toggleDrawerTwo = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setStateTwo({ ...statetwo, [anchor]: open });
  };

  const themeState = useSelector((state) => state.theme.state);
  const [open, setOpen] = React.useState(false);
  const [themestate, setThemeState] = React.useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const [accordionicon, setaccordionicon] = React.useState(false);

  const handleAccordionIcon = async () => {
    setaccordionicon(!accordionicon);
    // await dispatch(accordionstate(accordionicon));
  };

  const handleChange = async (event) => {
    setThemeState(event.target.checked);
    console.log(themestate);
    dispatch(themeSwitch(!themeState));
  };

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (window.innerWidth < 768) {
      alert("");
    }
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleaccordiondrawer = () => {
    if (
      "/userdetailpage" === location.pathname ||
      ("/detailpage" === location.pathname && themeState === true)
    ) {
      return (
        <button onClick={handleAccordionIcon} className="accordionbutton">
          {" "}
          <div>
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawerTwo(anchor, true)}>
                  <img src={UnionBlue} alt="" width="24px" height="24px" />
                </Button>
                <Drawer
                  sx={{
                    width: drawerWidthTwo,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                      width: drawerWidthTwo,
                      boxSizing: "border-box",
                      border: "none",
                    },
                  }}
                  anchor={anchor}
                  open={statetwo[anchor]}
                  onClose={toggleDrawerTwo(anchor, false)}
                >
                  {listtwo(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </button>
      );
    } else if (
      "/userdetailpage" === location.pathname ||
      ("/detailpage" === location.pathname && themeState === false)
    ) {
      return (
        <button onClick={handleAccordionIcon} className="accordionbutton">
          {" "}
          <div>
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawerTwo(anchor, true)}>
                  <img src={UnionOpen} alt="" />
                </Button>
                <Drawer
                  sx={{
                    width: drawerWidthTwo,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                      width: drawerWidthTwo,
                      boxSizing: "border-box",
                      border: "none",
                    },
                  }}
                  anchor={anchor}
                  open={statetwo[anchor]}
                  onClose={toggleDrawerTwo(anchor, false)}
                >
                  {listtwo(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </button>
      );
    }
  };

  const listtwo = (anchor) => (
    <Box style={{ background: "#212121", height: "100%", maxWidth: "100%" }}>
      <div
        style={{
          background: "#212121",
          height: "30px",
          padding: "20px 20px",
          marginBottom: "10px",
        }}
      >
        <img
          onClick={() => setStateTwo(false)}
          src={UnionClose}
          alt=""
          style={{ cursor: "pointer" }}
        />
      </div>
      <Accordian />
    </Box>
  );

  const list = (anchor) => (
    <Box
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
      style={{
        height: "100%",
        background: "#212121",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        color: "white",
        paddingTop: "45px",
      }}
    >
      <span className="subheadingsidebar">Account </span>
      <Divider className="divider_class" />

      <List style={{ paddingLeft: "20px" }}>
        <ListItem
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/usersettingviewpage") }
          
        >
          <div  onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)} style={{display: "flex", alignItems: "center", width: "100%"}}>

          <ListItemIcon      >
            <img src={image3} alt="" className="profilesidebaricon" />
          </ListItemIcon>
          <Typography      >
            <span className="listitem_text" style={{ marginLeft: "-17px" }}>
              bloovee
            </span>
          </Typography>
        </div>
        </ListItem>

        <ListItem style={{ cursor: "pointer" }} onClick={() => navigate('/register')}>
        <div  onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)} style={{display: "flex", alignItems: "center", width: "100%"}}>
          <ListItemIcon       onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
            <img src={Sidebar_Signup} alt="" style={{ paddingLeft: "3px" }} />
          </ListItemIcon>
          <Typography       onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
            <span
              className="listitem_text_disabled"
              style={{ marginLeft: "-24px" }}
            >
              Signup
            </span>
          </Typography>
          </div>
        </ListItem>



        <ListItem style={{ cursor: "pointer" }} onClick={() => navigate('/login')}>
          
        <div  onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)} style={{display: "flex", alignItems: "center", width: "100%"}}>
          <ListItemIcon       onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
            <img src={Sidebar_Login} alt=""  style={{ paddingLeft: "3px" }} />
          </ListItemIcon>
          <Typography       onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
            <span
              className="listitem_text_disabled"
              style={{ marginLeft: "-24px" }}
            >
              Login
            </span>
          </Typography>
          </div>
        </ListItem>

        <ListItem
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/logout")}
        >

          
        <div  onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)} style={{display: "flex", alignItems: "center", width: "100%"}}>
          <ListItemIcon       onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
            <img src={Sidebar_Logout} alt=""  style={{ paddingLeft: "3px" }}/>
            {/* <ExitToAppIcon style={{ color: " #FFFFFF" }} /> */}
          </ListItemIcon>
          <Typography       onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
            <span className="listitem_text" style={{ marginLeft: "-24px" }}>
              Logout
            </span>
          </Typography>
          </div>
        </ListItem>

        <ListItem
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/recentlyviewed")}
        >

          
        <div  onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)} style={{display: "flex", alignItems: "center", width: "100%"}}>
          <ListItemIcon       onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
            <AccessTimeIcon style={{ color: " #FFFFFF", fontSize: "21px" }} />
          </ListItemIcon>
          <Typography       onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
            <span className="listitem_text" style={{ marginLeft: "-24px" }}>
              Recently Viewed
            </span>
          </Typography>
          </div>
        </ListItem>

        <ListItem
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/MyLibraryCorse")}
        >

          
        <div  onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)} style={{display: "flex", alignItems: "center", width: "100%"}}>
          <ListItemIcon       onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
            <img src={Sidebar_My_library} alt=""  style={{ paddingLeft: "1px" }}  />
            {/* <MenuBookIcon style={{ color: " #FFFFFF" }} /> */}
          </ListItemIcon>
          <Typography       onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
            <span className="listitem_text" style={{ marginLeft: "-24px" }}>
              My Library
            </span>
          </Typography>
          </div>
        </ListItem>

        <ListItem
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/ratingsidebar")}
        >
           <div  onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)} style={{display: "flex", alignItems: "center", width: "100%"}}>
          <ListItemIcon       onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
            <img src={Rating} alt="" style={{ paddingLeft: "1px" }} />
          </ListItemIcon>
          <Typography       onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
            <span className="listitem_text" style={{ marginLeft: "-24px" }}>
              Rating
            </span>
          </Typography>
          </div>
        </ListItem>
      </List>

      <span className="subheadingsidebar" style={{marginTop: "20px"}}>Setting </span>
      <Divider className="divider_class" />
      <List style={{ paddingLeft: "20px" }}>
        <ListItem style={{ cursor: "pointer" }}>
        <div  onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)} style={{display: "flex", alignItems: "center", width: "100%"}}>
          <ListItemIcon       onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
            <img src={Sidebar_NightMode} alt=""  style={{ paddingLeft: "3px" }}  />
          </ListItemIcon>
          <Typography       onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
            <span className="listitem_text" style={{ marginLeft: "-24px" }}>
              Dark Theme
            </span>
          </Typography>

          <div class="container switch_class">
            <label
              class="switch"
              style={{ background: themestate ? "#009AF9 " : " #BDB9A6" }}
            >
              <input
                type="checkbox"
                checked={themestate}
                onChange={handleChange}
                inputProps={{ "aria-label": "test switch" }}
              />{" "}
              <div></div>
            </label>
          </div>
          </div>
        </ListItem>
      </List>
      <span className="subheadingsidebar"  style={{marginTop: "20px"}}> Editor Menu </span>
      <Divider className="divider_class" />
      <List style={{ paddingLeft: "20px" }}>
        <ListItem
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/editormainpage")}
        >
           <div  onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)} style={{display: "flex", alignItems: "center", width: "100%"}}>
          <ListItemIcon       onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
            <img src={Sidebar_EditorPage} alt=""   style={{ paddingLeft: "3px" }}/>
            {/* <RiFileEditFill style={{ color: " #FFFFFF", fontSize: "20px" }} /> */}
          </ListItemIcon>
          <Typography       onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
            <span className="listitem_text" style={{ marginLeft: "-24px" }}>
              Editor's Page
            </span>
          </Typography>
          </div>
        </ListItem>
      </List>
      <span className="subheadingsidebar"  style={{marginTop: "20px"}}>Others </span>
      <Divider className="divider_class" />
      <List style={{ paddingLeft: "20px" }}>
        <ListItem style={{ cursor: "pointer" }}       onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
          <Typography>
            <span className="listitem_text">About D-Libra</span>
          </Typography>
        </ListItem>
        <ListItem
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/feedback")}
        >
          <Typography       onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
            <span className="listitem_text">Feedback</span>
          </Typography>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar className={themeState ? "toolbarclasstwo" : "toolbarclassone"}>
          <div>
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    style={{ color: `${themeState ? "#111111 " : " white"}`, marginLeft: "-50px" }}
                    sx={{ mr: 2, ...(open && { display: "none" }) }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Button>
                <SwipeableDrawer
                  sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                      width: drawerWidth,
                      boxSizing: "border-box",
                      border: "none",
                    },
                  }}
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Typography>
              <div
                className={
                  "/detailpage" === location.pathname ||
                  "/userdetailpage" === location.pathname
                    ? "logo_main_container_two"
                    : "logo_main_container"
                }
              >
                <Button
                  onClick={() => navigate("/")}
                  style={{
                    marginLeft: `${"/" === location.pathname ? "-50px" : ""}`,
                  }}
                >
                  {themeState ? (
                    <img src={lightmode_logo} alt="" width='100px' height="20.47"  />
                  ) : (
                    <img src={ darkmode_logo} alt=""  width='100px' height="20.47" />
                  )}

                  {/* <img src={white_icon} alt="" />{" "}
                  {themeState ? (
                    <img src={Fill12} alt="" />
                  ) : (
                    <img src={Fill1} alt="" />
                  )} */}
                </Button>
              </div>
            </Typography>
          </div>

          {"/detailpage" === location.pathname ||
          "/editormainpage" === location.pathname ||
          "/editcoursestructure" === location.pathname ||
          "/addnewcategory" === location.pathname ||
          "/uploadcontentmain" === location.pathname ||
          "/mycontents" === location.pathname ||
          "/editcontentmain" === location.pathname ||
          "/deletecontent" === location.pathname ? (
            <img
              src={editor_icon}
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/editormainpage")}
              alt=""
            />
          ) : (
            ""
          )}

          <Typography variant="h6" className="toolbar_rowreverse">
            {"/userdetailpage" === location.pathname ||
            "/detailpage" === location.pathname ? (
              ""
            ) : (
              <div>
                <div style={{ display: "flex" }}>
                  <input
                    placeholder="Search"
                    className={`${
                      themeState
                        ? "sidebar_inputfield_sub "
                        : "  sidebar_inputfield"
                    }`}
                  />
                  <div
                    className={
                      themeState
                        ? "input_field_icon_container_sub   "
                        : "input_field_icon_container"
                    }
                  >
                    {themeState ? (
                      <img
                        src={VectorBlue}
                        alt=""
                        className="inputfield_icon"
                        onClick={handleSearch}
                      />
                    ) : (
                      <img
                        src={Vector}
                        alt=""
                        className="inputfield_icon"
                        onClick={handleSearch}
                      />
                    )}
                  </div>
                </div>

                <div
                  className="wrap"
                  style={{
                    marginTop: `${"/" === location.pathname ? "-32px" : ""}`,
                  }}
                >
                  <input
                    className={`search_icon ${
                      themeState ? "darkThemeBar" : "whitethemeBar"
                    }`}
                    type="text"
                    placeholder="Search"
                  />
                  <input
                    id="search_submit"
                    type="submit"
                    className={themeState ? "submitone" : "submittwo"}
                  />
                </div>
              </div>
            )}
            {"/" === location.pathname ? (
              ""
            ) : (
              <img
                onClick={() => navigate("/usersettingviewpage")}
                style={{ cursor: "pointer" }}
                src={image3}
                alt=""
                className="sidenav_logo"
              />
            )}
          </Typography>
          {handleaccordiondrawer()}
        </Toolbar>
      </AppBar>
    </>
  );
}
