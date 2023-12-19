import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  ComposedChart,
  XAxis,
  Area,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import {
  Cloud,
  Delete,
  Edit,
  TrendingDown,
  TrendingUp,
} from "@mui/icons-material";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import DashboardFooter from "../../HeaderFooter/DashboardFooter";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { salseData } from "../../../../utils/static/salseData";
import CircularProgress from "@mui/material/CircularProgress";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import {
  IconButton,
  Paper,
  Switch,
  TableContainer,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
// import Table from "react-bootstrap/Table";
import DataTable from "datatables.net-dt";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "./Dashboard.css";
import DailyTaskAds from "../daily_task_ads/DailyTaskAds";
import TodoList from "../todo_list/TodoList";
/*******************************************
 * CHART STYLE START HERE
 ******************************************/
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
/*******************************************
 * CHART STYLE END HERE
 ******************************************/
const Dashboard = () => {
  let [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());
  let [LocalDate, setLocalDate] = useState(new Date().toLocaleDateString());
  const [weatherData, setWeatherData] = useState(null);
  const [progress, setProgress] = useState(0);
  let table = new DataTable("#order_data");
  let [newTodo, setNewTodo] = useState([]);
  const [open, setOpen] = useState(true);
  const [city, setCity] = useState("");
  /*******************************************
   * CALL LOCAL DATE AND TIME START HERE
   ******************************************/
  useEffect(() => {
    const intervalId = setInterval(() => {
      setLocalTime(new Date().toLocaleTimeString());
    }, 1000);
    const dateInterval = setInterval(() => {
      setLocalDate(new Date().toLocaleDateString());
    }, 1000 * 60 * 60);
    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId, dateInterval);
  }, []);
  /*********************************
   * WEATHER DATA API START HERE
   ********************************/
  const apiKey = "7e6041da377602e73a760e4e4a598732";
  useEffect(() => {
    // Function to fetch weather data
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    if (city) {
      fetchWeatherData();
    }
  }, [city, apiKey]);
  /*********************************************
   * CONVERT DATE FORMATE INTO MONTH END HERE
   ********************************************/
  function convertDateFormat(inputDate) {
    const parts = inputDate.split("/");
    const month = parseInt(parts[0], 10);
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const convertedDate = `${months[month - 1]} ${day} ${year}`;
    return convertedDate;
  }
  const inputDate = LocalDate;
  const convertedDate = convertDateFormat(inputDate);
  /*********************************
   * TO-DO LIST START HERE
   ********************************/
  const save_todo = () => {};
  /********************************************
   * ALL ANALYTICE DATA SET START HERE
   *******************************************/
  const diposit_data = [
    {
      name: "Page A",
      uv: 320,
      pv: 360,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 300,
      pv: 198,
      amt: 210,
    },
  ];
  const balance_data = [
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
  ];
  const revenue_data = [
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
  ];
  const salse_data = [
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
  ];
  const radial_data = [
    {
      name: "1990",
      uv: 31.47,
      pv: 2400,
      fill: "#8884d8",
    },
    {
      name: "2005",
      uv: 26.69,
      pv: 4567,
      fill: "#83a6ed",
    },
    {
      name: "2013",
      uv: 15.69,
      pv: 1398,
      fill: "#8dd1e1",
    },
    {
      name: "2020",
      uv: 8.22,
      pv: 9800,
      fill: "#82ca9d",
    },
    {
      name: "2035",
      uv: 8.63,
      pv: 3908,
      fill: "#a4de6c",
    },
    {
      name: "2042",
      uv: 2.63,
      pv: 4800,
      fill: "#d0ed57",
    },
    {
      name: "2057",
      uv: 9.67,
      pv: 4800,
      fill: "#ffc658",
    },
  ];
  /********************************
   * SET PROGRESS TIMER START HERE
   ********************************/
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  /************************************************
   * CIRCULAR PORGRESS IN ADMIN CODE START HERE
   * **********************************************/
  const handleClose = () => {
    setOpen(false);
  };
  setTimeout(() => {
    setOpen(false);
  }, 2000);
  /**********************************************
   * CIRCULAR PORGRESS IN ADMIN CODE END HERE
   ***********************************************/
  return (
    <>
      <div style={{ zIndex: "10000" }}>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
      <div className="dashboard_main">
        <div className="container-fluid">
          <div className="dashboard_wrapper">
            {/* FEATURES SECTION START HERE */}
            <div className="features">
              <div className="row">
                <div className="col-md-3">
                  <div
                    className="analytic_item"
                    style={{ backgroundColor: "orange" }}
                  >
                    <div className="analytic_item_head">
                      <span>Earning</span>
                      <span>2023 - 2024</span>
                    </div>
                    <div className="analytic_item_body">
                      <span>$30,00.03</span>
                    </div>
                    <div className="analytic_item_footer">
                      <span>
                        <TrendingUp />
                      </span>
                      <span>+20%</span>
                      <span>today earning report</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div
                    className="analytic_item"
                    style={{ backgroundColor: "dodgerblue" }}
                  >
                    <div className="analytic_item_head">
                      <span>today earning</span>
                      <span>2023 - 2024</span>
                    </div>
                    <div className="analytic_item_body">
                      <span>$30,00.03</span>
                    </div>
                    <div className="analytic_item_footer">
                      <span>
                        <TrendingUp />
                      </span>
                      <span>+20%</span>
                      <span>lifetime earning report</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div
                    className="analytic_item"
                    style={{ backgroundColor: "#39cd3c" }}
                  >
                    <div className="analytic_item_head">
                      <span>monthly earning</span>
                      <span>2023 - 2024</span>
                    </div>
                    <div className="analytic_item_body">
                      <span>$30,00.03</span>
                    </div>
                    <div className="analytic_item_footer">
                      <span>
                        <TrendingDown />
                      </span>
                      <span>+20%</span>
                      <span>Since Last Year</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div
                    className="analytic_item"
                    style={{ backgroundColor: "skyblue" }}
                  >
                    <div className="analytic_item_head">
                      <span>total balance</span>
                      <span>2023 - 2024</span>
                    </div>
                    <div className="analytic_item_body">
                      <span>$30,00.03</span>
                    </div>
                    <div className="analytic_item_footer">
                      <span>
                        <TrendingUp />
                      </span>
                      <span>+20%</span>
                      <span>Since Last Year</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* CHART SECTION START HERE */}
            <section className="selse_chart">
              <div className="chart_title">
                <h3>recent order</h3>
              </div>
              <div style={{ width: "100%", height: "400px" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    width={500}
                    height={300}
                    data={salseData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="4 4" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="Earning"
                      stroke="#ff7f00"
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="Today_Earning"
                      stroke="#1E90FF"
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="Monthly_Earning"
                      stroke="#39CD3C"
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="Total_Balance"
                      stroke="#07d5ff"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </section>
            {/* smm_product bestsellers SECTION START HERE */}
            <section className="smm_product">
              <div className="smm_product_wrapper">
                <Typography
                  pb={4}
                  fontSize={18}
                  fontWeight={700}
                  textTransform={"uppercase"}
                >
                  Top products
                </Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>name</TableCell>
                        <TableCell>rate per 1000</TableCell>
                        <TableCell>min / max / order</TableCell>
                        <TableCell>description</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Array.from([1, 2, 3, 4, 5, 6, 7, 8], (x) => x + x).map(
                        (task) => (
                          <TableRow>
                            <TableCell>
                              YouTube Likes - Non-Drop [30 Days Refill
                              Guarantee]
                            </TableCell>
                            <TableCell>2.0000</TableCell>
                            <TableCell>1000 / 20000</TableCell>
                            <TableCell>
                              <Button>View</Button>
                            </TableCell>
                          </TableRow>
                        )
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </section>
            {/* USER TASK MANAGEMENT SECTION START HERE */}
            <section className="daily_task">
              <TodoList />
            </section>
            {/* DATE TIME CALENDER WEAHER TODO LIST SECTION START HERE */}
            <section className="date_time_calender">
              <div className="row">
                {/* DATE AND TIME START HERE */}
                <div className="col-md-3">
                  <div className="date_time">
                    <p>{localTime}</p>
                    <p>{convertedDate}</p>
                  </div>
                  <div className="date_time weather">
                    <h2>search recent weather</h2>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Enter City Name"
                      className="mb-3"
                      type="text"
                      placeholder="Enter city name"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    >
                      <Form.Control
                        type="text"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
                    <h3 className="weather_cloud">
                      <Cloud />
                    </h3>
                    {weatherData && (
                      <div>
                        <p className="country_name">
                          Weather in {weatherData.name},{" "}
                          {weatherData.sys.country}
                        </p>
                        <p className="temperature">
                          Temperature: {weatherData.main.temp}°C
                        </p>
                        <p className="current_weather">
                          Weather: {weatherData.weather[0].description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                {/* CALENDER START HERE */}
                <div className="col-md-7">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DateRangeCalendar"]}>
                      <DateRangeCalendar className="custom-calendar" />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
                {/* CALENDER END HERE */}
              </div>
            </section>
          </div>
        </div>
      </div>
      <DashboardFooter />
    </>
  );
};

export default Dashboard;
