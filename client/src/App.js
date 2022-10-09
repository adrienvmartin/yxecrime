import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import Selector from './components/selector';

function App() {
  return (
    <Fragment>
      <Grid2 xs={12} container direction="column" justify="center">
        <Selector />
        </Grid2>
    </Fragment>
  );
}

export default App;
