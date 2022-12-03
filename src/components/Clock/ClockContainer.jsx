import React from "react";
import { Box } from "@mui/material";
import CustomTimePicker from "./CustomTimePicker";
import SleepButton from "./SleepButton";

const ClockContainer = (props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="50%"
      mt="10%"
      sx={{ flexDirection: "column" }}
    >
      <CustomTimePicker light={props.light} />
      <SleepButton
        setLight={props.setLight}
        light={props.light}
        setAlarmTime={props.setAlarmTime}
      />
    </Box>
  );
};

export default ClockContainer;
