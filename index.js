const PATHS = require("./paths");
const fs = require("fs");

let accessSyncBool = function(path, mode = fs.constants.R_OK) {
  try {
    fs.accessSync(path, mode);
    return true;
  } catch (err) {
    return false;
  }
};

let findCABundle = () =>
  PATHS.FILES.find(
    e =>
      fs.existsSync(e) &&
      fs.existsSync(fs.realpathSync(e)) &&
      accessSyncBool(fs.realpathSync(e), fs.constants.R_OK) &&
      fs.statSync(fs.realpathSync(e)).isFile()
  );

let findCAPath = () =>
  PATHS.DIRECTORIES.find(
    e =>
      fs.existsSync(e) &&
      fs.existsSync(fs.realpathSync(e)) &&
      accessSyncBool(
        fs.realpathSync(e),
        fs.constants.R_OK | fs.constants.X_OK
      ) &&
      fs.statSync(fs.realpathSync(e)).isDirectory()
  );

module.exports = {
  findCAPath: findCAPath,
  findCABundle: findCABundle
};
