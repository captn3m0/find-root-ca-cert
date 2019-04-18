# find-root-ca-cert

Node package to find the OS-installed root CA certificates. This uses the same location list as go. Based upon this [this answer](https://serverfault.com/a/722646) on ServerFault.

## Installation

`npm install --save find-root-ca-cert`

## Usage

```js
const certFinder = require("find-root-ca-cert");
certFinder.findCAPath();
// /etc/ssl/certs/ca-certificates.crt
certFinder.findCABundle();
// /etc/ssl/certs/ca-certificates.crt
```

## License

Licensed under the [MIT License](https://nemo.mit-license.org/). See LICENSE file for details.
