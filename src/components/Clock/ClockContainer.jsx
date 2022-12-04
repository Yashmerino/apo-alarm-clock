import React, { useState } from "react";
import { Box } from "@mui/material";
import CustomTimePicker from "./CustomTimePicker";
import SleepButton from "./SleepButton";
import { returnCurrentTime, sound } from "../../utils";

const ClockContainer = (props) => {
  const [alarm, setAlarm] = useState(null);
  const [sleeping, setSleeping] = useState(false);

  const wakeUp = () => {
    if (returnCurrentTime() === alarm) {
      sound();
    }
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
        setAlarm={setAlarm}
      />
      <SleepButton
        setLight={props.setLight}
        light={props.light}
        alarm={alarm}
        sleeping={sleeping}
        setSleeping={setSleeping}
      />
    </Box>
  );
};

export default ClockContainer;
