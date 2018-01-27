
// Requires

const colors       = require('colors'),
      rimraf       = require('rimraf'),
      { execSync } = require('child_process');


// Script

console.log(`\nReinstalling node modules...\n`.cyan);

rimraf.sync('node_modules');

execSync(`npm i`, {
  stdio: 'inherit'
});

console.log(`\nComplete.\n`.cyan);
