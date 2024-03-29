// @ts-check
"use strict";
const path = require("path");

const remoteDeployDir = path.join(
    __dirname,
    "../metaplex-program-library",
    "target",
    "deploy"
);

const programIds = {
  metadata: "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
  fireball: "fireo2tXc3j1Es8GjsGUf6whnEPte8oUvdDz4U2zN9n",
};

function localDeployPath(dir, programName) {
  return path.join(dir, `${programName}.so`);
}
const programs = {
  metadata: {
    programId: programIds.metadata,
    deployPath: localDeployPath(remoteDeployDir, "mpl_token_metadata"),
  },
  fanout: {
    programId: programIds.fanout,
    deployPath: localDeployPath(
        path.join(__dirname, "target", "deploy"),
        "mpl_fireball"
    ),
  },
};

const validator = {
  verifyFees: false,
  commitment: "confirmed",
  programs: [programs.metadata, programs.fanout],
};

module.exports = {
  programs,
  validator,
};
