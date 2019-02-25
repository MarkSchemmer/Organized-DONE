import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Link } from "react-router-dom";
import App from "./components/App/App";


ReactDOM.render(
<BrowserRouter>
        <App />
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
