import React from "react";
import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

reactDom.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);