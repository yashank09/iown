import React from "react";

import { Hidden, Grid } from "@material-ui/core";

import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

import { connect } from "react-redux";

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

class TotalPieChart extends React.PureComponent {
  render() {
    this.props.cryptos.map(i => console.log(i.startingValue + "  "));
    return (
      <>
        <Hidden xsDown>
          <Grid item md={4}>
            <ResponsiveContainer width="100%" minHeight="340px">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={80}
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
            </ResponsiveContainer>
          </Grid>
        </Hidden>

        <Hidden smUp>
          <Grid item xs={12} style={{ marginTop: 23 }}>
            <ResponsiveContainer width="100%" minHeight="340px">
              <PieChart>
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
            </ResponsiveContainer>
          </Grid>
        </Hidden>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    cryptos: state.cryptos.cryptos,
    cryptoCurrentPrices: state.cryptos.currentPrices
  };
};

export default connect(mapStateToProps)(TotalPieChart);
