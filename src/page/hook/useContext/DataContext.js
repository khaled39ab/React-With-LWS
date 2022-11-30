import React from "react";

export const DataContext = React.createContext();

// step-1: create a react context with React.createContext() method
// step-1: wrap parent component with created context component.provider
// step-3: state access with useContext in child component