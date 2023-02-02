import React from "react";
import ReactDOM from "react-dom";
// import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";
import { ProductsProvider } from "./context/products_context";

ReactDOM.render(
  
  <ProductsProvider>
    <App/>
  </ProductsProvider>
          
       
    
 ,
  document.getElementById("root")
);
