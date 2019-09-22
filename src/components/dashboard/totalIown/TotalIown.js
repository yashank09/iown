import React from "react";

import { Grid, Typography } from "@material-ui/core";

import TotalPieChart from "../../../graphs/TotalPieChart";

export default () => (
  <>
    <Typography variant="h3">Total IOWN</Typography>
    <Grid>
      <TotalPieChart />
    </Grid>
  </>
);
