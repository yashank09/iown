import React from "react";

import { Grid, Typography } from "@material-ui/core";

import { connect } from "react-redux";

import TotalPieChart from "../../../graphs/TotalPieChart";

function TotalIownCharts(props) {
  return (
    <>
      <Typography variant="h3">Total IOWN</Typography>
      <Grid>
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
