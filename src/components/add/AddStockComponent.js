import React from "react";
import { Grid, Typography, TextField } from "@material-ui/core";

export default () => {
  // const API_KEY =
  //   "hRb4i6EsMpQfIt7Obykkhh5FW8a7ULsU9TQft6PRUSJcDy6YIL2gb0U6w6bE";

  return (
    <>
      <Grid container style={{ marginBottom: 32 }}>
        <Grid item xs={12}>
          <Typography variant="h3">Add Stock</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography style={{ paddingTop: 10 }}>
            Search invested Stock
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField placeholder="Enter stock name/symbol" />
        </Grid>
      </Grid>
    </>
  );
};
