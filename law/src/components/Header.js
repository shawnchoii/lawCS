import React from 'react';
import { 
    AppBar,
    Toolbar,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Divider,
    Container } from '@material-ui/core';
import { Home } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import logo from '../images/logo.png';

const navLinks = [
  { title: `about us`, path: `/about-us` },
  { title: `product`, path: `/product` },
  { title: `blog`, path: `/blog` },
  { title: `contact`, path: `/contact` },
  { title: `faq`, path: `/faq` }
];

const Header = () => {
    const classes = useStyles();
  
    return (
      <AppBar elevation={0} position="static" color = "transparent" className={classes.appbar}>
        <Toolbar>
          <Container maxWidth="xl" className={classes.navbarDisplayFlex}>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <img src={logo} alt="logo" width = "125" height="50"/>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <a href={path} key={title} className={classes.linkText}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </a>
              ))}
            </List>
          </Container>
        </Toolbar>
      </AppBar>
    );
  };

const useStyles = makeStyles({
    appbar: {
      borderBottom: "3px solid rgb(212, 212, 212)"
    },
    navbarDisplayFlex: {
      display: `flex`,
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    navDisplayFlex: {
      display: `flex`,
      justifyContent: `space-evenly`
    },
    linkText: {
      textDecoration: `none`,
      textTransform: `uppercase`,
      color: `black`
    }
  });

  export default Header;