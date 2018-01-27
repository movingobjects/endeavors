
// Requires

const colors       = require('colors'),
      rimraf       = require('rimraf'),
      { execSync } = require('child_process');


// Script

console.log(`\nStarting webpack dev server...\n`.cyan);

execSync(`webpack-dev-server --config config/webpack.web.dev.js --hot --inline --open`, {
  stdio: 'inherit'
});

console.log(`\nComplete.\n`.cyan);
