import axios from 'axios'

let host = "http://localhost:5000/api/";

const ApiClient = (step) => {
    return axios.get(host+step);
}
export default ApiClient;