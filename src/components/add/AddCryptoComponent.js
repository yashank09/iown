import React from "react";

import { Grid, Typography, Button, Tooltip, Input } from "@material-ui/core";
import CurrencyInput from "react-currency-input";

import axios from "axios";

import firebase from "../../Firebase";

import * as currency from "currency.js";
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
    paddingLeft: 120
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
    hasCryptoName: null,
    totalAmount: 0,
    quantity: 0,
    currentPrice: null,
    addedProfit: 0
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
      hasCryptoName: selectedOption.label,
      cryptoSymbol: selectedOption.value
    });
  };

  handleAmountChange = value => {
    // eslint-disable-next-line
    const regex = /^\d*\.?\d*$/;
    const amount = regex.exec(value);
    console.log(amount);
    this.setState({ totalAmount: amount });
  };

  handleAddedProfitChange = value => {
    // eslint-disable-next-line
    const amount = Number(value.replace(/[^0-9\.]+/g, ""));
    this.setState({ addedProfit: amount });
  };

  getCoinValue = symbol => {
    //Change ENV variables and Add Currency
    axios
      .get(
        `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD`
      )
      .then(res => this.setState({ currentPrice: res.data["USD"] }))
      .then(this.computeCurrentTotal);
  };

  computeCurrentTotal = () => {
    const totalAmountFormated = currency(this.state.totalAmount, {
      precision: 6
    });
    const currentPriceFormatted = currency(this.state.currentPrice, {
      precision: 6
    });
    const quantity = totalAmountFormated.divide(currentPriceFormatted);
    this.setState({
      quantity: quantity.value
    });
  };

  submitAddCrypto = () => {
    const {
      hasCryptoName,
      cryptoSymbol,
      quantity,
      totalAmount,
      addedProfit
    } = this.state;

    const userId = firebase.auth().currentUser.uid;
    const database = firebase.database();
    const timeStamp = new Date().toLocaleDateString();
    database.ref("users/" + userId + "/cryptos").push({
      hasCryptoName,
      cryptoSymbol,
      quantity,
      totalAmount,
      addedProfit,
      timeStamp
    });
    this.props.dispatch(
      addCryptoSuccess({
        hasCryptoName,
        cryptoSymbol,
        quantity,
        totalAmount,
        addedProfit,
        timeStamp
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
              Select Crypto to Add
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectComponent
              options={this.state.options}
              handleSymbolChange={this.handleSymbolChange}
            />
          </Grid>
        </Grid>
        {this.state.hasCryptoName !== null && (
          <>
            <Grid container style={{ marginBottom: 32 }}>
              <Grid item xs={12} sm={6}>
                <Tooltip
                  title="Enter total number of Crypto"
                  aria-label="Enter total number of Crypto"
                >
                  <Typography style={{ paddingTop: 23, marginBottom: 28 }}>
                    Total Number of Crypto
                  </Typography>
                </Tooltip>
              </Grid>
              <Input
                style={styles.input}
                value={this.state.totalAmount}
                onChange={e => this.handleAmountChange(e.target.value)}
              />
            </Grid>

            <Grid container style={{ marginBottom: 32 }}>
              <Grid item xs={12} sm={6}>
                <Typography style={{ paddingTop: 6, marginBottom: 28 }}>
                  Current Profit/Loss from Asset
                </Typography>
              </Grid>
              <CurrencyInput
                prefix="$"
                style={styles.currencyInput}
                value={this.state.addedProfit}
                onChangeEvent={e =>
                  this.handleAddedProfitChange(e.target.value)
                }
              />
            </Grid>

            <Grid container style={styles.formContainer}>
              <Grid item xs={6}>
                <Typography style={{ paddingTop: 12, marginBottom: 8 }}>
                  Approx. Quantity of IOWN
                </Typography>
                <Typography style={{ paddingBottom: 12 }}>
                  {this.state.quantity}
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
