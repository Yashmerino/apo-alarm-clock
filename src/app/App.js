import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header.jsx";
import ClockContainer from "../components/Clock/ClockContainer.jsx";
import Footer from "../components/Footer/Footer.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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

const App = () => {
  const [light, setLight] = useState(true);

  const keepScreenUp = async () => {
    await navigator.wakeLock.request("screen");
  };

  useEffect(() => {
    keepScreenUp();
  });

  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <Header />
      <ClockContainer setLight={setLight} light={light} />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
