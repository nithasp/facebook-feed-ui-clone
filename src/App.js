import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// CSS
import './css/style.css'
import { UseGlobalContext2 } from "./context/GlobalContext";
import { lightTheme, darkTheme, GlobalStyle } from "./css/theme";

import Home from "./pages/Home.js";
import Navbar from "./components/Navbar";




function App() {

  const {mode} = UseGlobalContext2();

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div className="app">
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
