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
import Image from "react-bootstrap/Image";
import MIT_image from "../images/MIT_image.png";
import Caisse_des_img from "../images/Caisse_des_img.png";
import labchain_logo from "../images/labchain_logo.png";
import world_commerce from "../images/world_commerce.png";

const Home = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <Container>
        <Typography className={classes.text1} align="center">
          Codifying and automating legal documents
        </Typography>
        <Typography className={classes.text2} align="center">
          CommonAccord is an initiative to create global codes of legal
          transacting by codifying and automating legal documents, including
          contracts, permits, organizational documents, and consents. We
          anticipate that there will be codes for each jurisdiction, in each
          language. For international dealings and coordination, there will be
          at least one "global" code.
        </Typography>
      </Container>
      <Grid container className={classes.grid} spacing={4}>
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
      </Grid>
      <Grid container className={classes.users}>
        <Typography variant="h4" align="center">Streamlined Legal Transacting</Typography>
        <Grid container className={classes.grid} spacing={4}>
          <Grid item xs={3}>
            <BusinessCenterRoundedIcon color="primary" />
            <Typography variant="h5">Corporations</Typography>
            <Typography>
              Explore legal documents most common for coporate use
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <EmojiObjectsRoundedIcon color="primary" />
            <Typography variant="h5">Univiersities</Typography>
            <Typography>
              Explore legal documents for universities to dislcose valuable
              research{" "}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <AccountCircleRoundedIcon color="primary" />
            <Typography variant="h5">Individuals</Typography>
            <Typography>
              Explore legal documents used by other individuals
            </Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.grid} spacing={4}>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button1}
              href="/form"
            >
              Discover
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button1}
              href="/form"
            >
              Discover
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button1}
              href="/form"
            >
              Discover
            </Button>
          </Grid>
        </Grid>
      </Grid>

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
      </Grid>
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
    alignItems: "top",
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
});

export default Home;
