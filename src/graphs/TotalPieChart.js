import React, { useState } from "react";

import { Hidden, Grid } from "@material-ui/core";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
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
  //Add more colors, more Options
  const COLORS = ["#0088FE", "#FF8042", "#A2D", "#EA0", "#00AE00"];

  const renderActiveShape = props => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      percent,
      value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <>
        <Hidden xsDown>
          <g>
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={startAngle}
              endAngle={endAngle}
              fill={fill}
            />
            <Sector
              cx={cx}
              cy={cy}
              startAngle={startAngle}
              endAngle={endAngle}
              innerRadius={outerRadius + 6}
              outerRadius={outerRadius + 10}
              fill={fill}
            />
            <path
              d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
              stroke={fill}
              fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
              x={ex + (cos >= 0 ? 1 : -1) * 12}
              y={ey}
              textAnchor={textAnchor}
              fill={fill}
            >{`$ ${value}`}</text>
            <text
              x={ex + (cos >= 0 ? 1 : -1) * 12}
              y={ey}
              dy={18}
              textAnchor={textAnchor}
              fill={fill}
            >
              {`${(percent * 100).toFixed(2)}%`}
            </text>
          </g>
        </Hidden>

        <Hidden smUp>
          <g>
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={startAngle}
              endAngle={endAngle}
              fill={fill}
            />
            <Sector
              cx={cx}
              cy={cy}
              startAngle={startAngle}
              endAngle={endAngle}
              innerRadius={outerRadius + 6}
              outerRadius={outerRadius + 10}
              fill={fill}
            />
            <text
              x={ex + (cos >= 0 ? 1 : -1) * -28}
              y={ey}
              textAnchor={textAnchor}
              fill={fill}
            >{`$ ${value}`}</text>
            <text
              x={ex + (cos >= 0 ? 1 : -1) * -28}
              y={ey}
              dy={18}
              textAnchor={textAnchor}
              fill={fill}
            >
              {`${(percent * 100).toFixed(2)}%`}
            </text>
          </g>
        </Hidden>
      </>
    );
  };

  const [activeIndex, changeIndex] = useState(0);

  const onPieEnter = (data, index) => {
    changeIndex(index);
  };

  return (
    <>
      <Hidden xsDown>
        <Grid item sm={6} style={styles.container}>
          <ResponsiveContainer width="100%" minHeight="380px">
            <PieChart>
              <Pie
                data={props.data.map(i => ({
                  name: i.cryptoName,
                  value: i.startingValue
                }))}
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                onMouseEnter={onPieEnter}
                innerRadius={80}
                outerRadius={120}
                dataKey="value"
                stroke="none"
              >
                {props.data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
                <Label
                  value="Portfolio"
                  position="center"
                  style={{ fill: "#f83566" }}
                />
              </Pie>
              <Legend iconType="diamond" />
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
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                onMouseEnter={onPieEnter}
                innerRadius={80}
                outerRadius={120}
                dataKey="value"
                stroke="none"
              >
                {props.data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
                <Label
                  value="Portfolio"
                  position="center"
                  style={{ fill: "#f83566" }}
                />
              </Pie>
              <Legend iconType="diamond" />
            </PieChart>
          </ResponsiveContainer>
        </Grid>
      </Hidden>
    </>
  );
};
