import fs from 'fs';
import Papa from 'papaparse';
import * as sk from 'SaskNeighbourhoods';

const getNeighbourhoods = () => {
  let neighbourhoods = [];

  Papa.parse(sk), {
    header: true,
    skipEmptyLines: true,
    complete: (res) => {
      console.log(res);
    }
  };
}

export default getNeighbourhoods;