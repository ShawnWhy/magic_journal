// MyContext.js
import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <MyContext.Provider value={{ counter, setCounter }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
