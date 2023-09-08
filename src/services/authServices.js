const { getTokenFromHeaders } = require("../utils/getTokenFromHeaders");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const ACCESSTOKEN_SECRET = process.env.ACCESSTOKEN_SECRET;
const ACCESSTOKEN_EXPIRATION = "10s";
const REFRESHTOKEN_SECRET = process.env.REFRESHTOKEN_SECRET;
const REFRESHTOKEN_EXPIRATION = "1d";

const authService = {
  generateAccessToken: async function (userId) {
    return await jwt.sign({ roles: ["user"] }, ACCESSTOKEN_SECRET, {
      subject: userId,
      expiresIn: ACCESSTOKEN_EXPIRATION,
    });
  },
  validateAccessToken: async function (accessToken) {
    return await jwt.verify(accessToken, ACCESSTOKEN_SECRET);
  },
  isAuthenticated: async function (access_token) {
    //const token = getTokenFromHeaders(access_token);

    try {
      await authService.validateAccessToken(access_token);
      return true;
    } catch (err) {
      return false;
    }
  },
  generateRefreshToken: async function (userId) {
    return await jwt.sign({}, REFRESHTOKEN_SECRET, {
      subject: userId,
      expiresIn: REFRESHTOKEN_EXPIRATION,
    });
  },
  validateRefreshToken: async function (refreshToken) {
    return await jwt.verify(refreshToken, REFRESHTOKEN_SECRET);
  },
  decodeToken: async function (token) {
    return await jwt.decode(token);
  },
};

module.exports = authService;
