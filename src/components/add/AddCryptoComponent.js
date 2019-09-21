import React from "react";

import { Grid, Typography, Button, Tooltip, Input } from "@material-ui/core";

import axios from "axios";

import firebase from "../../Firebase";

import data from "../../assets/coinSymbolOptions.json";

import SelectComponent from "../selector/SelectComponent";

import { connect } from "react-redux";
import { addCryptoSuccess } from "../../actions/cryptoActions";

const styles = {
  currencyInput: {
    margin: "auto",
    width: 260,
    height: 40,
    borderRadius: 8,
    fontSize: 18,
    color: "red",
    backgroundColor: "white",
    textAlign: "center"
  },
  input: {
    margin: "auto",
    width: 260,
    height: 40,
    borderRadius: 8,
    fontSize: 18,
    color: "red",
    backgroundColor: "white",
    paddingLeft: 110
  },
  formContainer: {
    backgroundColor: "#14111a",
    borderRadius: 15,
    boxShadow: "3px 5px 8px #14111a"
  }
};

class AddCryptoComponent extends React.PureComponent {
  state = {
    options: data,
    cryptoSymbol: null,
    cryptoName: null,
    totalAmount: 0,
    currentPrice: null,
    startingValue: 0
  };

  componentDidUpdate(prevProps, prevState) {
    const { cryptoSymbol, totalAmount } = this.state;
    if (
      prevState.cryptoSymbol !== cryptoSymbol ||
      prevState.totalAmount !== totalAmount
    ) {
      this.getCoinValue(cryptoSymbol);
    }
  }

  handleSymbolChange = selectedOption => {
    this.setState({
      cryptoName: selectedOption.label,
      cryptoSymbol: selectedOption.value
    });
  };

  handleAmountChange = value => {
    // eslint-disable-next-line
    const regex = /^\d*\.?\d*$/;
    const amount = regex.exec(value);
    console.log(amount);
    if (amount === null) {
      alert("Please Enter Valid Number");
      this.setState({ totalAmount: 0 });
    } else {
      const startingValue = amount[0] * this.state.currentPrice;
      this.setState({ totalAmount: amount[0], startingValue: startingValue });
    }
  };

  getCoinValue = symbol => {
    //Change ENV variables and Add Currency
    axios
      .get(
        `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD`
      )
      .then(res => {
        if (res.data["USD"] === undefined) {
          alert("Crypto Not Found.");
        } else {
          this.setState({ currentPrice: res.data["USD"] });
        }
      });
  };

  submitAddCrypto = () => {
    const { cryptoName, cryptoSymbol, totalAmount, startingValue } = this.state;

    const userId = firebase.auth().currentUser.uid;
    const database = firebase.database();
    const timeStamp = new Date().toLocaleDateString();
    database.ref("users/" + userId + "/cryptos").push({
      cryptoName,
      cryptoSymbol,
      totalAmount,
      timeStamp,
      startingValue
    });

    this.props.dispatch(
      addCryptoSuccess({
        cryptoName,
        cryptoSymbol,
        totalAmount,
        timeStamp,
        startingValue
      })
    );
  };

  render() {
    return (
      <>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h3">Add IOWN</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography style={{ marginBottom: 28 }}>
              Enter Crypto Symbol
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectComponent
              options={this.state.options}
              handleSymbolChange={this.handleSymbolChange}
            />
          </Grid>
        </Grid>
        {this.state.cryptoName !== null && (
          <>
            <Grid container style={{ marginBottom: 32 }}>
              <Grid item xs={12} sm={6}>
                <Tooltip
                  title="Enter current total amount of Crypto"
                  aria-label="Enter Current total amount of Crypto"
                >
                  <Typography style={{ paddingTop: 23, marginBottom: 28 }}>
                    Total Amount of Crypto
                  </Typography>
                </Tooltip>
              </Grid>
              <Input
                style={styles.input}
                value={this.state.totalAmount}
                onChange={e => this.handleAmountChange(e.target.value)}
              />
            </Grid>

            <Grid container style={styles.formContainer}>
              <Grid item xs={6}>
                <Typography style={{ paddingTop: 12, marginBottom: 8 }}>
                  Est. Value of Crypto
                </Typography>
                <Typography style={{ paddingBottom: 12 }}>
                  $ {this.state.startingValue}
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Button
                  style={{ marginTop: 28 }}
                  variant="contained"
                  color="primary"
                  onClick={this.submitAddCrypto}
                >
                  Add IOWN
                </Button>
              </Grid>
            </Grid>

            <Grid container style={{ marginBottom: 28 }}></Grid>
          </>
        )}
        {this.state.currentPrice !== null && <></>}
      </>
    );
  }
}

export default connect(null)(AddCryptoComponent);
