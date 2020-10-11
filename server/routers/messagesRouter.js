const express = require("express");
const filedDB = require("./filedDB");
const router = express.Router();

const errorHadler = (message) => {
  const properties = ["author", "message"];
  const wrongProperties = [];
  const propertyHandler = (property) => {
    return typeof property === "string" && property !== "";
  };
  properties.forEach((elem) => {
    if (propertyHandler(message[elem])) wrongProperties.push(elem);
  });
  return wrongProperties;
};

router.get("/", (req, res) => {
  filedDB.get();
});

module.exports = router;
