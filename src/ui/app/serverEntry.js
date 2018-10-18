import express from "express";
import React from "react";
import ReactDOM from "react-dom/server";
// import Home from "../app/components/Home/Home";
import Index from "../app/index";
const router = express.Router();

router.get("/", (req, res) => {
  res.send(ReactDOM.renderToString(<Index />));
});

export default router;
