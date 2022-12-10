import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { returnCurrentTime, returnTime } from "../../utils/utils";

const CustomTimePicker = (props) => {
  const [value, setValue] = useState(null);
  const [currentTime, setCurrentTime] = useState(returnCurrentTime());

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentTime(returnCurrentTime()),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label={props.light ? "Current time: " + currentTime : "Sleep well :)"}
        value={value}
        ampm={false}
        onChange={(newValue) => {
          setValue(newValue);
          if (newValue) props.setAlarm(returnTime(newValue.$H, newValue.$m));
        }}
        renderInput={(params) => (
          <TextField {...params} sx={{ width: "96%", marginTop: "5%" }} />
        )}
        disabled={!props.light}
      />
    </LocalizationProvider>
  );
};

export default CustomTimePicker;
