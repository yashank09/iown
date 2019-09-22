import React from "react";

import { Hidden, Grid, Typography } from "@material-ui/core";

import { connect } from "react-redux";

import { withRouter } from "react-router";
import { PieChart } from "react-chartkick";
import "chart.js";

export default () => (
  <>
    <Typography variant="h3">Total IOWN</Typography>
    <Grid container>
      <Hidden xsDown>
        <Grid item sm={4}>
          <PieChart
            data={[["He", 50], ["He", 50]]}
            legend="bottom"
            donut={true}
          />
        </Grid>
        <Grid item sm={4}>
          <PieChart
            data={[["He", 40], ["He", 50], ["Lol", 80]]}
            legend="bottom"
            donut={true}
          />
        </Grid>
        <Grid item sm={4}>
          <PieChart
            data={[["He", 20], ["He", 80]]}
            legend="bottom"
            donut={true}
          />
        </Grid>
      </Hidden>

      <Hidden smUp>
        <Grid item xs={12}>
          <PieChart
            data={[["He", 50], ["He", 50]]}
            legend="bottom"
            donut={true}
          />
        </Grid>
        <Grid item xs={12}>
          <PieChart
            data={[["He", 40], ["He", 50], ["Lol", 80]]}
            legend="bottom"
            donut={true}
          />
        </Grid>
        <Grid item xs={12}>
          <PieChart
            data={[["He", 20], ["He", 80]]}
            legend="bottom"
            donut={true}
          />
        </Grid>
      </Hidden>
    </Grid>
  </>
);
