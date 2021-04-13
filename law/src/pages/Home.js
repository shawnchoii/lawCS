import {
  Typography,
  Container,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BusinessCenterRoundedIcon from "@material-ui/icons/BusinessCenterRounded";
import EmojiObjectsRoundedIcon from "@material-ui/icons/EmojiObjectsRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import TimerRoundedIcon from '@material-ui/icons/TimerRounded';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import ListAltIcon from '@material-ui/icons/ListAlt';
import new_logo from '../images/new_logo.svg';

import { Link } from "react-router-dom";

const Home = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <Container>
        <img align="center" className={classes.logo} src={new_logo} alt="logo" />
        <Typography variant="h4" style={{marginTop: 20, marginBottom: 10}} align="center">
          Rapid Non-Disclosure Agreeement (NDA) Generator
        </Typography>
        <Typography className={classes.text2} align="center">
          Common Ground Legal has launched a self-service tool for the rapid generation of customizable NDA's.
        </Typography>
      </Container>
      {/* <Grid container className={classes.grid} spacing={4}>
        <Grid item xs={2}>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            className={classes.button2}
            href="http://www.commonaccord.org/"
          >
            Contact Us
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            className={classes.button2}
            href="https://github.com/CommonAccord"
          >
            GitHub
          </Button>
        </Grid>
      </Grid> */}
      <Grid container className={classes.users}>
        <Typography variant="h4" align="center">Goals of Common Ground Legal</Typography>
        <Grid container className={classes.grid} spacing={4}>
          <Grid item xs={3}>
            <TimerRoundedIcon style={{color: "#F0D219"}} />
            <Typography variant="h5">Efficiency</Typography>
            <Typography>
              Rapid generation of legal documents
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <TrackChangesIcon style={{color: "#F0D219"}} />
            <Typography variant="h5">Consistency</Typography>
            <Typography>
              Standard legal documents leveraged across the business
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <ListAltIcon style={{color: "#F0D219"}} />
            <Typography variant="h5">Proficiency</Typography>
            <Typography>
              Leverage documents drafted by legal experts
            </Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.grid} style={{marginTop: -15}} spacing={4}>
          <Grid item xs={3}>
            <Link to="/form"
            style={{ textDecoration: 'none' }}>
              {/* <Button
                variant="outlined"
                color="black"
                className={classes.button1}
              >
                Discover
              </Button> */}
            </Link>
          </Grid>
          <Grid item xs={3}>
          <Link to="/"
          style={{ textDecoration: 'none' }}>
              <Button
                variant="outlined"
                style={{color: "#000000"}}
                className={classes.button1}
              >
                Let's Go
              </Button>
            </Link>
          </Grid>
          <Grid item xs={3}>
          <Link to="/form" 
          style={{ textDecoration: 'none' }}>
              {/* <Button
                variant="outlined"
                style={{color: "#000000"}}
                className={classes.button1}
              >
                Discover
              </Button> */}
              
            </Link>
          </Grid>
        </Grid>
      </Grid>
{/* 
      <Grid container className={classes.flex} align="center">
        <Grid item xs={3}>
          <Image fluid className={classes.image} src={MIT_image} />
        </Grid>
        <Grid item xs={3}>
          <Image fluid className={classes.image} src={Caisse_des_img} />
        </Grid>
        <Grid item xs={3}>
          <Image fluid className={classes.image} src={labchain_logo} />
        </Grid>
        <Grid item xs={3}>
          <Image fluid className={classes.image} src={world_commerce} />
        </Grid>
      </Grid> */}
    </div>
  );
};

const useStyles = makeStyles({
  users: {
    flexDirection: "column",
    marginTop: 25,
  },
  grid: {
    marginTop: 10,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "top",
  },
  navbarDisplayFlex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navDisplayFlex: {
    display: "flex",
    justifyContent: "space-evenly`",
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`,
  },
  button1: {
    fontWeight: "bold",
    marginTop: 30,
  },
  button2: {
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
  },
  text1: {
    fontSize: 30,
    marginTop: 25,
  },
  text2: {
    fontSize: 20,
    color: "grey",
  },
  image: {
    width: "50%",
    height: "30",
  },
  rowFlex: {
    flexDirection: "row",
  },
  flex: {
    justifyContent: "center",
    alignItems: "top",
    marginTop: 50,
  },
  logo: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
  }
});

export default Home;
