const find = require("./index");
const assert = require("assert");

// This should work on most linux distros
assert(find.findCAPath() === "/etc/ssl/certs");
assert(find.findCABundle() === "/etc/ssl/certs/ca-certificates.crt");
