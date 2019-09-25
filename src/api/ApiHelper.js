/*
  * @file-description : this file is the index file of the API
  * @author{Yassine JOUT} yassine jout@gmail.com
*/
import axios from 'axios'
// path to the api
let host = "http://localhost:5000/api/";

// api client that returns a promise
const ApiClient = (step) => {
    return axios.get(host+step);
}
export default ApiClient;