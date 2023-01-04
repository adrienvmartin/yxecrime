import axios from 'axios';
import papa from "papaparse";

const  getNeighbourhoods = () => {

  const data = axios.get('http://localhost:3001/data').then(r => {
    return r.data
  });

  console.log('data: ', data);
}

export default getNeighbourhoods;
