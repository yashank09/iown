import React from "react";

import { Hidden, Grid } from "@material-ui/core";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Label,
  Legend
} from "recharts";

const styles = {
  container: {
    backgroundColor: "#14111a",
    boxShadow: "3px 5px 8px #14111a"
  }
};

export default props => {
  const computeTotalValue = () => {
    var sum = 0;
    props.data.map(i => (sum += i.startingValue));
    console.log(sum);
  };

  const COLORS = ["#0088FE", "#FF8042", "#A2D", "#EA0", "#00AE00"];
  console.log(computeTotalValue());
  return (
    <>
      <Hidden xsDown>
        <Grid item md={6} style={styles.container}>
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
                stroke="none"
              >
                {props.data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
                <Label
                  value="Value"
                  position="center"
                  style={{ fill: "red" }}
                />
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Grid>
      </Hidden>

      <Hidden smUp>
        <Grid item xs={12} style={styles.container}>
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
                label
                labelLine={false}
              >
                {props.data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
                <Label
                  value="Value"
                  position="center"
                  style={{ fill: "red" }}
                />
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Grid>
      </Hidden>
    </>
  );
};
