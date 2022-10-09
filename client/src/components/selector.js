import React, { Fragment } from 'react';
import { Paper } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import getNeighbourhoods from '../data/neighbourhoods';

const Selector = () => {
  return (
    <Fragment>
      
      <br />
      <Button onClick={() => { getNeighbourhoods(); }}>Get Neighbourhoods</Button>
      </Fragment>
  )
}

export default Selector;