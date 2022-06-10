import react from 'react';
import styled from "styled-components";

// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState,useContext } from "react";
import GlobalStyles from "./GlobalStyles"

import Header from "./components/Header";
import Footer from "./components/Footer";
// import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Addrecipe from "./components/Addrecipe";
import Viewrecipe from "./components/Viewrecipe";
import Viewingredient from "./components/Viewingredient";
import Viewcomment from "./components/Viewcomment";




const App = () => {

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      {/* <Login /> */}
      <Main>
        <Switch>
        {/* <Routes> */}
          <Route exact path="/">
              <Homepage />
          </Route>
          <Route exact path="/login">
              <Login />
          </Route>
          <Route path="/add-recipe">
            <Addrecipe />
          </Route>
          <Route path="/viewrecipe">
            <Viewrecipe />
          </Route>
          <Route path="/viewingredient">
            <Viewingredient />
          </Route>
          <Route path="/viewcomment">
            <Viewcomment />
          </Route>
        </Switch>
        <Footer />
      </Main>
    </BrowserRouter>
  );
};

const Main = styled.div`
  background: var(--color-orange);
  display: flex;
  flex-direction: column;
  height: calc(100vh - 110px);
`;

export default App; 