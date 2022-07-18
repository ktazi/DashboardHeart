var http = require('http');
const Web3 = require('web3');
var sc_ADDRESS = "0xd9145CCE52D386f254917e481eB44e9943F39138";
var sc_ABI = JSON.parse('[' +
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
    '"internalType": "uint256",' +
    '"name": "",' +
    '"type": "uint256"' +
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
    '"inputs": [],' +
    '"stateMutability": "nonpayable",' +
    '"type": "constructor"' +
    '},' +
    '{' +
    '"anonymous": false,' +
    '"inputs": [' +
    '{' +
    '"indexed": false,' +
    '"internalType": "uint256",' +
    '"name": "deviceId",' +
    '"type": "uint256"' +
    '},' +
    '{' +
    '"indexed": false,' +
    '"internalType": "uint256",' +
    '"name": "index",' +
    '"type": "uint256"' +
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
    '"internalType": "uint256",' +
    '"name": "deviceId",' +
    '"type": "uint256"' +
    '},' +
    '{' +
    '"indexed": false,' +
    '"internalType": "uint256",' +
    '"name": "index",' +
    '"type": "uint256"' +
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
    '"name": "deviceId",' +
    '"type": "uint256"' +
    '},' +
    '{' +
    '"indexed": false,' +
    '"internalType": "uint256",' +
    '"name": "index",' +
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
    '"name": "deviceId",' +
    '"type": "uint256"' +
    '},' +
    '{' +
    '"indexed": false,' +
    '"internalType": "uint256",' +
    '"name": "index",' +
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
    '"name": "deviceId",' +
    '"type": "uint256"' +
    '},' +
    '{' +
    '"indexed": false,' +
    '"internalType": "uint256",' +
    '"name": "index",' +
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
    '"internalType": "uint256",' +
    '"name": "deviceId",' +
    '"type": "uint256"' +
    '},' +
    '{' +
    '"indexed": false,' +
    '"internalType": "uint256",' +
    '"name": "index",' +
    '"type": "uint256"' +
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
    '"name": "deviceId",' +
    '"type": "uint256"' +
    '},' +
    '{' +
    '"indexed": false,' +
    '"internalType": "uint256",' +
    '"name": "index",' +
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
    '"name": "deviceId",' +
    '"type": "uint256"' +
    '},' +
    '{' +
    '"indexed": false,' +
    '"internalType": "uint256",' +
    '"name": "index",' +
    '"type": "uint256"' +
    '}' +
    '],' +
    '"name": "SaturationAbnormal",' +
    '"type": "event"' +
    '},' +
    '{' +
    '"anonymous": false,' +
    '"inputs": [' +
    '{' +
    '"indexed": false,' +
    '"internalType": "uint256",' +
    '"name": "device",' +
    '"type": "uint256"' +
    '},' +
    '{' +
    '"indexed": false,' +
    '"internalType": "uint256",' +
    '"name": "index",' +
    '"type": "uint256"' +
    '}' +
    '],' +
    '"name": "newDevice",' +
    '"type": "event"' +
    '},' +
    '{' +
    '"anonymous": false,' +
    '"inputs": [' +
    '{' +
    '"indexed": false,' +
    '"internalType": "uint256",' +
    '"name": "deviceId",' +
    '"type": "uint256"' +
    '},' +
    '{' +
    '"indexed": false,' +
    '"internalType": "uint256",' +
    '"name": "index",' +
    '"type": "uint256"' +
    '}' +
    '],' +
    '"name": "storeData",' +
    '"type": "event"' +
    '},' +
    '{' +
    '"inputs": [' +
    '{' +
    '"internalType": "uint256",' +
    '"name": "deviceId",' +
    '"type": "uint256"' +
    '}' +
    '],' +
    '"name": "getRecordLength",' +
    '"outputs": [' +
    '{' +
    '"internalType": "uint256",' +
    '"name": "",' +
    '"type": "uint256"' +
    '}' +
    '],' +
    '"stateMutability": "view",' +
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
    '"name": "records",' +
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
    '},' +
    '{' +
    '"internalType": "uint256",' +
    '"name": "index",' +
    '"type": "uint256"' +
    '}' +
    '],' +
    '"stateMutability": "view",' +
    '"type": "function"' +
    '}' +
    ']')
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('HTTP://127.0.0.1:7545'));
var account = "0xE57f97Cfdc97ca1540ef2d596dC78638c674a4D0";
const ourSC = new web3.eth.Contract(sc_ABI,sc_ADDRESS)
//setting the account
web3.eth.defaultAccount = "0x6B174A7957ab22c34CDaA55F31518B3B98DbfE45";
//adding the account as admin

