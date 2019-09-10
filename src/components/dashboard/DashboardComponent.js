import React from "react";

import { Container } from "@material-ui/core";

import UserCard from "../../screens/UserCard";
import TabComponent from "../tab/TabComponent";

import { connect } from "react-redux";

const DashboardComponent = props => {
  return (
    <Container maxWidth="lg">
      <UserCard userName={props.userName} userPicture={props.userPicture} />
      <TabComponent />
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
