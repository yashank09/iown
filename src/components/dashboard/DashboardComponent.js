import React, { PureComponent } from "react";

import UserCard from "../../screens/UserCard";
import TabComponent from "../tab/TabComponent";

import { connect } from "react-redux";

import { fetchData } from "../../actions/cryptoActions";

class DashboardComponent extends PureComponent {
  componentDidMount() {
    this.props.dispatch(fetchData());
  }

  render() {
    return (
      <>
        <UserCard
          userName={this.props.userName}
          userPicture={this.props.userPicture}
        />
        <TabComponent />
      </>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return {
    userName: user.userName,
    userPicture: user.userPicture
  };
};

export default connect(mapStateToProps)(DashboardComponent);
