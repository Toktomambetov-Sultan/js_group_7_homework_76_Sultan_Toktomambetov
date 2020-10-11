const express = require("express");
const { nanoid } = require("nanoid");
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

router.get("/", async (req, res) => {
  res.send(await filedDB.get());
});

router.post("/", async (req, res) => {
  const message = req.body.message;
  const errorProps = errorHadler(req.body.message);
  if (errorProps.length === 0) {
    const datetime = new Date().toISOString();
    filedDB.add({ ...message, datetime, id: nanoid() });
    res.send({ message: "Message recorded.", datetime });
  } else {
    res.send({
      errorProps: errorProps,
      message: errorProps.join(" and ") + "prop(s) is(are) uncorrect.",
    });
  }
});

module.exports = router;
