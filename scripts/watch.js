
// Requires

const colors       = require('colors'),
      rimraf       = require('rimraf'),
      { execSync } = require('child_process');


// Script

console.log(`\nBuilding & watching application for Electron...\n`.cyan);

rimraf.sync('app/build/*');

execSync(`webpack --config config/webpack.electron.dev.js --watch`, {
  stdio: 'inherit'
});

console.log(`\nComplete.\n`.cyan);
