// @ts-check
const path = require('path');
const programDir = path.join(__dirname, '..', 'program');
const idlDir = path.join(__dirname, 'idl');
const sdkDir = path.join(__dirname, 'src', 'generated');
const binaryInstallDir = path.join(__dirname, '.crates');

module.exports = {
  idlGenerator: 'anchor',
  programName: 'fireball',
  programId: 'fireo2tXc3j1Es8GjsGUf6whnEPte8oUvdDz4U2zN9n',
  idlDir,
  sdkDir,
  binaryInstallDir,
  programDir,
};
