import axios from "axios"

export const setAuthToken = (token) => {
  if (token) {
    //setting the token to the Authorization Header
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
  } else {
    //deleting the header if it does not find the token in local storage
    delete axios.defaults.headers.common["Authorization"]
  }
}
