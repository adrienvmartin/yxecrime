import './App.css';
import React, { Fragment, useState, useEffect } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import Selector from './components/selector';
import axios from "axios";

const getData = axios.get('http://localhost:3001/data').then(r => {
  return r.data
});
function App() {
  const [data, setData] = useState({});

  const loadStats = () => {
    getData.then((d) => {
      setData(d);
      console.log('d = ', d)
    })
  }

  useEffect(() => {
   loadStats();
    // console.log('newdata', data);
  }, [])
  return (
    <Fragment>
      <Grid2 xs={12} container direction="column" justify="center">
        <Selector />
        </Grid2>
    </Fragment>
  );
}

export default App;
