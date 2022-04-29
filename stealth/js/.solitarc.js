// @ts-check
const path = require('path');
const programDir = path.join(__dirname, '..', 'program');
const idlDir = path.join(__dirname, 'idl');
const sdkDir = path.join(__dirname, 'src', 'generated');
const binaryInstallDir = path.join(__dirname, '.crates');

module.exports = {
  idlGenerator: 'anchor',
  programName: 'stealth',
  programId: 'privzjrXhtea8kKt3uE94X34AHaiLj2Vbwd51y3aUSi',
  idlDir,
  sdkDir,
  binaryInstallDir,
  programDir,
};
