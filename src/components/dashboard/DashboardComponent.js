import React, { PureComponent } from "react";

import { Container } from "@material-ui/core";

import UserCard from "../../screens/UserCard";
import TabComponent from "../tab/TabComponent";

import { connect } from "react-redux";

import firebase from "../../Firebase";

import { fetchCryptoDatabase } from "../../actions/cryptoActions";

class DashboardComponent extends PureComponent {
  constructor() {
    super();

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const userId = user.uid;
        const database = firebase.database();
        database
          .ref("/users/" + userId + "/cryptos/")
          .once("value", snapshot => {
            if (snapshot && snapshot.exists()) {
              const fetchedData = snapshot.val();
              Object.values(fetchedData).map(i => {
                const {
                  cryptoName,
                  cryptoSymbol,
                  totalAmount,
                  startingValue,
                  timeStamp
                } = i;

                this.props.dispatch(
                  fetchCryptoDatabase({
                    cryptoName,
                    cryptoSymbol,
                    totalAmount,
                    startingValue,
                    timeStamp
                  })
                );
                return null;
              });
            }
          });
      } else {
        alert("User Not Logged In");
        return;
      }
    });
  }

  render() {
    return (
      <Container maxWidth="lg">
        <UserCard
          userName={this.props.userName}
          userPicture={this.props.userPicture}
        />
        <TabComponent />
      </Container>
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
