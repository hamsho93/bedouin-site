const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withPWA({
  // Your existing Next.js configuration
  reactStrictMode: true,
});