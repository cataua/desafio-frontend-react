import React from 'react';
import {
  Box,
  Container
} from '@material-ui/core';
import './App.sass';
import Prices from '../../Pages/Prices';
import Header  from '../../Components/Header';
import TopBar from '../../Components/TopBar';
import { ReactComponent as Logo } from '../../Assets/Img/hostgator-logo.svg';

const App = () => {
  return (
    <>
      <Header>
        <TopBar>
          <Logo className="logo" />
        </TopBar>
      </Header>
      <Box component="main" className="App">
        <Prices />
      </Box>
    </>
  );
}

export default App;
