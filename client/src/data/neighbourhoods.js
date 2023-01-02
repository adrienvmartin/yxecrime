import axios from 'axios';
import papa from "papaparse";

const  getNeighbourhoods = () => {

  axios.get('http://localhost:3001/data').then(r => console.log(r.data));

}

export default getNeighbourhoods;
