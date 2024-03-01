import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import { ModalProvider } from "./context/modal-context";
import { ThemeProvider } from "./context/theme-context";
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
    // <BrowserRouter basename="/index.html">
    <ThemeProvider>
        <ModalProvider> 
            <App/>
        </ModalProvider>
    </ThemeProvider>
    // </BrowserRouter>
    )