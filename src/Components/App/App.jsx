import React from 'react';
import {
  Box
} from '@material-ui/core';
import './App.sass';
import Prices from '../../Pages/Prices';

const App = () => {
  return (
    <Box component="main" className="App">
      <Prices />
    </Box>
  );
}

export default App;
