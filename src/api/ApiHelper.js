/*
  * @file-description : this file is the index file of the API
  * @author{Slimane AKALIA} slimaneakalia@gmail.com
*/
import axios from 'axios'

let host = "http://localhost:5000/api/";

const ApiClient = (step) => {
    return axios.get(host+step);
}
export default ApiClient;