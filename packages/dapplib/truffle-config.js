require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name random stick huge hockey problem equal general'; 
let testAccounts = [
"0x1421548e8f706d3289c1b9724c424e10ea95a85e7d9bcd250d1ea36e8fd734d6",
"0x602dc1f250e7fb4e49f3143eb1e86c503f0c98759ab855c0557bcb3a36d856d2",
"0x46695ed11d3cbee49227eb2379edb1bfa86e35edc5d0a79d73ac961b3b8125ed",
"0x9a8d3721637b0770e950cc57b60b455251d8252ed0c3be1545b411a8e7df9f97",
"0x52e6a1f85bd50c9883775ac20e60ab11d5ffc9ec41b03f8aa997fbb9b909d26b",
"0xae3994f660608be406aab0d3e2811d9aae66b1841fe3c14242bb09c592b7f512",
"0x4131300b91745ca207c327f5404649ef1c263627296c167a0bb33a05149f9c74",
"0xa70eb4259a69a33390b2a98e85093be1d8ed665002f2a2dbedd216fa7bb0da5c",
"0x1f32880156966bf6ccd911a643dee947fe33a3d3339d740db6d7221b8c8f534f",
"0xc0a25d4bc862a3099695015fea395d02b092de0bb7c1b444cc570bb49a76a766"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
