
// Requires

const colors       = require('colors'),
      rimraf       = require('rimraf'),
      { execSync } = require('child_process');


// Script

console.log(`\nEnabling all scripts to be executed...`.cyan);

execSync(`chmod +x ./scripts/*`, {
  stdio: 'inherit'
});

console.log(`Complete.\n`.cyan);
