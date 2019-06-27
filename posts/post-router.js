const express = require("express");
const Posts = require("./post-model.js");

const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
    Posts.get()
      .then((data) => res.json(data))
      .catch((data) =>
        res.status(500).json({
          errorMessage: "The post could not be retrieved."
        })
      );
  });