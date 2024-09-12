import React, {useEffect, useState, useContext } from "react";
import { MyContext } from "../../contexts/myContext";
import API from "../../utils/API"
import Style from "./homepage.css"
import Cards from "../../components/cards/cards"

function Homepage(props) {


  useEffect(() => {  
    console.log("home page use effect") 
    API.getMockData().then((res)=>{
      console.log(res.data);
    } 
    ).catch((err)=>{  
      console.log(err);
    }
    )
  }, []);

    const [warnMessageItem, setWarnMessageItem]= useState({
    status:"off",
    message:""
  })


  const contextValues = useContext(MyContext);
  const { userProfile, setUserProfile } = contextValues || {};


//useState my journals
  const [allMyJournals, setAllMyJournals]= useState([]);
//useState 

// const createItem = (event)=>{
//   event.preventDefault();
//   event.stopPropagation();
//   console.log("createitem")
//   // console.log(userProfile);
//   if(newItem.name.length>0&&newItem.url1.length>0&&
//     newItem.url2.length>0&&newItem.url3.length>0&&
//     newItem.story.length>20
//     ){
//   var body= {
//     name:newItem.name,
//     url1:newItem.url1,
//     url2:newItem.url2,
//     url3:newItem.url3,
//     modelLink:newItem.modelUrl,
//     itemStory:newItem.story,
//     userId:userProfile.id
//   }

//   console.log(body);

// API.createItem(body).then((res=>{
//   setNewItem({
//     name:"",
//     url1:"",
//     url2:"",
//     url3:"",
//     modelUrl:"",
//     story:""
// })
//   setWarnMessageItem({...warnMessageItem, message:"success!"});
// })).catch((err)=>{
//   setWarnMessageItem({...warnMessageItem, message:err.message})
// });
//     }
//     else{

//         setWarnMessageItem({...warnMessageItem, message:"please fill in the image urls and make sure that the item story is more than 20 characters long"});


//     }



return (
    <div>
        <h1>Homepage</h1>
        <Cards />
    </div>
)
  }


export default Homepage;
