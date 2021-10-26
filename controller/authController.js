const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const config = require("../config/app");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        msg: "Email or password not found",
      });
    }

    if (!bcrypt.compareSync(password, user.password))
      return res.status(404).json({
        success: false,
        msg: "Email or password not found",
      });

    const userWithToken = generateToken(
      user.get({
        row: true,
      })
    );

    userWithToken.user.avatar = user.avatar;

    return res.json({
      success: true,
      data: userWithToken,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
};

exports.register = async (req, res) => {
  try {
    const user = await User.create(req.body);

    const userWithToken = generateToken(
      user.get({
        row: true,
      })
    );
    return res.json({
      success: true,
      data: userWithToken,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
};

const generateToken = (user) => {
  delete user.password;

  const token = jwt.sign(user, config.appKey, {
    expiresIn: 86400,
  });

  return { ...{ user }, ...{ token } };
};
