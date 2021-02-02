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
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const menuLinks = [
  {
    name: "Studio",
    href: "#studio",
  },
  {
    name: "Equipment",
    href: "#equipment",
  },
  {
    name: "Leistungen",
    href: "#services",
  },
  {
    name: "Galerie",
    href: "#gallery",
  },
  {
    name: "Kontakt",
    href: "#contact",
  },
];

export default function Navigation() {
  const { isDesktop, windowDimension } = useResponsive();
  const [open, setOpen] = React.useState(false);

  return (
    <div id="mainNav" className={styles.header}>
      <AppBar position="static">
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
            <Typography
              variant="h5"
              className={styles.navTitle}
              style={{ marginLeft: !isDesktop ? "auto" : null }}
            >
              <div className={styles.navContent}>greenwoodrecords </div>
            </Typography>
          </Link>

          {isDesktop && (
            <>
              {menuLinks.map((menuLink) => {
                return (
                  <Link href={menuLink.href}>
                    <Typography variant="h6">
                      <div className={styles.navContent}> {menuLink.name} </div>
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
          {menuLinks.map((menuLink) => (
            <Link href={menuLink.href}>
              <ListItem button key={menuLink.name}>
                <ListItemText primary={menuLink.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
