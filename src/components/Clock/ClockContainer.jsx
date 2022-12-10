import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import CustomTimePicker from "./CustomTimePicker";
import SleepButton from "./SleepButton.jsx";
import SoundHandler from "./SoundHandler.jsx";
import { returnCurrentTime, soundPlay } from "../../utils/utils";
import Sounds from "../../utils/sounds";

const ClockContainer = (props) => {
  const [alarm, setAlarm] = useState(null);
  const [sleeping, setSleeping] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [sound, setSound] = useState(Sounds.DEFAULT)

  const wakeUp = () => {
    if (returnCurrentTime() === alarm && sleeping) setPlaying(true);

    if (playing) soundPlay(sound);
  };

  useEffect(() => {
    const interval = setInterval(() => wakeUp(), 5000);
    return () => clearInterval(interval);
  }, [alarm, sleeping, playing]);

  return (
    <Box
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      borderRadius="15px"
      display="flex"
      justifyContent="center"
      alignItems="left"
      width="30%"
      height="15%"
      mt="4%"
      mr="2.5%"
      ml="5%"
      pl="1%"
      pt="2%"
      sx={{ flexDirection: "column" }}
    >
      <Typography sx={{color:"#FAAFB4", fontWeight: 700, fontSize: "18px"}}>General Settings</Typography>
      <CustomTimePicker light={props.light} setAlarm={setAlarm} />
      <SleepButton
        setLight={props.setLight}
        light={props.light}
        sleeping={sleeping}
        setSleeping={setSleeping}
        setPlaying={setPlaying}
      />
      <Typography sx={{color:"#FAAFB4", fontWeight: 700, fontSize: "18px", mt: "10%"}}>Additional settings</Typography>
      <SoundHandler sound={sound} setSound={setSound} sleeping={sleeping} />
    </Box>
  );
};

export default ClockContainer;
