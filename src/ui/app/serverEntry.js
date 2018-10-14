import express from "express";
import React from "react";
import ReactDOM from "react-dom/server";
import Home from "../app/components/Home/Home";
const router = express.Router();

router.get("/ssr", (req, res) => {
  res.send(ReactDOM.renderToString(<Home />));
});

export default router;
