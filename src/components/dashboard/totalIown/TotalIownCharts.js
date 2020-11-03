import React from "react";

import { Hidden, Grid, Typography } from "@material-ui/core";

import { connect } from "react-redux";

import TotalPieChart from "../../../graphs/TotalPieChart";

function TotalIownCharts(props) {
  if (props.currentCryptoPrices !== undefined) {
    const prices = [];
    Object.entries(props.currentCryptoPrices).map(i =>
      //Change USD
      prices.push([i[0], i[1]["USD"]])
    );
    const data = prices.reduce((max, i) => (i > max ? i : max), null);
    console.log(data);
  }
  return (
    <>
      <Hidden xsDown>
        <Typography variant="h2" style={{ marginBottom: 8 }}>
          Total IOWN
        </Typography>
      </Hidden>
      <Grid container>
        <TotalPieChart data={props.cryptos} />
        <TotalPieChart data={props.cryptos} />
        <TotalPieChart data={props.cryptos} />
      </Grid>
    </>
  );
}

const mapStateToProps = state => {
  return {
    cryptos: state.cryptos.cryptos,
    currentCryptoPrices: state.cryptos.currentPrices
  };
};

export default connect(mapStateToProps)(TotalIownCharts);