ourSC.methods.addAdmin("0x6B174A7957ab22c34CDaA55F31518B3B98DbfE45").send({from:"0x6B174A7957ab22c34CDaA55F31518B3B98DbfE45\n", gasLimit: '3000000'}, function (err, res){
    if (err) {
        console.log("An error occured", err)
        return
    }
    console.log(" The admin has been added ", res)
});
//adding a device
ourSC.methods.addDevice(1).send({from:"0x6B174A7957ab22c34CDaA55F31518B3B98DbfE45", gasLimit: '3000000'},function (err, res){
    if (err) {
        console.log("An error occured", err)
        return
    }
    console.log(" The device has been added ", res)
})

//get all records from a device
async function getRecords(dev) {
    size = await ourSC.methods.getRecordLength(dev).call(function(err, res){
        if (err) {
            console.log("An error occured", err)
            return
        }
        console.log(" This device has",res," records")
        return res
    });
    for (let i = 0; i < size; i++){
        ourSC.methods.records(dev,i).call( function (err, res){
            if (err) {
                console.log("An error occured", err)
                return
            }
            console.log(" This record has been added :", res)
        });
    }
    return size;
}
async function addRecord(dev, hrythm, hpulse, pwave, sa02, pressureS, pressureD){
    await ourSC.methods.addRecord(dev,hrythm,hpulse,pwave,sa02,pressureS,pressureD).send({from:"0x391eCbC2F425a9451865d4cDF62D685B18479DAB", gasLimit: '3000000'}, function (err, res){
        if (err) {
            console.log("An error occured", err)
            return
        }
        console.log(" The record has been added ")
    });
}
//addRecord(1,1, true,false, 98, 2,122)
getRecords(1)
//TODO : metamask, get account from front

async function getEvents() {
    var table = []
    var pwave = await ourSC.getPastEvents('PWaveAbnormal',
        {
            filter: {deviceId: 1},
            fromBlock: 0,
            toBlock: "latest",
        },
        (err, events) => {
        });
    var tab = []
    for (let i = 0; i < pwave.length; i++) {
        tab.push({deviceId: pwave[i].returnValues.deviceId, index: pwave[i].returnValues.index})
    }
    table.push({pWave: tab})
    var hp = await ourSC.getPastEvents('HeartPulseAbnormal',
        {
            filter: {deviceId: 1},
            fromBlock: 0,
            toBlock: "latest",
        },
        (err, events) => {
        });
    tab = []
    for (let i = 0; i < hp.length; i++) {
        tab.push({deviceId: hp[i].returnValues.deviceId, index: hp[i].returnValues.index})
    }
    table.push({heartPulse: tab})
    var hr = await ourSC.getPastEvents('HeartRythmAbnormal',
        {
            filter: {deviceId: 1},
            fromBlock: 0,
            toBlock: "latest",
        },
        (err, events) => {
        });
    tab = []
    for (let i = 0; i < hr.length; i++) {
        tab.push({deviceId: hr[i].returnValues.deviceId, index: hr[i].returnValues.index})
    }
    table.push({heartRythm: tab})
    var saturation = await ourSC.getPastEvents('SaturationAbnormal',
        {
            filter: {deviceId: 1},
            fromBlock: 0,
            toBlock: "latest",
        },
        (err, events) => {
        });
    tab = []
    for (let i = 0; i < saturation.length; i++) {
        tab.push({deviceId: saturation[i].returnValues.deviceId, index: saturation[i].returnValues.index})
    }
    table.push({saturation: tab})
    var hyperTension = await ourSC.getPastEvents('HyperTension',
        {
            filter: {deviceId: 1},
            fromBlock: 0,
            toBlock: "latest",
        },
        (err, events) => {
        });
    tab = []
    for (let i = 0; i < hyperTension.length; i++) {
        tab.push({deviceId: hyperTension[i].returnValues.deviceId, index: hyperTension[i].returnValues.index})
    }
    table.push({hyperTension: tab})
    var hypotension = await ourSC.getPastEvents('HypoTension',
        {
            filter: {deviceId: 1},
            fromBlock: 0,
            toBlock: "latest",
        },
        (err, events) => {
        });
    tab = []
    for (let i = 0; i < hypotension.length; i++) {
        tab.push({deviceId: hypotension[i].returnValues.deviceId, index: hypotension[i].returnValues.index})
    }
    table.push({hypotension: tab})
    return table
}

a = getEvents().then(function(res){
    return res
})
