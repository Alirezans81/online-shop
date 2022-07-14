import ReactDOM from "react-dom/client";
import App from "./app";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/navbar.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
