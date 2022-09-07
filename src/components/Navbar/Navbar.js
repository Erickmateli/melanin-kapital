import React from "react";
import { useState } from "react";

import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { Drawer } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import { List } from "@mui/material";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Grid } from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import AssignmentLateOutlinedIcon from "@mui/icons-material/AssignmentLateOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import SentimentSatisfiedRoundedIcon from "@mui/icons-material/SentimentSatisfiedRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Logo from "../../Assets/hp2-logo.png";

import Funding from "../Funding/Funding";
import NotificationArea from "./NotificationArea";
const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#fff !important",
  },
  drawer: {
    flexShrink: 0,
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: "black",
    "& svg":{
      "& path":{
        color: "#000"
      }
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  logo: {
    paddingTop: "16px",
    paddingLeft: "10px",
    "& img": {
      width: "70%",
    },
  },
  activelist:{
    background: "#ffab00",
    borderRadius: "0 35px 35px 0",
    paddingTop: "0px !important",
    paddingBottom: "0px !important",
    cursor: "pointer",
  },
  navlink:{
    cursor: "pointer",
   
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState(false);
  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <Grid container spacing={2}>
            <Grid item xs={7} sm={7}>
              <Typography variant="h5"  style={{color:"#000",textAlign:"center",paddingTop: "10px"}} >
                Funding
              </Typography>
            </Grid>
            <Grid item xs={3} sm={3} style={{textAlign: "left"}}>
             pppp
            </Grid>
            <Grid item xs={2} sm={2} style={{textAlign: "left"}}>
              <NotificationArea/>
            </Grid>
            
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant={isMdUp ? "permanent" : "temporary"}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        open={open}
        onClose={toggleDrawer}
      >
        <div className={classes.logo}>
          <img src={Logo} alt="melanin Kapital Logo" />
        </div>
        <div className={classes.toolbar}></div>
        <List className={classes.navlink}>
          <ListItem>
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </List>
        <List className={classes.navlink}>
          <ListItem>
            <ListItemIcon>
              <FolderOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Business Profile" />
          </ListItem>
        </List>
        <List className={classes.navlink}>
          <ListItem>
            <ListItemIcon>
              <AssignmentLateOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Risk Profile" />
          </ListItem>
        </List>
        <List className={classes.activelist}>
          <ListItem>
            <ListItemIcon>
              <PieChartOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Funding" />
          </ListItem>
        </List>
        <List className={classes.navlink}>
          <ListItem>
            <ListItemIcon>
              <GroupOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Konnect" />
          </ListItem>
        </List>
        <List className={classes.navlink}>
          <ListItem>
            <ListItemIcon>
              <SentimentSatisfiedRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Academy" />
          </ListItem>
        </List>
        <List className={classes.navlink}>
          <ListItem>
            <ListItemIcon>
              <EmailOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Support" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
      
     <Funding/>
      </main>
    </div>
  );
};

export default Navbar;
