import env = require('../../../../env');

const { jwtSecret } = env();

export const jwtConstants = {
  secret: jwtSecret,
};
