import React from "react";

import { Hidden, Grid, Typography } from "@material-ui/core";

import { connect } from "react-redux";

import { withRouter } from "react-router";
import { PieChart, Pie, Cell, Legend } from "recharts";

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

const width = 380;
const widthSm = 300;
const height = 420;
const heightSm = 340;

export default () => (
  <>
    <Typography variant="h3">Total IOWN</Typography>
    <Grid container style={{ position: "relative", top: -28 }}>
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
            ))}
            <Legend />
          </PieChart>
        </Grid>
        <Grid item sm={4}>
          <PieChart width={width} height={height}>
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
            ))}
            <Legend />
          </PieChart>
        </Grid>
        <Grid item sm={4}>
          <PieChart width={width} height={height}>
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
            ))}
            <Legend />
          </PieChart>
        </Grid>
      </Hidden>

      <Hidden smUp>
        <Grid item xs={12}>
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
            ))}
            <Legend />
          </PieChart>
        </Grid>
        <Grid item xs={12}>
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
            ))}
            <Legend />
          </PieChart>
        </Grid>
        <Grid item xs={12}>
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
            ))}
            <Legend />
          </PieChart>
        </Grid>
      </Hidden>
    </Grid>
  </>
);
