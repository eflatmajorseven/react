import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username,name,lastname, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    name,
    lastname,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const createSlotAdmin = (name,lastname) => {
  return axios.
  post(API_URL + "slotadmin", {
    name,
    lastname
  })
};

const createSlotUser = (shiftstart,shiftend) => {
  return axios.
  post(API_URL + "slotuser", {
    shiftstart,
    shiftend
  })
};

const getUsers = () => {
  axios.get('http://localhost:8080/api/auth/users')
  .then((response)=> {
        console.log('users recieved')
        return response.data;
  })
  .catch(() => {
    console.log('error retrieving users')
  })
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
  getUsers
};
