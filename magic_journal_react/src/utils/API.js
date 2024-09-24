import axios from "axios";



export default {
  getMockData: function () {
    console.log("getting mock data");
    return axios.get("/api/mockusers");
  },

  createSpread: function (body) {
    console.log(body);
    return axios.post("/api/createSpread", body);
  },
  getSpreadbyID: function (id) {
    console.log("getting spreads");
    // console.log(id)
    return axios.get("/api/getSpreadbyID/" + id);
  },
  getMonthSpreads: function (day) {
    console.log("getting spreads by month");
    return axios.get("/api/getMonthSpreads");
  },
  createReading: function (body) {
    console.log("creating reading");
    return axios.post("/api/createReading", body);
  },
  getReadingsBySpread: function (id) {
    console.log("getting readings by spread");
    console.log(id);
    return axios.get("/api/getReadingsBySpread/" + id);
  },

  signUp: function (body) {
    console.log("signingup");
    return axios.post("/api/signUp", body);
  },

  logIn: function (body) {
    console.log("logginin");
    console.log(body);
    return axios.post("/api/login", body);
  },

  logOut: function () {
    console.log("logout");
    return axios.post("/logout");
  },

  getUserData: function () {
    console.log("getting your data");
    return axios.get("/api/user_data");
  },

  getOtherUser: function (id) {
    console.log("getting other user's data");
    return axios.get("/api/otherUserData/" + id);
  },

  getOtherUserItems: function (id) {
    console.log("getting other user's data");
    return axios.get("/api/otherUserItems/" + id);
  },

  getOtherUserData: function (id) {
    console.log("getting other user's data");
    return axios.get("/api/otherUserData/" + id);
  },
};





// getAllEmployees: function() {
//   return axios.get("/api/employees");
// },

// getAllEmployeesPositionSort:function(){
//   return axios.get("/api/employeesPosition")
// },
// getAllEmployeesDateSort:function(){
//   return axios.get("/api/employeesDate")
// },

// getEmployee:function(newbody){
//   console.log("lls")
//   console.log(newbody)
//   return axios.post("/api/login", newbody);

// },
// getAllManagers: function() {
//   return axios.get("/api/managers/");
// },

// componentDidMount() {
//   axios.get('/auth/user').then(response => {
//     console.log(response.data)
//     if (!!response.data.user) {
//       console.log('THERE IS A USER')
//       this.setState({
//         loggedIn: true,
//         user: response.data.user
//       })
//     } else {
//       this.setState({
//         loggedIn: false,
//         user: null
//       })
//     }
//   })
// }

// _logout(event) {
//   event.preventDefault()
//   console.log('logging out')
//   axios.post('/auth/logout').then(response => {
//     console.log(response.data)
//     if (response.status === 200) {
//       this.setState({
//         loggedIn: false,
//         user: null
//       })
//     }
//   })
// }

// _login(username, password) {
//   axios
//     .post('/auth/login', {
//       username,
//       password
//     })
//     .then(response => {
//       console.log(response)
//       if (response.status === 200) {
//         // update the state
//         this.setState({
//           loggedIn: true,
//           user: response.data.user
//         })
//       }
//     })
// }