const router = require("express").Router();

const { login, register } = require("../controller/authController");

const { validate } = require("../validators");
const { rules: registrationRules } = require("../validators/auth/register");
const { rules: loginRules } = require("../validators/auth/login");

router.route("/login").post(loginRules, validate, login);
router.route("/register").post(registrationRules, validate, register);

module.exports = router;
