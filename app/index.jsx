import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import AuthProvider from "./providers/AuthProvider";

const App = <AuthProvider><Layout /></AuthProvider>;

ReactDOM.render(App, document.getElementById("root"));
