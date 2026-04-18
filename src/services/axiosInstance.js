import axios from "axios";
let token = localStorage.getItem("token");
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  // headers: {
  //   Authorization: `bearer ${token}`, //localstorage ya session storage se token share
  // },
  withCredentials: true, //cookies ko access karne k liye
});

export default axiosInstance;
