import React from "react";

import { Hidden, Grid, Typography } from "@material-ui/core";

import { connect } from "react-redux";

import TotalPieChart from "../../../graphs/TotalPieChart";

function TotalIownCharts(props) {
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
    cryptos: state.cryptos.cryptos
  };
};

export default connect(mapStateToProps)(TotalIownCharts);
