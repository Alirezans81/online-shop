import ReactDOM from "react-dom/client";
import App from "./app";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/body.css";
import "./styles/navbar.css";
import "./styles/bodyImg.css";
import "./styles/product.css";
import "./styles/footer.css";
import "./styles/signin.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
