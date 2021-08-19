import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./contex/authContext/AuthContex";
import { ListContextProvider } from "./contex/listContext/ListContext";
import { MovieContextProvider } from "./contex/movieContex/MovieContext";
import { UserContextProvider } from "./contex/userContex/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <ListContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </ListContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
