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
import { Link } from "react-router-dom";


const navLinks = [
  { title: `Product`, path: `/` },
  { title: `About Us`, path: `/form` },
];

const Header = () => {
    const classes = useStyles();
    return (
      
      <AppBar elevation={0} position="static" color = "transparent" className={classes.appbar}>
        <Toolbar>
          <Container maxWidth="xl" className={classes.navbarDisplayFlex}>
          <a href="/">
            <img src={new_logo} alt="logo" width = "125" height="50"/>
          </a>

            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <Link to={path} 
                style={{ textDecoration: 'none', marginRight: 20, color: 'black' }}>
                    {title}
                </Link>
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