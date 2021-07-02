require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note rural exchange hockey clog metal gather'; 
let testAccounts = [
"0xcd4ad642593571a45d51f8f614c9db35d90a0601041df75e935bfc1f8530a931",
"0x235daa2b6d00e4c99766c70785335a5da27354b077746be93bc48d7f8328d4e2",
"0x7cede643aca3396bd4c962ffc161289a9034369a99a11752fb63902bc1f7ee40",
"0x4efff3e376b4f8caaf3c00ca2aba51dc82d6992c9596455c338f0ddb85d56d56",
"0xc0e2ef1cdc724dd78c72f31c14c69d4b7b2ccbcf9a2d90b353d49c5f6fb6807d",
"0x3bb16c775d57089ddb5968f0e178f37bc82d6e8c54ccee7a242b181925beede8",
"0xc1e7ae0b649d69abb61f68b7a872f97b4e3dd59f7261894c5fcccd4af0b1df5c",
"0xbd604966152042a6c1f648c9cd313c04c33a5a16b6377fb4cdb9cdd1f033d739",
"0xfd44c2fce627ce598ff4d0b15b2b7fd4d93ce809336bb68b928131826791bd49",
"0x296272b5f32cb92523a90e29e3cd6f93fec171a309f4fb2ebd894343980a8225"
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
            version: '^0.8.0'
        }
    }
};

