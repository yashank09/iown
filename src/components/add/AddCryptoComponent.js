import React from "react";

import { Grid, Typography, Button } from "@material-ui/core";
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
    width: 240,
    height: 38,
    borderRadius: 8,
    fontSize: 18,
    color: "red",
    backgroundColor: "white",
    textAlign: "center"
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
    startingCurrentValue: 0,
    quantity: 0,
    currentPrice: null,
    addedProfit: 0
  };

  componentDidUpdate(prevProps, prevState) {
    const { cryptoSymbol, startingCurrentValue } = this.state;
    if (
      prevState.cryptoSymbol !== cryptoSymbol ||
      prevState.startingCurrentValue !== startingCurrentValue
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
    const amount = Number(value.replace(/[^0-9\.]+/g, ""));
    this.setState({ startingCurrentValue: amount });
  };

  handleAddedProfitChange = value => {
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
    const startingCurrentValueFormated = currency(
      this.state.startingCurrentValue,
      {
        precision: 6
      }
    );
    const currentPriceFormatted = currency(this.state.currentPrice, {
      precision: 6
    });
    const quantity = startingCurrentValueFormated.divide(currentPriceFormatted);
    this.setState({
      quantity: quantity.value
    });
  };

  submitAddCrypto = () => {
    const {
      hasCryptoName,
      cryptoSymbol,
      quantity,
      startingCurrentValue,
      addedProfit
    } = this.state;

    const userId = firebase.auth().currentUser.uid;
    const database = firebase.database();
    const timeStamp = new Date().toLocaleDateString();
    database.ref("users/" + userId + "/cryptos").push({
      hasCryptoName,
      cryptoSymbol,
      quantity,
      startingCurrentValue,
      addedProfit,
      timeStamp
    });
    this.props.dispatch(
      addCryptoSuccess({
        hasCryptoName,
        cryptoSymbol,
        quantity,
        startingCurrentValue,
        addedProfit,
        timeStamp
      })
    );
  };

  render() {
    return (
      <>
        <Grid container style={{ marginBottom: 32 }}>
          <Grid item xs={12}>
            <Typography variant="h3">Add IOWN</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography style={{ paddingTop: 10 }}>
              Select invested Crypto Currency
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
                <Typography style={{ paddingTop: 23, marginBottom: 32 }}>
                  Current Total Value of Asset
                </Typography>
              </Grid>
              <CurrencyInput
                prefix="$"
                style={styles.currencyInput}
                value={this.state.startingCurrentValue}
                onChangeEvent={e => this.handleAmountChange(e.target.value)}
              />
            </Grid>

            <Grid container style={{ marginBottom: 32 }}>
              <Grid item xs={12} sm={6}>
                <Typography style={{ paddingTop: 6, marginBottom: 32 }}>
                  Enter Current Profit/Loss from Asset
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
                <Typography style={{ paddingTop: 12, marginBottom: 32 }}>
                  Approx. Quantity of IOWN
                </Typography>
                <Typography style={{ paddingBottom: 12 }}>
                  {this.state.quantity}
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Button
                  style={{ marginTop: 23 }}
                  variant="contained"
                  color="primary"
                  onClick={this.submitAddCrypto}
                >
                  Add IOWN
                </Button>
              </Grid>
            </Grid>

            <Grid container style={{ marginBottom: 32 }}></Grid>
          </>
        )}
        {this.state.currentPrice !== null && <></>}
      </>
    );
  }
}

export default connect(null)(AddCryptoComponent);
