import React, {useEffect, useState, useContext } from "react";
import { myContext } from "../../contexts/myContext";
import API from "../../utils/API"
import Style from "./homepage.css"

function Homepage(props) {

    const [warnMessageItem, setWarnMessageItem]= useState({
    status:"off",
    message:""
  })


  const {userProfile, setUserProfile}= useContext(myContext)

    const handleInputChange = function (event) {
    const { name, value } = event.target;
    // console.log(name, value);
    setNewItem({ ...newItem, [name]: value });
  };

//useState my journals
  const [allMyJournals, setAllMyJournals]= useState([]);
//useState 

const createItem = (event)=>{
  event.preventDefault();
  event.stopPropagation();
  console.log("createitem")
  // console.log(userProfile);
  if(newItem.name.length>0&&newItem.url1.length>0&&
    newItem.url2.length>0&&newItem.url3.length>0&&
    newItem.story.length>20
    ){
  var body= {
    name:newItem.name,
    url1:newItem.url1,
    url2:newItem.url2,
    url3:newItem.url3,
    modelLink:newItem.modelUrl,
    itemStory:newItem.story,
    userId:userProfile.id
  }

  console.log(body);

API.createItem(body).then((res=>{
  setNewItem({
    name:"",
    url1:"",
    url2:"",
    url3:"",
    modelUrl:"",
    story:""
})
  setWarnMessageItem({...warnMessageItem, message:"success!"});
})).catch((err)=>{
  setWarnMessageItem({...warnMessageItem, message:err.message})
});
    }
    else{

        setWarnMessageItem({...warnMessageItem, message:"please fill in the image urls and make sure that the item story is more than 20 characters long"});


    }

}

    return (
    <div class= "row">
        <div className= "col-md-2 sidebar"> 
        <h2>points : {userProfile.points}</h2>
        <div>
         {userProfile.userName}
        </div>
        <form onSubmit={(e)=>{createItem(e)}}>
        <div>
          <div className = "warnMessage">{warnMessageItem.message}</div>
          <input className = "userinput" type="text" name="name" value = {newItem.name} placeholder = "item name" onChange={handleInputChange}></input> 
          <input className = "userinput" type="url" name="url1" value = {newItem.url1} placeholder = "imageurl1" onChange={handleInputChange}></input> 
          <input className = "userinput" type="url" name="url2" value = {newItem.url2} placeholder = "imageurl2" onChange={handleInputChange}></input> 
          <input className = "userinput" type="url" name="url3" value = {newItem.url3} placeholder = "imageurl3" onChange={handleInputChange}></input> 
          <input className = "userinput" type="url" name="modelUrl" placeholder = "modelUrl" onChange={handleInputChange}></input> 
          <textarea className = "userinput" name="story" value = {newItem.story} onChange={handleInputChange}  ></textarea>
          <input className="userinput" type="submit"></input>
           </div>
          
          </form>
        </div>

        <div className ="col-md-10">
        {/* <Billboardscroll /> */}
        </div>
      
        
      
    </div>
    )
  }


export default Homepage;
