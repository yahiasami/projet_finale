const jwt = require('jsonwebtoken');
exports.createJWT = (email, userId, duration) => {
  const payload = {
    email,
    userId,
    duration,
  };
  return jwt.sign(payload, 'sami_2022', {
    expiresIn: duration,
  });
};
