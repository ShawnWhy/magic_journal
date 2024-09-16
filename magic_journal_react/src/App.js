import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import Homepage from './pages/homepage/homepage';
import { MyContext } from './contexts/myContext';

function App() {

  const [userProfile, setUserProfile] = useState(
    {
      
    id: "1111",
    email: "something@something.com",
    firstName: "Guest",
    lastName: "user"   
    }
  )
  return (
    <MyContext.Provider value = {{userProfile, setUserProfile}}>
    <div className="App">
      <Homepage />
    </div>
    </MyContext.Provider>
  );
}

export default App;
