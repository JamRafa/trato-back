function getTokenFromHeaders(req) {
  //console.log(req.headers, 'reqisicao')
  const authHeader = req.headers['x-authorization'] || req.headers['authorization'] || '';
  const token = authHeader ? authHeader.split(' ')[authHeader.split(' ').length - 1] : undefined;
  return token;
}

module.exports = getTokenFromHeaders;