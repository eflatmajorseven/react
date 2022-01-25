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

const getUsers = () => {
  return (axios.get(API_URL + "users")
  .then((response)=> {
    console.log('users recieved')
        return response.data  
  })
  .catch(()=>{
    console.log("error retrieving users")
  })
  )
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

const getSlots = () => {
  return axios.
  get(API_URL + "slots")
  .then((response) => {
    return response.data;
  })
  .catch(() => {
    console.log("error retrieving slots")
  })
}

const createSlotAdmin = (name,lastname,date) => {
  //alert(name);
  return axios.
  post(API_URL + "slot", {
    name,
    lastname,
    date
  }).then((response) => {
        return response.data;
  });
};
const saveSlot = (id,startShift,endShift) => {
  //alert(name);
  return axios.
  post(API_URL + "saveslot", {
    id,
    startShift,
    endShift
  })
};

const createSlotUser = (shiftstart,shiftend) => {
  return axios.
  post(API_URL + "slotuser", {
    shiftstart,
    shiftend
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
  getUsers,
  createSlotAdmin,
  getSlots,
  saveSlot,
};
