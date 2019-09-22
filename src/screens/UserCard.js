import React from "react";

import { Hidden, Grid, Typography } from "@material-ui/core";

import ProfilePicture from "./ProfilePicture";

const styles = {
  container: {
    display: "flex",
    marginTop: 28,
    marginLeft: 120
  },
  userPictureContainer: {
    textAlign: "center"
  },
  userNameContainer: {
    textAlign: "center",
    marginTop: 32,
    paddingLeft: 12
  },
  userNameContainerSm: {
    textAlign: "center",
    paddingLeft: 12,
    paddingBottom: 12
  }
};

export default props => (
  <>
    <Hidden xsDown>
      <div style={styles.container}>
        <div style={styles.userPictureContainer}>
          <ProfilePicture url={props.userPicture} />
        </div>

        <div style={styles.userNameContainer}>
          <Typography>Welcome, {props.userName}</Typography>
        </div>
      </div>
    </Hidden>

    <Hidden smUp>
      <Grid container>
        <Grid item xs={12}>
          <div style={styles.userPictureContainer}>
            <ProfilePicture url={props.userPicture} />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style={styles.userNameContainerSm}>
            <Typography>Welcome, {props.userName}</Typography>
          </div>
        </Grid>
      </Grid>
    </Hidden>
  </>
);
