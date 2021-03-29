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
  Typography,
  Grid,
  Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Test = () => {
  const classes = useStyles();

  return (
  <Grid container className={classes.container}>
    <Grid container className={classes.grid}>
      <Grid item xs={12}>
        <Typography> 
          <Box fontSize={19} fontWeight="fontWeightBold" m={1}>
            Mutual Non-Disclosure Agreement
          </Box>
        </Typography>
      </Grid>
    </Grid>
    <Typography>
      <Box fontSize={19} textAlign="left" fontWeight="fontWeightBold" m={1}>
        By and Between:
      </Box>
      <Box textAlign="left" m={1}>
        Each a "Party" and collectively the "Parties."
      </Box>
      <Box textAlign="left" m={1}>
        This Mutual Non-Disclosure Agreement (this "Agreement") is made as of DATE, by and between the Parties.
      </Box>
      <Box fontSize={19} textAlign="left" fontWeight="fontWeightBold" m={1}>
        Recitals
      </Box>
      <Box textAlign="left" m={1}>
      In consideration of the mutual promises contained in this Agreement and other good and valuable consideration, the receipt and sufficiency of which is hereby acknowledged, the Parties agree as follows:
      </Box>
    </Typography>
    <p>
      <ol>
        <li>Hello</li>
        <ol>
          <li>Hi</li>
        </ol>
      </ol>
    </p>
    
  </Grid>
  )
};

const useStyles = makeStyles({
  appbar: {
    borderBottom: "3px solid rgb(212, 212, 212)",
  },
  container: {
    flexDirection: "column"
  },
  grid: {
    justifyContent: "center",
    marginTop: 20
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
