import React, { useState } from "react";
import Header from "../components/Header/Header.jsx";
import ClockContainer from "../components/Clock/ClockContainer.jsx";
import Footer from "../components/Footer/Footer.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { returnCurrentTime } from "../utils";

const themeLight = createTheme({
  palette: {
    mode: "light",
  },
});

const themeDark = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = (props) => {
  const [light, setLight] = useState(true);
  const [alarmTime, setAlarmTime] = useState(returnCurrentTime);

  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <Header />
      <ClockContainer
        setLight={setLight}
        light={light}
        setAlarmTime={setAlarmTime}
        alarmTime={alarmTime}
      />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
