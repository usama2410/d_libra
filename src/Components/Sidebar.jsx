import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
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
import Switch from "@mui/material/Switch";
import "./Sidebar.css";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { themeSwitch } from "../Redux/Actions/auth.action";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import VectorBlue from "../assests/VectorBlue.png";

const drawerWidth = () => {
  if (window.innerWidth <= 600) {
    return 258;
  } else {
    return 341;
  }
};
// const DrawerWidth = 200
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState(false);
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [themestate, setThemeState] = React.useState(false);
  const dispatch = useDispatch();

  const handleTheme = async () => {
    setThemeState(true);
    if (themestate === true) {
      setThemeState(false);
    }
    await dispatch(themeSwitch(themestate));
  };

  const navigate = useNavigate();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = (e) => {
    e.preventDefault();

    setOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (window.innerWidth < 768) {
      alert("ahsan here");
    }
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar
            style={{
              backgroundColor: `${themestate ? "#111111" : " #F3F6FF"}`,
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              style={{ color: `${themestate ? "white" : "#111111"}` }}
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Typography variant="h6" noWrap component="div">
                <div className="logo_main_container">
                  <Button onClick={() => navigate("/")}>
                    <img src={Fill2} alt="" />{" "}
                    {themestate ? (
                      <img src={Fill1} alt="" />
                    ) : (
                      <img src={Fill12} alt="" />
                    )}
                  </Button>
                </div>
              </Typography>
            </div>

            <Typography variant="h6" className="toolbar_rowreverse">
              <div>
                <div style={{ display: "flex" }}>
                  <input
                    placeholder="Search"
                    className={`${
                      themestate
                        ? "sidebar_inputfield"
                        : "sidebar_inputfield_sub"
                    }`}
                  />
                  <div
                    className={
                      themestate
                        ? "input_field_icon_container"
                        : "input_field_icon_container_sub"
                    }
                  >
                    {themestate ? (
                      <img
                        src={Vector}
                        alt="vector image"
                        className="inputfield_icon"
                        onClick={handleSearch}
                      />
                    ) : (
                      <img
                        src={VectorBlue}
                        alt="vector image"
                        className="inputfield_icon"
                        onClick={handleSearch}
                      />
                    )}
                  </div>
                </div>

                <div
                  className="wrap"
                
                >
                  <input
                    className="search_icon"
                    type="text"
                    placeholder="Search"
                  
                  />
                  <input id="search_submit"  type="submit"     />
                </div>
              </div>
              <img src={image3} alt="" className="sidenav_logo" />
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
        
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              border: "none",
            },
          }}
          variant="temporary"
          anchor="left"
          open={open}
        >
          <DrawerHeader

            style={{
              background: "#212121",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <MenuIcon style={{ color: "white" }} />
              ) : (
                <MenuIcon style={{ color: "white" }} />
              )}
            </IconButton>
          </DrawerHeader>
          <div
            style={{
              height: "100%",
              background: "#212121",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              color: "white",
            }}
          >
            <span style={{ marginLeft: "20px" }}>Account </span>
            <Divider
              sx={{ bgcolor: "white", width: "60%", marginLeft: "20px" }}
            />
            <List style={{ paddingLeft: "30px" }}>
              <ListItem style={{ cursor: "pointer" }}>
                <ListItemIcon>
                  <img src={image3} alt="" style={{ marginLeft: "-9px" }} />
                </ListItemIcon>
                <Typography>
                  <span
                    className="listitem_text"
                    style={{ marginLeft: "-17px" }}
                  >
                    bloovee
                  </span>
                </Typography>
              </ListItem>

              <ListItem style={{ cursor: "pointer" }}>
                <ListItemIcon>
                  <img src={user} alt="" />
                </ListItemIcon>
                <Typography>
                  <span
                    className="listitem_text_disabled"
                    style={{ marginLeft: "-24px" }}
                  >
                    Signup
                  </span>
                </Typography>
              </ListItem>

              <ListItem style={{ cursor: "pointer" }}>
                <ListItemIcon>
                  <img src={Login} alt="" />
                </ListItemIcon>
                <Typography>
                  <span
                    className="listitem_text_disabled"
                    style={{ marginLeft: "-24px" }}
                  >
                    Login
                  </span>
                </Typography>
              </ListItem>

              <ListItem style={{ cursor: "pointer" }}>
                <ListItemIcon>
                  <ExitToAppIcon style={{ color: " #FFFFFF" }} />
                </ListItemIcon>
                <Typography>
                  <span
                    className="listitem_text"
                    style={{ marginLeft: "-24px" }}
                  >
                    Logout
                  </span>
                </Typography>
              </ListItem>

              <ListItem style={{ cursor: "pointer" }}>
                <ListItemIcon>
                  <AccessTimeIcon style={{ color: " #FFFFFF" }} />
                </ListItemIcon>
                <Typography>
                  <span
                    className="listitem_text"
                    style={{ marginLeft: "-24px" }}
                  >
                    Recently Viewed
                  </span>
                </Typography>
              </ListItem>

              <ListItem style={{ cursor: "pointer" }}>
                <ListItemIcon>
                  <MenuBookIcon style={{ color: " #FFFFFF" }} />
                </ListItemIcon>
                <Typography>
                  <span style={{ marginLeft: "-24px" }}>My Library</span>
                </Typography>
              </ListItem>

              <ListItem style={{ cursor: "pointer" }}>
                <ListItemIcon>
                  <img src={Rating} alt="" style={{ paddingLeft: "3px" }} />
                </ListItemIcon>
                <Typography>
                  <span
                    className="listitem_text"
                    style={{ marginLeft: "-24px" }}
                  >
                    Rating
                  </span>
                </Typography>
              </ListItem>
            </List>

            <span style={{ marginLeft: "20px" }}>Setting </span>
            <Divider
              sx={{ bgcolor: "white", width: "60%", marginLeft: "20px" }}
            />
            <List style={{ paddingLeft: "30px" }}>
              <ListItem style={{ cursor: "pointer" }}>
                <ListItemIcon>
                  <img src={NightMode} alt="" />
                </ListItemIcon>
                <Typography>
                  <span
                    className="listitem_text"
                    style={{ marginLeft: "-24px" }}
                  >
                    Dark Theme
                  </span>
                </Typography>
                <div style={{ marginLeft: "10px" }}>
                  <Switch {...label} onClick={handleTheme} defaultUnChecked />
                </div>
              </ListItem>
            </List>
            <span style={{ marginLeft: "20px" }}>Editor Menu </span>
            <Divider
              sx={{ bgcolor: "white", width: "60%", marginLeft: "20px" }}
            />
            <List style={{ paddingLeft: "30px" }}>
              <ListItem
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/editormainpage")}
              >
                <ListItemIcon>
                  <RiFileEditFill
                    style={{ color: " #FFFFFF", fontSize: "20px" }}
                  />
                </ListItemIcon>
                <Typography>
                  <span
                    className="listitem_text"
                    style={{ marginLeft: "-24px" }}
                  >
                    Editor's Page
                  </span>
                </Typography>
              </ListItem>
            </List>
            <span style={{ marginLeft: "20px" }}>Others </span>
            <Divider
              sx={{ bgcolor: "white", width: "60%", marginLeft: "20px" }}
            />
            <List style={{ paddingLeft: "30px" }}>
              <ListItem style={{ cursor: "pointer" }}>
                <Typography>
                  <span className="listitem_text">About D-Libra</span>
                </Typography>
              </ListItem>
              <ListItem style={{ cursor: "pointer" }}>
                <Typography>
                  <span className="listitem_text">Feedback</span>
                </Typography>
              </ListItem>
            </List>
          </div>
        </Drawer>

        <Main open={open}>
          <DrawerHeader />
        </Main>
      </Box>
    </>
  );
}