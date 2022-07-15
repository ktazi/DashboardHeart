
var http = require('http');
const Web3 = require('web3');
var sc_ADDRESS = "0xDB1012A4Bb6E2bBc3C7daC0dCb73615868926483";
var sc_ABI = JSON.parse('[' +
    '{' +
    '"anonymous": false,' +
    '"inputs": [' +
    '{' +
    '"indexed": false,' +
    '"internalType": "uint256",' +
    '"name": "heartRythm",' +
    '"type": "uint256"' +
    '},' +
    '{' +
    '"indexed": false,' +
    '"internalType": "bool",' +
    '"name": "heartPulse",' +
    '"type": "bool"' +
    '}' +
    '],' +
    '"name": "HeartFailure",' +
    '"type": "event"' +
    '},' +
    '{' +
    '"anonymous": false,' +
    '"inputs": [' +
    '{' +
    '"indexed": false,' +
    '"internalType": "bool",' +
    '"name": "hp",' +
    '"type": "bool"' +
    '}' +
    '],' +
    '"name": "HeartPulseAbnormal",' +
    '"type": "event"' +
    '},' +
    '{' +
    '"anonymous": false,' +
    '"inputs": [' +
    '{' +
    '"indexed": false,' +
    '"internalType": "uint256",' +
    '"name": "hr",' +
    '"type": "uint256"' +
    '}' +
    '],' +
    '"name": "HeartRythmAbnormal",' +
    '"type": "event"' +
    '},' +
    '{' +
    '"anonymous": false,' +
    '"inputs": [' +
    '{' +
    '"indexed": false,' +
    '"internalType": "uint256",' +
    '"name": "prS",' +
    '"type": "uint256"' +
    '},' +
    '{' +
    '"indexed": false,' +
    '"internalType": "uint256",' +
    '"name": "prD",' +
    '"type": "uint256"' +
    '}' +
    '],' +
    '"name": "HyperTension",' +
    '"type": "event"' +
    '},' +
    '{' +
    '"anonymous": false,' +
    '"inputs": [' +
    '{' +
    '"indexed": false,' +
    '"internalType": "uint256",' +
    '"name": "prS",' +
    '"type": "uint256"' +
    '},' +
    '{' +
    '"indexed": false,' +
    '"internalType": "uint256",' +
    '"name": "prD",' +
    '"type": "uint256"' +
    '}' +
    '],' +
    '"name": "HypoTension",' +
    '"type": "event"' +
    '},' +
    '{' +
    '"anonymous": false,' +
    '"inputs": [' +
    '{' +
    '"indexed": false,' +
    '"internalType": "bool",' +
    '"name": "pwave",' +
    '"type": "bool"' +
    '}' +
    '],' +
    '"name": "PWaveAbnormal",' +
    '"type": "event"' +
    '},' +
    '{' +
    '"anonymous": false,' +
    '"inputs": [' +
    '{' +
    '"indexed": false,' +
    '"internalType": "uint256",' +
    '"name": "sao2",' +
    '"type": "uint256"' +
    '}' +
    '],' +
    '"name": "Saturation",' +
    '"type": "event"' +
    '},' +
    '{' +
    '"anonymous": false,' +
    '"inputs": [' +
    '{' +
    '"indexed": false,' +
    '"internalType": "uint256",' +
    '"name": "sao2",' +
    '"type": "uint256"' +
    '}' +
    '],' +
    '"name": "SaturationAbnormal",' +
    '"type": "event"' +
    '},' +
    '{' +
    '"inputs": [' +
    '{' +
    '"internalType": "address",' +
    '"name": "ad",' +
    '"type": "address"' +
    '}' +
    '],' +
    '"name": "addAdmin",' +
    '"outputs": [' +
    '{' +
    '"internalType": "bool",' +
    '"name": "",' +
    '"type": "bool"' +
    '}' +
    '],' +
    '"stateMutability": "nonpayable",' +
    '"type": "function"' +
    '},' +
    '{' +
    '"inputs": [' +
    '{' +
    '"internalType": "uint256",' +
    '"name": "id",' +
    '"type": "uint256"' +
    '}' +
    '],' +
    '"name": "addDevice",' +
    '"outputs": [' +
    '{' +
    '"internalType": "bool",' +
    '"name": "",' +
    '"type": "bool"' +
    '}' +
    '],' +
    '"stateMutability": "nonpayable",' +
    '"type": "function"' +
    '},' +
    '{' +
    '"inputs": [' +
    '{' +
    '"internalType": "uint256",' +
    '"name": "deviceId",' +
    '"type": "uint256"' +
    '},' +
    '{' +
    '"internalType": "uint256",' +
    '"name": "heartRythm",' +
    '"type": "uint256"' +
    '},' +
    '{' +
    '"internalType": "bool",' +
    '"name": "heartPulse",' +
    '"type": "bool"' +
    '},' +
    '{' +
    '"internalType": "bool",' +
    '"name": "pwave",' +
    '"type": "bool"' +
    '},' +
    '{' +
    '"internalType": "uint256",' +
    '"name": "sao2",' +
    '"type": "uint256"' +
    '},' +
    '{' +
    '"internalType": "uint256",' +
    '"name": "pressureS",' +
    '"type": "uint256"' +
    '},' +
    '{' +
    '"internalType": "uint256",' +
    '"name": "pressureD",' +
    '"type": "uint256"' +
    '}' +
    '],' +
    '"name": "addRecord",' +
    '"outputs": [],' +
    '"stateMutability": "nonpayable",' +
    '"type": "function"' +
    '},' +
    '{' +
    '"inputs": [' +
    '{' +
    '"internalType": "uint256",' +
    '"name": "",' +
    '"type": "uint256"' +
    '},' +
    '{' +
    '"internalType": "uint256",' +
    '"name": "",' +
    '"type": "uint256"' +
    '}' +
    '],' +
    '"name": "data",' +
    '"outputs": [' +
    '{' +
    '"internalType": "uint256",' +
    '"name": "heartRythm",' +
    '"type": "uint256"' +
    '},' +
    '{' +
    '"internalType": "bool",' +
    '"name": "heartPulse",' +
    '"type": "bool"' +
    '},' +
    '{' +
    '"internalType": "bool",' +
    '"name": "pwave",' +
    '"type": "bool"' +
    '},' +
    '{' +
    '"internalType": "uint256",' +
    '"name": "timestamp",' +
    '"type": "uint256"' +
    '},' +
    '{' +
    '"internalType": "uint256",' +
    '"name": "sao2",' +
    '"type": "uint256"' +
    '},' +
    '{' +
    '"internalType": "uint256",' +
    '"name": "pressureSys",' +
    '"type": "uint256"' +
    '},' +
    '{' +
    '"internalType": "uint256",' +
    '"name": "pressureDias",' +
    '"type": "uint256"' +
    '}' +
    '],' +
    '"stateMutability": "view",' +
    '"type": "function"' +
    '}' +
    ']')
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('HTTP://127.0.0.1:7545'));
console.log(web3.version)
var account = "0xE57f97Cfdc97ca1540ef2d596dC78638c674a4D0\n";
const ourSC = new web3.eth.Contract(sc_ABI,sc_ADDRESS)

