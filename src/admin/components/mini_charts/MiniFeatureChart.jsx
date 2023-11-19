import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
} from "recharts";
import { Box, Stack, Typography } from "@mui/material";
const MiniFeauterChart = (props) => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div
      className="mini_feauture_bar_chart"
      style={{ width:"250px", height: " 50px" }}
    >
      <ResponsiveContainer width="100%" height={props.BarHeight}>
        <BarChart
          data={data}
          margin={{
            top: props.MT,
            right: props.MR,
            left: props.ML,
            bottom: props.MB,
          }}
        >
          {props.Tooltip == true ? <Tooltip /> : ""}
          {props.XAxis === true ? <XAxis /> : ""}
          {props.YAxis === true ? <YAxis /> : ""}
          {props.Legend === true ? <Legend /> : ""}
          {props.CartesianGrid === true ? <CartesianGrid /> : ""}
          <Bar
            dataKey="uv"
            fill={props.barColors[0]}
            barSize={props.barSize}
            shape={<Rectangle fill="pink" stroke={props.StrokeBorderColor} radius={props.barRadius} />}
          />
          <Bar
            dataKey="uv"
            fill={props.barColors[1]}
            barSize={props.barSize}
            shape={<Rectangle fill="pink" stroke={props.StrokeBorderColor} radius={props.barRadius} />}
          />
          <Bar
            dataKey="amt"
            fill={props.barColors[2]}
            barSize={props.barSize}
            shape={<Rectangle fill="pink" stroke={props.StrokeBorderColor} radius={props.barRadius} />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MiniFeauterChart;
