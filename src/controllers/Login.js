const database = require("../../models");
const authService = require("../services/authServices");

class LoginController {
  static async verifyLogin(req, res) {
    const { nome, password } = req.body;
    try {
      const user = await database["Users"].findOne({
        where: { nome, senha: password },
      });

      if (user === null)
        return res.status(200).json({
          message: "invalid",
        });

      const access_token = await authService.generateAccessToken(
        String(user.id)
      );
      const refresh_token = await authService.generateRefreshToken(
        String(user.id)
      );

      res.status(200).json({
        access_token,
        refresh_token,
        message: "ususario valido",
      });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
  static async getUsers(req, res) {
    const users = await database["Users"].findAll();

    res.status(200).json(users);
  }

}

module.exports = LoginController;
