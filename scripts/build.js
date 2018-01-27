
// Requires

const colors       = require('colors'),
      rimraf       = require('rimraf'),
      { execSync } = require('child_process');


// Script

console.log(`\nBuilding application for Electron...\n`.cyan);

rimraf.sync('app/build/*');

execSync(`webpack --config config/webpack.electron.dev.js`, {
  stdio: 'inherit'
});

console.log(`\nComplete.\n`.cyan);
