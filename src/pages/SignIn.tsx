import { Button, makeStyles, Typography } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";

import React from "react";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    height: "100vh",
    fontFamily: "Chirp, Verdana, System",
  },
  dislcamerSide: {
    backgroundColor: "#1DA1F2",
    display: "flex",
    flex: "0 0 50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage:
      "url(https://abs.twimg.com/sticky/illustrations/lohp_en_850x623.png)",
  },
  dislcamerSideTwitterIcon: {
    width: 350,
    height: 350,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  loginSide: {
    display: "flex",
    flex: "0 0 50%",
    alignItems: "center",
    justifyContent: "center",
  },
  logiSideTwitterIcon: {
    fontSize: 50,
  },
  loginSideWrapper: {
    width: "300px",
  },
  loginSideTitle: {
    fontWeight: 800,
    fontSize: 32,
    marginBottom: 25,
    marginTop: 20,
  },
}));

function SignIn() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <section className={classes.dislcamerSide}>
        <TwitterIcon className={classes.dislcamerSideTwitterIcon} />
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon
            color="primary"
            className={classes.logiSideTwitterIcon}
          />
          <Typography
            className={classes.loginSideTitle}
            gutterBottom
            variant="h1"
          >
            Happening now
          </Typography>
          <Typography>
            <b>Join Twitter today.</b>
          </Typography>
          <br />
          <Button
            style={{ marginBottom: 10, borderRadius: 30, fontWeight: 600 }}
            variant="contained"
            color="primary"
            fullWidth
          >
            Sign Up
          </Button>
          <Button
            style={{ borderRadius: 30, fontWeight: 600 }}
            variant="outlined"
            color="primary"
            fullWidth
          >
            Log In
          </Button>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
