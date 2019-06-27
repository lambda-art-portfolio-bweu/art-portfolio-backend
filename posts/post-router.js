const express = require("express");
const Posts = require("./post-model.js");

const router = express.Router();

router.use(express.json());