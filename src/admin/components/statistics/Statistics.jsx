import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Statistics = (props) => {
  const data = [
    {
      name: "Jan",
      Earning: 4400,
      Order: 2200,
      Profit: 3200,
      Invest: 4320,
    },
    {
      name: "Feb",
      Earning: 3000,
      Order: 1398,
      Profit: 2310,
      Invest: 4210,
    },
    {
      name: "Mars",
      Earning: 2000,
      Order: 9800,
      Profit: 2590,
      Invest: 3200,
    },
    {
      name: "Apr",
      Earning: 2780,
      Order: 3908,
      Profit: 2500,
      Invest: 2100,
    },
    {
      name: "May",
      Earning: 1890,
      Order: 4800,
      Profit: 2681,
      Invest: 1340,
    },
    {
      name: "Jun",
      Earning: 2390,
      Order: 3800,
      Profit: 2700,
      Invest: 4210,
    },
    {
      name: "Jul",
      Earning: 3490,
      Order: 4300,
      Profit: 600,
      Invest: 760,
    },
    {
      name: "Aug",
      Earning: 2490,
      Order: 3300,
      Profit: 900,
      Invest: 670,
    },
    {
      name: "Sep",
      Earning: 1490,
      Order: 2300,
      Profit: 1100,
      Invest: 530,
    },
    {
      name: "Oct",
      Earning: 1490,
      Order: 2500,
      Profit: 1400,
      Invest: 3240,
    },
    {
      name: "Nov",
      Earning: 2490,
      Order: 2300,
      Profit: 1900,
      Invest: 5400,
    },
    {
      name: "Dec",
      Earning: 4490,
      Order: 3300,
      Profit: 5900,
      Invest: 2300,
    },
  ];
  return (
    <div style={{ width: "100%", height: "450px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data}>
          {props.CartesianGrid === true ? (
            <CartesianGrid strokeDasharray="3 3" />
          ) : (
            ""
          )}
          {props.Tooltip == true ? <Tooltip /> : ""}
          {props.XAxis === true ? (
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          ) : (
            ""
          )}
          {props.YAxis === true ? <YAxis /> : ""}
          {props.Legend === true ? <Legend /> : ""}
          <Line
            type="monotone"
            dataKey="Order"
            stroke={props.barColors[1]}
            activeDot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="Profit"
            stroke={props.barColors[0]}
            activeDot={{ r: 5 }}
          />
          <Line type="monotone" dataKey="Earning" stroke={props.barColors[2]} />
          <Line type="monotone" dataKey="Invest" stroke={props.barColors[3]} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
