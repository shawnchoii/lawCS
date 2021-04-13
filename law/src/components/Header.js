import React from 'react';
import { 
    AppBar,
    Toolbar,
    List,
    ListItem,
    ListItemText,
    Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import new_logo from '../images/new_logo.png';

const navLinks = [
  { title: `about us`, path: `/about-us` },
  { title: `product`, path: `/product` },
  // { title: `blog`, path: `/blog` },
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
          <a href="/">
            <img src={new_logo} alt="logo" width = "125" height="50"/>
          </a>
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