import React, { Component } from "react";
import "./LoginComponent.css";

import Logo from "../../screens/logo/TopLogo";

import { Hidden, Grid, Container, Typography } from "@material-ui/core";

import firebase from "../../Firebase";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUserInfo } from "../../actions/userActions";

class LoginComponent extends Component {
  render() {
    const handleLoginClick = e => {
      let provider;
      if (e.target.name === "Google Signin") {
        provider = new firebase.auth.GoogleAuthProvider();
      } else if (e.target.name === "Facebook Signin") {
        provider = new firebase.auth.FacebookAuthProvider();
      } else {
        alert("Login Button Name error");
      }
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // Receiving Token and User Info
          var accessToken = result.credential.accessToken;
          var userName = result.user.displayName;
          var userPicture = result.user.photoURL;

          // Setting User Info State
          this.props.dispatch(setUserInfo(accessToken, userName, userPicture));
          this.props.history.push("/dash");
        })
        .catch(error => {
          var errorCode = error.code;
          // The firebase.auth.AuthCredential type that was used.
          if (errorCode === "auth/account-exists-with-different-credential") {
            alert(
              "You have an existing account with Google. Please login using Google."
            );
          }
        });
    };

    return (
      <>
        <Logo />
        <Container maxWidth={"lg"}>
          <Hidden xsDown>
            <Grid item xs={12}>
              <Typography className="brandText" align="center" variant="h2">
                Track Stocks, Cryptos and Real Estate
              </Typography>
              <Typography
                className="brandTextLower"
                align="center"
                variant="h2"
              >
                All in one Place.
              </Typography>
            </Grid>
          </Hidden>

          <Hidden smUp>
            <Grid item xs={12}>
              <Typography className="brandText" align="center" variant="h2">
                Track Stocks, Cryptos and Real Estate
              </Typography>
              <Typography
                className="brandTextLowerPhone"
                align="center"
                variant="h2"
              >
                All in one Place.
              </Typography>
            </Grid>
          </Hidden>

          <Grid item lg={12} className="loginIcons">
            <button
              className="loginBtn loginBtn--google"
              name="Google Signin"
              onClick={e => handleLoginClick(e)}
            >
              Login with Google
            </button>
          </Grid>

          <Grid item lg={12} className="loginIcons">
            <button
              className="loginBtn loginBtn--facebook"
              name="Facebook Signin"
              onClick={e => handleLoginClick(e)}
            >
              Login with Facebook
            </button>
          </Grid>
        </Container>
      </>
    );
  }
}

export default connect(null)(withRouter(LoginComponent));
