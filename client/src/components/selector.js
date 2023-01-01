import React, { Fragment } from 'react';
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
