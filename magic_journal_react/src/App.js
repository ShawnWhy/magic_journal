import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import Homepage from './pages/homepage/homepage';
import SpreadReadPage from './pages/spreadReadPage';
import { MyContext } from './contexts/myContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  const [userProfile, setUserProfile] = useState(
    {
      
    id: "1111",
    email: "something@something.com",
   name:"guest user"  
    }
  )
  return (
    //react navigation
    <MyContext.Provider value={{ userProfile, setUserProfile }}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          {/* spread page with inline parameters */}
          <Route path="/spreadPage/:id" element={<SpreadReadPage />}></Route>
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
