module.exports = {
  // https://golang.org/src/crypto/x509/root_aix.go
  aix: {
    files: ["/var/ssl/certs/ca-bundle.crt"],
    directories: ["/var/ssl/certs"],
  },
  android: {
    files: [],
    directories: ["/system/etc/security/cacerts"],
  },
  freebsd: {
    files: [
      "/usr/local/etc/ssl/cert.pem", // FreeBSD
      "/usr/local/share/certs/ca-root-nss.crt", // DragonFly
      "/etc/openssl/certs/ca-certificates.crt", // NetBSD
    ],
    directories: [
      "/usr/local/share/certs", // FreeBSD
      "/etc/openssl/certs", // NetBSD
    ],
  },
  linux: {
    files: [
      "/etc/ssl/certs/ca-certificates.crt", // Debian/Ubuntu/Gentoo/Joyent SmartOS etc
      "/etc/pki/tls/certs/ca-bundle.crt", // Fedora/RHEL 6
      "/etc/ssl/ca-bundle.pem", // OpenSUSE
      "/etc/pki/tls/cacert.pem", // OpenELEC      
      "/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem", // CentOS/RHEL 7
      "/etc/ssl/cert.pem", // Alpine Linux
    ],
    directories: [
      "/etc/ssl/certs", // SLES10/SLES11, https://golang.org/issue/12139
      "/etc/pki/tls/certs", // Fedora/RHEL
    ],
  },
  openbsd: {
    files: [
      "/etc/ssl/cert.pem", // OpenBSD
      "/usr/local/share/certs/ca-root-nss.crt", // DragonFly
      "/etc/openssl/certs/ca-certificates.crt", // NetBSD
    ],
    directories: [],
  },
  sunos: {
    files: [
      "/etc/certs/ca-certificates.crt", // Solaris 11.2+
      "/etc/ssl/certs/ca-certificates.crt", // Joyent SmartOS
      "/etc/ssl/cacert.pem", // OmniOS
    ],
    directories: ["/etc/certs/CA"],
  },
};