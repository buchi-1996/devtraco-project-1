import React, { useReducer } from "react";
import AppState from "./AppState";
import reducerfunc from "./reducerfunc";


const AppContext = ({ children }) => {

  const initialState = {
    isMobileOpen: false,
  };

  const [state, dispatch] = useReducer(reducerfunc, initialState);

  return (
    <AppState.Provider value={{ state, dispatch }}>
      {children}
    </AppState.Provider>
  );
};

export default AppContext;
