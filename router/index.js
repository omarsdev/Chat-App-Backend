const router = require("express").Router();

router.route("/home").get((req, res) => {
  return res.send("Hello World");
});

router.use("/", require("./auth"));
router.use("/users", require("./user"));
router.use("/chats", require("./chat"));

module.exports = router;
