import React from "react";
import "./DashboardComponent.css";

import { Container, Grid, Typography } from "@material-ui/core";

import ProfilePicture from "../../screens/ProfilePicture";

import { connect } from "react-redux";

const DashboardComponent = props => {
  return (
    <Container maxWidth="lg">
      <ProfilePicture url={props.userPicture} />
      <Typography>{props.userName}</Typography>
    </Container>
  );
};

const mapStateToProps = state => {
  const { user } = state;
  return {
    userName: user.userName,
    userPicture: user.userPicture
  };
};

export default connect(mapStateToProps)(DashboardComponent);
