
// Requires

const colors       = require('colors'),
      rimraf       = require('rimraf'),
      { execSync } = require('child_process');


// Script

console.log(`\nStarting Electron...\n`.cyan);

execSync(`electron .`, {
  stdio: 'inherit'
});

console.log(`\nComplete.\n`.cyan);
