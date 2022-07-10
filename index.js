import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; //cualquier cosa le borro el "min"
//Redux
import { Provider } from "react-redux";
import store from "./app/store"; //el store es el que me permite crear el store de mi aplicacion, se puede llamar como quiera, ejemplo: almacenamiento
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //el provider es un componente que me permite pasarle el store a todos los componentes
  <Provider store={store}>
    <App />
  </Provider>
);
