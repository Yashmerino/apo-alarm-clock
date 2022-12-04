import React, { useState } from "react";
import { Box } from "@mui/material";
import CustomTimePicker from "./CustomTimePicker";
import SleepButton from "./SleepButton";
import { returnCurrentTime } from "../../utils";

const ClockContainer = (props) => {
  const [value, setValue] = useState(null);
  const [alarm, setAlarm] = useState(null);

  const wakeUp = () => {
    if (returnCurrentTime() === alarm) console.log("Wake up!");
  };

  setInterval(() => wakeUp(), 10000);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="50%"
      mt="10%"
      sx={{ flexDirection: "column" }}
    >
      <CustomTimePicker
        light={props.light}
        value={value}
        setValue={setValue}
        setAlarm={setAlarm}
      />
      <SleepButton
        setLight={props.setLight}
        light={props.light}
        alarm={alarm}
      />
    </Box>
  );
};

export default ClockContainer;
