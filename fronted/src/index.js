import React from "react";
import ReactDOM from "react-dom/client";
import Approuter from "./Routes/Approuter";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/line-awesome.min.css";
import "./assets/scss/main.scss";
import "./assets/css/material.css";

//

const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Approuter />
  </>
);
