import React, { PureComponent } from "react";
import axios from "axios";

import { Typography } from "@material-ui/core";

import { connect } from "react-redux";

import { withRouter } from "react-router";

import {
  fetchCryptoPricesStart,
  fetchCryptoPriceSuccess,
  fetchCryptoPriceError,
  addCryptoStart
} from "../../../actions/cryptoActions";

import AddCryptoComponent from "../../add/AddCryptoComponent";
import AddButton from "../../../screens/buttons/AddButton";
import AddButtonFab from "../../../screens/buttons/AddButtonFab";
import AddStockComponent from "../../add/AddStockComponent";

import { PieChart } from "react-chartkick";
import "chart.js";

class TotalIownComponent extends PureComponent {
  componentDidMount() {
    this.fetchPrices();
    setInterval(this.fetchPrices, 15000);
  }

  fetchPrices = () => {
    if (this.props.cryptos.length === 0) return;
    this.props.dispatch(fetchCryptoPricesStart());
    axios
      .get(
        `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${this.props.cryptos.map(
          i => i.cryptoSymbol
        )}&tsyms=${this.props.currency}`
      )
      .then(res => {
        if (res.data.Response === "Error") {
          this.props.dispatch(fetchCryptoPriceError(res.data.Message));
        } else {
          this.props.dispatch(fetchCryptoPriceSuccess(res.data));
        }
      })
      .catch(err => this.props.dispatch(fetchCryptoPriceError(err.message)));
  };

  render() {
    const addCrypto = () => {
      this.props.dispatch(addCryptoStart());
    };

    return this.props.isAddingCrypto ? (
      <AddCryptoComponent />
    ) : this.props.isAddingStock ? (
      <AddStockComponent />
    ) : this.props.cryptos.length || this.props.stocks.length ? (
      <>
        <PieChart data={[["Blueberry", 44], ["Strawberry", 23]]} />
        <AddButtonFab addCrypto={addCrypto} />
      </>
    ) : (
      <>
        <Typography variant="h3">Total IOWN</Typography>
        <p>
          Add Digital Assets and Track their Values. <br /> Let's add your first
          IOWN.
        </p>
        <AddButton addCrypto={addCrypto} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAddingCrypto: state.cryptos.isAddingCrypto,
    isAddingStock: state.stocks.isAddingStock
  };
};

export default connect(mapStateToProps)(withRouter(TotalIownComponent));
