import express from "express";
const siteRouter = express.Router();
// const express =require("express");
// const siteRouter = express.Router();

siteRouter.get("/", (req, res) => {
  res.send("<h1>Server is running</h1>");
});

export default siteRouter;
// module.exports = siteRouter;
