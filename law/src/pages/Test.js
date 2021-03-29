import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Test = () => {
  const url = "http://www.commonaccord.org/index.php?action=source&file=G/NW-NDA/US/00/EN/Demo/Acme-Quake.md";
  fetch(url, {
    mode: "no-cors",
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));

  // console.log(data);

  return <div>Hello World</div>;
};

const useStyles = makeStyles({
  appbar: {
    borderBottom: "3px solid rgb(212, 212, 212)",
  },
  navbarDisplayFlex: {
    display: `flex`,
    alignItems: "center",
    justifyContent: "space-between",
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-evenly`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`,
  },
});

export default Test;
