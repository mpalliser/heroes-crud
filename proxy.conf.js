const PROXY_CONF = {
  '/api': {
    target: 'https://superheroapi.com',
    secure: false,
    changeOrigin: true,
  }
};

module.exports = PROXY_CONF