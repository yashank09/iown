import React from "react";

import { Hidden, Grid } from "@material-ui/core";

import { PieChart, Pie, Cell, Legend } from "recharts";

import { width, widthSm, height, heightSm } from "../constants/constants";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AAE"];

const data = [
  {
    name: "Group A",
    value: 400
  },
  {
    name: "Group B",
    value: 300
  },
  {
    name: "Group C",
    value: 300
  },
  {
    name: "Group D",
    value: 200
  }
];

export default () => {
  return (
    <>
      <Hidden xsDown>
        <Grid item sm={4}>
          <PieChart width={width} height={height}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={120}
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </Grid>
      </Hidden>

      <Hidden smUp>
        <Grid item xs={12} style={{ margin: "0 auto" }}>
          <PieChart width={widthSm} height={heightSm}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={120}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </Grid>
      </Hidden>
    </>
  );
};
