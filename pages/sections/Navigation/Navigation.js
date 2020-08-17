import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import styles from "./Navigation.module.css";
import useResponsive from "../../helper/useResponsive";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const menuLinks = [
  {
    name: "Studio",
    href: "",
  },
  {
    name: "Equipment",
    href: "",
  },
  {
    name: "Leistungen",
    href: "",
  },
  {
    name: "Galerie",
    href: "",
  },
  {
    name: "Kontakt",
    href: "",
  },
];

export default function Navigation() {
  const { isDesktop, windowDimension } = useResponsive();

  const [open, setOpen] = React.useState(false);

  return (
    //make it sticky, links, progress
    <div className={styles.sticky}>
      <AppBar position="static" className={styles.slider}>
        <Toolbar variant="dense" className={styles.navbar}>
          {!isDesktop && !open && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => {
                setOpen(true);
              }}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          )}
          <Link href="/">
            <Typography variant="h5" href="/" style={{marginLeft: !isDesktop ? "auto" : null }}>
              <a className={styles.navContent}>greenwoodrecords</a>
            </Typography>
          </Link>

          {isDesktop && (
            <>
              {menuLinks.map((menuLink) => {
                return (
                  <Link href={menuLink.href} as="/">
                    <Typography variant="h6">
                      <a className={styles.navContent}> {menuLink.name} </a>
                    </Typography>
                  </Link>
                );
              })}

            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open}>
        <div>
          <IconButton
            onClick={() => {
              setOpen(false);
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuLinks.map(
            (menuLink) => (
              <ListItem href={menuLink.href} button key={menuLink.name}>
                <ListItemText primary={menuLink.name} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </div>
  );
}
