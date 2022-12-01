import React from "react";
import { Box } from "@mui/material";
import TimePicker from "./TimePicker";
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
      <TimePicker light={props.light} />
      <SleepButton setLight={props.setLight} light={props.light} />
    </Box>
  );
};

export default ClockContainer;
