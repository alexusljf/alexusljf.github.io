import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import ComputerIcon from "@mui/icons-material/Computer";
import WorkIcon from "@mui/icons-material/Work";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { NightModeContext } from "../NightModeToggle/NightModeContext";
import "./MenuDrawer.scss";
import { ListItemIcon } from "@mui/material";

export default function MenuDrawer() {
  const { isNightMode } = useContext(NightModeContext);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <button onClick={toggleDrawer(true)} className="button">
        <MenuIcon className={isNightMode ? "menuIconNight" : "menuIconDay"} />
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        <Box
          className={isNightMode ? "boxNight" : "boxDay"}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            <ListItem
              component="a"
              href="#mainSection"
              className={isNightMode ? "listItemNight" : "listItemDay"}
            >
              <ListItemIcon
                className={
                  isNightMode ? "listItemIconNight" : "listItemIconDay"
                }
              >
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="About Me" />
            </ListItem>
            <ListItem
              component="a"
              href="#projectSection"
              className={isNightMode ? "listItemNight" : "listItemDay"}
            >
              <ListItemIcon
                className={
                  isNightMode ? "listItemIconNight" : "listItemIconDay"
                }
              >
                <ComputerIcon />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItem>
            <ListItem
              component="a"
              href="#experienceSection"
              className={isNightMode ? "listItemNight" : "listItemDay"}
            >
              <ListItemIcon
                className={
                  isNightMode ? "listItemIconNight" : "listItemIconDay"
                }
              >
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="Experience" />
            </ListItem>
            <ListItem
              component="a"
              href="https://drive.google.com/file/d/11eAecMcNlTtDCSFM_EbI-UdfTyhxEtgQ/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className={isNightMode ? "listItemNight" : "listItemDay"}
            >
              <ListItemIcon
                className={
                  isNightMode ? "listItemIconNight" : "listItemIconDay"
                }
              >
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Resume" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
