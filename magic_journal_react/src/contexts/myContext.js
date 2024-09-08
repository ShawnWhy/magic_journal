// MyContext.js
import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    createdAt: "",
    updatedAt: "",
  });

  return (
    <MyContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
