import axios from "axios";


export default {
  getFavorites: function(){
    console.log("gettingfavs")
    return axios.get("/api/getFavs");
},
 getTopComments: function(){
    console.log("gettingTopComments")
    return axios.get("/api/getTopComments");
},
getAllItems : function(){
  console.log("gettingAll")
  return axios.get("/api/alltheItems")
},

getMyItems : function(id){
  console.log("getthing this one persons items")
  console.log(id)
  // id = id.toString()
  return axios.get("/api/myItems/"+id)
},

getItemDetails : function(id){
  console.log("getting details for this one object")
  return axios.get ("/api/itemDetails/"+id)
},
getComments : function(id){
console.log("getting all of the comments for this item ")
return axios.get("/api/getComments/"+id)
},

getCommentsOtherUser : function(id){
console.log(id)
console.log("getting all of the comments for other User ")
return axios.get("/api/getcommentsotheruser/"+id)
},

signUp : function(body){
  console.log("signingup");
  return axios.post ("/api/signUp",body)
},

logIn : function(body){
  console.log("logginin");
  console.log(body)
  return axios.post ("/api/login", body)
},

logOut : function(){
  console.log("logout");
  return axios.post("/logout");
},

getUserData : function(){
  console.log("getting your data");
  return axios.get("/api/user_data");
},

getOtherUser : function(id){
console.log("getting other user's data")
return axios.get("/api/otherUserData/"+ id);
},

getOtherUserItems : function(id){
console.log("getting other user's data")
return axios.get("/api/otherUserItems/"+ id);
},

getOtherUserData: function(id){
  console.log("getting other user's data")
  return axios.get("/api/otherUserData/"+id)
},


getPoints : function(id){
  console.log("getting points")
  return axios.get("/api/getPoints/"+ id)

},

changePoints : function(body, id){
console.log("updating points")
console.log(body)
console.log(id)
return axios.put("/api/changePoints/"+id, body)

},
updateLikes : function(body, id){
  console.log("updating Likes")
  console.log(body)
  return axios.put("/api/updateLikes/"+id, body)
},

updateBids : function(body, id){
  console.log("updating Bid")
  console.log(body)
  return axios.put("/api/updateBids/"+id, body)
},

updateVotes : function(id, body){
  console.log("updating Vote")
  console.log(body)
  return axios.put("/api/updateVotes/"+id, body)
},

createLike : function(body){
console.log("creating Like")
console.log(body);
return axios.post("/api/createLike",body);
},


createItem : function(body){
console.log("creating")
console.log(body);
return axios.post("/api/createItem",body);
},

createBid: function(body){
  console.log("creating bid")
  return axios.post("/api/createBid",body)
},

createVote: function(body){
  console.log("creating Vote")
  return axios.post("/api/createVote",body)
},

postComment: function(body){
  console.log("loggincomment")
  console.log(body);
  return axios.post("/api/postComment",body)
},
}



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