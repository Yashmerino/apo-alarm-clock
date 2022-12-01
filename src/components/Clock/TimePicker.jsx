import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";

const returnCurrentTime = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours %= 12;
  hours = hours || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  const strTime = `${hours}:${minutes} ${ampm}`;

  return strTime;
};

const TimePicker = (props) => {
  const [currentTime, setCurrentTime] = useState(returnCurrentTime(new Date()));

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentTime(returnCurrentTime(new Date())),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <TextField
        id="time"
        label={"Current time: " + currentTime}
        type="time"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300,
        }}
        sx={{ width: "25%" }}
        disabled={!props.light}
      />
    </>
  );
};

export default TimePicker;
