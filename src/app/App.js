import React, {useState} from "react";
import Header from "../components/Header.jsx";
import ClockContainer from "../components/ClockContainer.jsx";
import Footer from "../components/Footer.jsx";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from "@mui/material/styles";

const themeLight = createTheme({
  palette: {
    mode: 'light',
  },
});

const themeDark = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = (props) => {
  const [light, setLight] = useState(true);

  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <Header />
      <ClockContainer setLight={() => setLight()} />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
