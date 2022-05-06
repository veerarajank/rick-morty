import axios from 'axios'
// pass the api as input and return promise as response
export const fetchResults = (url) => {
  return axios.get(url).then(resp => resp.data)
}
