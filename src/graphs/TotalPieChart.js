import React from "react";

import { Hidden, Grid } from "@material-ui/core";

import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

export default props => {
  const COLORS = ["#0088FE", "#FF8042", "#A2D", "#EA0"];
  return (
    <>
      <Hidden xsDown>
        <Grid item md={4}>
          <ResponsiveContainer width="100%" minHeight="380px">
            <PieChart>
              <Pie
                data={props.data.map(i => ({
                  name: i.cryptoName,
                  value: i.startingValue
                }))}
                innerRadius={80}
                outerRadius={120}
                dataKey="value"
                label
                labelLine={false}
              >
                {props.data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Grid>
      </Hidden>

      <Hidden smUp>
        <Grid item xs={12}>
          <ResponsiveContainer width="100%" minHeight="380px">
            <PieChart>
              <Pie
                data={props.data.map(i => ({
                  name: i.cryptoName,
                  value: i.startingValue
                }))}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                dataKey="value"
              >
                {props.data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Grid>
      </Hidden>
    </>
  );
};
