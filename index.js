'use strict';

require('es6-promise').polyfill();
require('isomorphic-fetch');

var Buffer = require('buffer').Buffer;
var BigInteger = require('bigi');

// This fixes a bug with Safari < 8 and the Browserify Buffer shim used in Crypto-browserify/randombytes
// See: https://github.com/feross/buffer/issues/63
try {
  if (navigator && navigator.vendor &&
      navigator.vendor.indexOf('Apple') > -1) {
    var versionStart = navigator.userAgent.toLowerCase().indexOf('applewebkit') + 12;
    var version = navigator.userAgent.substr(versionStart, 1);

    if (version && typeof (parseInt(version, 10)) === 'number' && parseInt(version, 10) < 6) {
      Buffer.TYPED_ARRAY_SUPPORT = true;
    }
  }
} catch (e) {
}

module.exports = {
  Buffer: Buffer,
  BigInteger: BigInteger,
  MyWallet: require('./src/wallet'),
  WalletStore: require('./src/wallet-store'),
  WalletCrypto: require('./src/wallet-crypto'),
  Payment: require('./src/payment'),
  ImportExport: require('./src/import-export'),
  BlockchainSettingsAPI: require('./src/blockchain-settings-api'),
  Helpers: require('./src/helpers'),
  API: require('./src/api'),
  Tx: require('./src/wallet-transaction'),
  Shared: require('./src/shared'),
  WalletTokenEndpoints: require('./src/wallet-token-endpoints'),
  WalletNetwork: require('./src/wallet-network'),
  RNG: require('./src/rng'),
  Transaction: require('./src/transaction'),
  Address: require('./src/address'),
  Metadata: require('./src/metadata'),
  Bitcoin: require('bitcoinjs-lib'),
  External: require('./src/external'),
  SharedMetadata: require('./src/sharedMetadata'),
  MetadataGeneral: require('./src/metadataGeneral'),
  BuySell: require('./src/buy-sell'),
  Contacts: require('./src/contacts'),
  constants: require('./src/constants'),
  BigInteger: require('bigi/lib'),
  BIP39: require('bip39'),
  Networks: require('bitcoinjs-lib/src/networks'),
  R: require('ramda'),
  ECDSA: require('bitcoinjs-lib/src/ecdsa')
};
