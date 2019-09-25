import React from "react";

import { Grid, Typography } from "@material-ui/core";

import { connect } from "react-redux";

import TotalPieChart from "../../../graphs/TotalPieChart";

function TotalIownCharts(props) {
  return (
    <>
      <Typography variant="h2" style={{ marginBottom: 8 }}>
        Total IOWN
      </Typography>

      <Grid container>
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
