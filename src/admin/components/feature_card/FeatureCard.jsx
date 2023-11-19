import React from "react";
import "./feature_card.css";
import { Box, Stack, Typography } from "@mui/material";
import {MiniFeatureChart } from "../../components/";
const FeatureCard = (props) => {
  return (
    <div className="feauter_card">
      <Box sx={{ mb: 1 }}>
        <Typography
          variant="p"
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            padding: "5px 0",
            color: "#444",
            textTransform:'capitalize',
            fontFamily:'tahoma'
          }}
        >{props.title}</Typography>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography
            variant="h5"
            sx={{
              fontSize: "20px",
              fontWeight: "800",
              padding: "5px 0",
              color: "#333",
              textTransform:'capitalize'
            }}
          >{props.number}</Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "300",
              padding: "5px 0",
              color: "#919191",
              textTransform:'capitalize'
            }}
          >{props.date}</Typography>
        </Stack>
      </Box>
      <MiniFeatureChart
        barColors={["#319EF4", "#25c628", "#111"]}
        barSize={5}
        numborOfBar={3}
        XAxis={false}
        YAxis={false}
        Legend={false}
        CartesianGrid={false}
        Tooltip={false}
        MT={5}
        ML={20}
        MR={30}
        MB={5}
        BarHeight={60}
        barRadius={10}
        StrokeBorderColor={"#ff3"}
      />
    </div>
  );
};

export default FeatureCard;
