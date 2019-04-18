// Based on https://golang.org/src/crypto/x509/root_linux.go

const FILES = [
  // Debian/Ubuntu/Gentoo etc.
  "/etc/ssl/certs/ca-certificates.crt",

  // Fedora/RHEL 6
  "/etc/pki/tls/certs/ca-bundle.crt",

  // OpenSUSE
  "/etc/ssl/ca-bundle.pem",

  // OpenELEC
  "/etc/pki/tls/cacert.pem",

  // CentOS/RHEL 7
  "/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem"
];

// Based on https://golang.org/src/crypto/x509/root_unix.go
const DIRECTORIES = [
  // SLES10/SLES11, https://golang.org/issue/12139
  "/etc/ssl/certs",

  // Android
  "/system/etc/security/cacerts",

  // FreeBSD
  "/usr/local/share/certs",

  // Fedora/RHEL
  "/etc/pki/tls/certs",

  // NetBSD
  "/etc/openssl/certs",

  // AIX
  "/var/ssl/certs"
];

module.exports = {
  FILES: FILES,
  DIRECTORIES: DIRECTORIES
};
