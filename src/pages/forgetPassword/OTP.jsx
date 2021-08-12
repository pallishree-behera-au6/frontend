// import "./OTPVerify.css";
import React, { Component } from "react";
import OtpInput from "react-otp-input";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import "../../style.css";

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundColor: "grey",
    height: "50vh",
    textAlign: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function OTP() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      {/* ============= Nav======================== */}
      <nav class=" navbar navbar-expand-lg navbar-dark red darken-2">
        <a class="navbar-brand font-bold mob_75" href="index.html">
          <img src="images/logo.png" class="navbar_logo" />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText1"
          aria-controls="navbarText1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText1"></div>
      </nav>
      {/* =================Nav End================== */}

      <Container component="main" maxWidth="sm">
        <CssBaseline class="card" style="width: 18rem;" />
        <div className={classes.paper}>
          <Grid
            container
            style={{ backgroundColor: "white" }}
            className={classes.grid}
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item container justify="center">
              <Grid item container alignItems="center" direction="column">
                {/* <img
                  className="otp_logo"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                    marginBottom: "25px",
                  }}
                  src="images/logo.png"
                  class="navbar_logo"
                /> */}

                <Grid item>
                  <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
                </Grid>
                <Grid item>
                  <Typography component="h1" variant="h5">
                    Verification Code
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Paper elevation={0}>
                <Typography variant="h6">
                  Please enter the verification code sent to your EmailId
                </Typography>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              container
              justify="center"
              alignItems="center"
              direction="column"
            >
              <Grid item spacing={3} justify="center">
                <OtpInput
                  onChange={(otp) => console.log(otp)}
                  numInputs={6}
                  // separator={<span>-</span>}

                  separator={
                    <span>
                      <strong>.</strong>
                    </span>
                  }
                  inputStyle={{
                    width: "3rem",
                    height: "3rem",
                    margin: "0 1rem",
                    fontSize: "2rem",
                    borderRadius: 4,
                    border: "1px solid rgba(0,0,0,0.3)",
                  }}
                />
              </Grid>
              {/* <Grid item> */}
              {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              color=""
              className={classes.submit}
            >
              Verify
            </Button>
             */}

              <input
                type="submit"
                name="submit"
                value="Verify"
                style={{
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "80%",
                  padding: "10px 0",
                  background: "#c12179",
                  color: "white",
                  marginTop: "35px",
                }}
              />

              {/* </Grid>  */}
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}
