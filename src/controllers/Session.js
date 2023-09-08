const authService = require("../services/authServices");
const getTokenFromHeaders = require("../utils/getTokenFromHeaders");
const database = require("../../models");

class SessionController {
  static async verifySession(req, res) {
    const accessToken = getTokenFromHeaders(req);
    if (!accessToken)
      return res.status(401).json({
        error: { status: 401, message: "You don't have credentials" },
      });
    try {
      const isAuth = await authService.isAuthenticated(accessToken);
      console.log(isAuth, "validade acess");
      if (isAuth) {
        const decoded = await authService.decodeToken(accessToken);
        const user = await database["Users"].findOne({
          where: { id: Number(decoded.sub) },
        });

        if (user === null) {
          return res.status(401).json({
            error: {
              status: 401,
              message: "Invalid access token, please login again.",
            },
          });
        }

        return res.status(200).json({
          user: {
            userId: user.id,
            username: user.nome,
          },
          roles: decoded.roles,
        });
      } else {
        return res.status(401).json({
          status: 401,
          message:
            "Your access token is not valid, so you are not able to get a session.",
        });
      }
    } catch (err) {
      return res.status(401).json({
        status: 401,
        message:
          "Your access token is not valid, so you are not able to get a session.",
      });
    }
  }

  static async refreshSession(req, res) {
    const refreshToken = getTokenFromHeaders(req);
    try {
      const { sub } = await authService.validateRefreshToken(refreshToken);

      if (sub) {
        const newTokens = {
          accessToken: await authService.generateAccessToken(sub),
          refreshToken: await authService.generateRefreshToken(sub),
        };

        return res.status(200).json({
          newTokens,
        });
      }
    } catch (erro) {
      return res.status(401).json({
        error: {
          status: 401,
          message: "Invalid refresh token, please login again.",
        },
      });
    }
  }
}

module.exports = SessionController;
