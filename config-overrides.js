module.exports = config => {
  require('react-app-rewire-postcss')(config/*, options */, true);

  return config;
};