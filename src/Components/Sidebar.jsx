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
import Rating from "../assests/Rating.png";
import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { themeSwitch } from "../Redux/Actions/auth.action";
import Member_Icon from "../assests/SVG_Files/Member_Icon.svg";
import { useLocation } from "react-router-dom";
import UnionClose from "../assests/UnionClose.png";
import UnionBlue from "../assests/UnionBlue.png";
import Arrow_white from "../assests/Arrow_white.png";
import editor_icon from "../assests/SVG_Files/editor_icon.svg";
import darkmode_logo from "../assests/SVG_Files/New folder/darkmode_logo.svg";
import lightmode_logo from "../assests/SVG_Files/New folder/lightmode_logo.svg";
import Sidebar_My_library from "../assests/SVG_Files/New folder/icons/Sidebar_My_library.svg";
import Sidebar_Signup from "../assests/SVG_Files/New folder/icons/Sidebar_Signup.svg";
import Sidebar_Login from "../assests/SVG_Files/New folder/icons/Sidebar_Login.svg";
import Sidebar_Logout from "../assests/SVG_Files/New folder/icons/Sidebar_Logout.svg";
import Sidebar_EditorPage from "../assests/SVG_Files/New folder/icons/Sidebar_EditorPage.svg";
import Sidebar_NightMode from "../assests/SVG_Files/New folder/icons/Sidebar_NightMode.svg";
import Accordian from "./Guest/Accordian/Accordian";
import Recent_view_dark from "../assests/SVG_Files/Recent_view_dark.svg";
import Search_dark from "../assests/SVG_Files/New folder/icons/Search_dark.svg";
import Search from "../assests/SVG_Files/New folder/icons/Search.svg";
import Hamburger_Menu_light from "../assests/SVG_Files/New folder/Hamburger_Menu_light.svg";
import Hamburger_Menu_dark from "../assests/SVG_Files/New folder/Hamburger_Menu_dark.svg";
import Arrow_Left_light from "../assests/SVG_Files/New folder/Arrow_Left_light.svg";
import Arrow_Left_dark from "../assests/SVG_Files/New folder/Arrow_Left_dark.svg";

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
  const Pinstate = useSelector((state) => state.pin.state);
  const [open, setOpen] = React.useState(false);
  const [themestate, setThemeState] = React.useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const [accordionicon, setaccordionicon] = React.useState(false);
  const navigate = useNavigate();
  const [searchstate, setSearchState] = React.useState(false);

  const handleSearchState = (e) => {
    e.preventDefault();
    setSearchState(true);
    console.log(searchstate);
  };

  const handleAccordionIcon = async () => {
    setaccordionicon(!accordionicon);
  };

  const handleChange = async (event) => {
    setThemeState(event.target.checked);
    console.log(themestate);
    dispatch(themeSwitch(!themeState));
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
                  {themeState ? (
                    <img
                      src={Arrow_Left_light}
                      alt=""
                      className="arrows_icon_sidebar"
                    />
                  ) : (
                    <img
                      src={Arrow_Left_dark}
                      alt=""
                      className="arrows_icon_sidebar"
                    />
                  )}
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
                  {themeState ? (
                    <img
                      src={Arrow_Left_light}
                      alt=""
                      className="arrows_icon_sidebar"
                    />
                  ) : (
                    <img
                      src={Arrow_Left_dark}
                      alt=""
                      className="arrows_icon_sidebar"
                    />
                  )}
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
      style={{
        color: "white",
        paddingTop: "45px",
      }}
    >
      <span className="subheadingsidebar">Account </span>
      <Divider className="divider_class" />

      <List style={{ paddingLeft: "20px" }}>
        <ListItem
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/usersettingviewpage")}
        >
          <div
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            className="sidebarlistcontainer"
          >
            <ListItemIcon>
              <img src={Member_Icon} alt="" className="profilesidebaricon" />
            </ListItemIcon>
            <Typography>
              <span className="listitem_text" style={{ marginLeft: "-17px" }}>
                bloovee
              </span>
            </Typography>
          </div>
        </ListItem>
        <ListItem
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/register")}
        >
          <div
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            className="sidebarlistcontainer"
          >
            <ListItemIcon
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <img
                src={Sidebar_Signup}
                alt=""
                style={{ paddingLeft: "2px" }}
                className="sidebarsignupicon"
              />
            </ListItemIcon>
            <Typography
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <span
                className="listitem_text_disabled"
                style={{ marginLeft: "-24px" }}
              >
                Signup
              </span>
            </Typography>
          </div>
        </ListItem>

        <ListItem
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          <div
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            className="sidebarlistcontainer"
          >
            <ListItemIcon
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <img
                src={Sidebar_Login}
                alt=""
                style={{ paddingLeft: "3px" }}
                className="sidebarloginicon"
              />
            </ListItemIcon>
            <Typography
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
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
          <div
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            className="sidebarlistcontainer"
          >
            <ListItemIcon
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <img
                src={Sidebar_Logout}
                alt=""
                style={{ paddingLeft: "3px" }}
                className="sidebarlogouticon"
              />
            </ListItemIcon>
            <Typography
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
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
          <div
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            className="sidebarlistcontainer"
          >
            <ListItemIcon
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <img
                src={Recent_view_dark}
                alt=""
                className="sidebardarkicon"
                style={{ paddingRight: "2px" }}
              />
            </ListItemIcon>
            <Typography
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
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
          <div
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            className="sidebarlistcontainer"
          >
            <ListItemIcon
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <img
                src={Sidebar_My_library}
                alt=""
                className="sidebarlibraryicon"
                style={{ paddingRight: "3px" }}
              />
            </ListItemIcon>
            <Typography
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
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
          <div
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            className="sidebarlistcontainer"
          >
            <ListItemIcon
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <img
                src={Rating}
                alt=""
                className="sidebarratingicon"
                style={{ paddingLeft: "1px" }}
              />
            </ListItemIcon>
            <Typography
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <span className="listitem_text" style={{ marginLeft: "-24px" }}>
                Rating
              </span>
            </Typography>
          </div>
        </ListItem>
      </List>
      <span className="subheadingsidebar" style={{ marginTop: "20px" }}>
        Setting{" "}
      </span>
      <Divider className="divider_class" />
      <List style={{ paddingLeft: "20px" }}>
        <ListItem style={{ cursor: "pointer" }}>
          <div
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            className="sidebarlistcontainer"
          >
            <ListItemIcon
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <img
                className="sidebarnighticon"
                src={Sidebar_NightMode}
                alt=""
                style={{ paddingLeft: "3px" }}
              />
            </ListItemIcon>
            <Typography
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
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
      <span className="subheadingsidebar" style={{ marginTop: "20px" }}>
        {" "}
        Editor Menu{" "}
      </span>
      <Divider className="divider_class" />
      <List style={{ paddingLeft: "20px" }}>
        <ListItem
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/editormainpage")}
        >
          <div
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            className="sidebarlistcontainer"
          >
            <ListItemIcon
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <img
                className="sidebareditoricon"
                src={Sidebar_EditorPage}
                alt=""
                style={{ paddingLeft: "3px" }}
              />
            </ListItemIcon>
            <Typography
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <span className="listitem_text" style={{ marginLeft: "-24px" }}>
                Editor's Page
              </span>
            </Typography>
          </div>
        </ListItem>
      </List>
      <span className="subheadingsidebar" style={{ marginTop: "20px" }}>
        Others{" "}
      </span>
      <Divider className="divider_class" />
      <List style={{ paddingLeft: "20px" }}>
        <ListItem
          style={{ cursor: "pointer" }}
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <Typography>
            <span className="listitem_text">About D-Libra</span>
          </Typography>
        </ListItem>
        <ListItem
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/feedback")}
        >
          <Typography
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            <span className="listitem_text">Feedback</span>
          </Typography>
        </ListItem>
      </List>
    </Box>
  );

  const Conditional_Searchbar = () => {
    if ("/" === location.pathname) {
      return "logocontainerone";
    } else if (
      "/register" === location.pathname ||
      "/login" === location.pathname ||
      "/logout" === location.pathname
    ) {
      return "logocontainertwo";
    } else if (
      "/feedback" === location.pathname ||
      "/rlogocontainertwoatingsidebar" === location.pathname ||
      "/ratingform" === location.pathname ||
      "/usersettingviewpage" === location.pathname
    ) {
      return "logocontainerthree";
    } else if (
      "/Tagpage" === location.pathname ||
      "/Searchresult" === location.pathname ||
      "/recentlyviewed" === location.pathname
    ) {
      return "logocontainereight";
    } else if ("/coursepageguest" === location.pathname) {
      return "logocontainernine";
    } else if (
      "/editormainpage" === location.pathname ||
      "/editcoursestructure" === location.pathname ||
      "/addnewcategory" === location.pathname ||
      "/uploadcontentmain" === location.pathname ||
      "/mycontents" === location.pathname ||
      "/detailpage" === location.pathname ||
      "/editcontentmain" === location.pathname ||
      "/deletecontent" === location.pathname
    ) {
      return "logocontaineredit";
    } else {
      return "logocontainereleven";
    }
  };

  const Conditional_SearchIcon = () => {
    if (
      "/" === location.pathname ||
      "/register" === location.pathname ||
      "/login" === location.pathname ||
      "/logout" === location.pathname
    ) {
      return "wrap";
    }
    if (
      "/detailpage" === location.pathname ||
      "/userdetailpage" === location.pathname
    ) {
      return "wrapthree";
    } else {
      return "wraptwo";
    }
  };

  const Conditional_Sidenavlogo = () => {
    if (
      "/detailpage" === location.pathname ||
      "/userdetailpage" === location.pathname
    ) {
      return "sidenav_logotwo";
    } else {
      return "sidenav_logo";
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        open={open}
        style={{ display: Pinstate ? "none" : "" }}
      >
        <Toolbar className={themeState ? "toolbarclasstwo" : "toolbarclassone"}>
          <div>
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button>
                  <IconButton
                    onClick={toggleDrawer(anchor, true)}
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    style={{
                      position: "absolute",
                      left: "-10px",
                    }}
                    sx={{ mr: 2, ...(open && { display: "none" }) }}
                  >
                    {themeState ? (
                      <img
                        src={Hamburger_Menu_light}
                        alt=""
                        className="hamburgericonsidebar"
                      />
                    ) : (
                      <img
                        src={Hamburger_Menu_dark}
                        alt=""
                        className="hamburgericonsidebar"
                      />
                    )}
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
                      backgroundColor: "rgb(33, 33, 33)",
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
          <div className="logocontainer">
            <div
              className={
                "/detailpage" === location.pathname
                  ? "logo_main_container_two"
                  : "logo_main_container"
              }
            >
              <Button
                onClick={() => navigate("/")}
                className={Conditional_Searchbar()}
              >
                {themeState ? (
                  <img
                    src={lightmode_logo}
                    alt=""
                    className="sidebarlightmodelogo"
                  />
                ) : (
                  <img
                    src={darkmode_logo}
                    alt=""
                    className="sidebarlightmodelogo"
                  />
                )}
              </Button>
            </div>
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
              className="editoriconsidebar"
              onClick={() => navigate("/editormainpage")}
              alt=""
            />
          ) : (
            ""
          )}

          <div className="toolbar_rowreverse">
            <div>
              <div className="mainsearchcontianer">
                <input
                  placeholder="Search"
                  className={`${
                    themeState ? "sidebar_inputfield_sub" : "sidebar_inputfield"
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
                    <img src={Search} alt="" />
                  ) : (
                    <img src={Search_dark} alt="" />
                  )}
                </div>
              </div>

              <div className={Conditional_SearchIcon()}>
                <div>
                  {themeState ? (
                    <img
                      onClick={handleSearchState}
                      src={Search}
                      alt=""
                      className="searchiconsize"
                    />
                  ) : (
                    <img
                      className="searchiconsize"
                      onClick={handleSearchState}
                      src={Search_dark}
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>

            {"/" === location.pathname ||
            "/register" === location.pathname ||
            "/logout" === location.pathname ||
            "/login" === location.pathname ||
            "/coursepageguest" === location.pathname ? (
              ""
            ) : (
              <img
                onClick={() => navigate("/usersettingviewpage")}
                src={Member_Icon}
                alt=""
                className={Conditional_Sidenavlogo()}
              />
            )}
          </div>
          {handleaccordiondrawer()}
        </Toolbar>

        <div
          className="Searchb_main"
          style={{
            zIndex: "1",
            display: searchstate ? "block" : "none",
          }}
        >
          <div
            className="main"
            style={{
              backgroundColor: `${themeState ? "#F3F6FF" : "  #111111"}`,
            }}
          >
            <div className="left_search" onClick={() => setSearchState(false)}>
              {themeState ? (
                <img src={UnionBlue} alt="" />
              ) : (
                <img src={Arrow_white} alt="" />
              )}
            </div>
            <div
              className="right_search"
              style={{
                backgroundColor: `${themeState ? "#FFFFFF" : "  #111111"}`,
              }}
            >
              <div className="left">
                <input
                  type="text"
                  placeholder="Search"
                  className={
                    themeState ? "searchbar_input_two" : "searchbar_input"
                  }
                  style={{
                    backgroundColor: `${themeState ? " #FFFFFF" : " #4F4F4F"}`,
                    color: `${themeState ? "black" : "white"}`,
                  }}
                />
              </div>
              <div
                className="right"
                style={{
                  backgroundColor: `${themeState ? " #FFFFFF" : "#4F4F4F"}`,
                }}
              >
                {themeState ? (
                  <img src={Search} alt="" className="sidebarsearchlogo" />
                ) : (
                  <img src={Search_dark} alt="" className="sidebarsearchlogo" />
                )}
              </div>
            </div>
          </div>
        </div>
      </AppBar>
    </>
  );
}
