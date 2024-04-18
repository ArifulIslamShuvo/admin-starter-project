import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App";
// import { store } from './Redux/store';
// import { Provider } from 'react-redux';
import { AuthContextProvider } from "./Context/AuthContext";
import { AppContextProvider } from "./Context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  <AuthContextProvider>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </AuthContextProvider>
);
