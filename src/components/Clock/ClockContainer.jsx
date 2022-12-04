import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import CustomTimePicker from "./CustomTimePicker";
import SleepButton from "./SleepButton";
import { returnCurrentTime, soundPlay } from "../../utils";

const ClockContainer = (props) => {
  const [alarm, setAlarm] = useState(null);
  const [sleeping, setSleeping] = useState(false);
  const [playing, setPlaying] = useState(false);

  const wakeUp = () => {
    if (returnCurrentTime() === alarm && sleeping) setPlaying(true);

    if (playing) soundPlay();
  };

  useEffect(() => {
    const interval = setInterval(() => wakeUp(), 5000);
    return () => clearInterval(interval);
  }, [alarm, sleeping, playing]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="50%"
      mt="10%"
      sx={{ flexDirection: "column" }}
    >
      <CustomTimePicker light={props.light} setAlarm={setAlarm} />
      <SleepButton
        setLight={props.setLight}
        light={props.light}
        sleeping={sleeping}
        setSleeping={setSleeping}
        setPlaying={setPlaying}
      />
    </Box>
  );
};

export default ClockContainer;
