const express = require('express')
const router = express.Router()
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
const ourSC = new web3.eth.Contract(sc_ABI,sc_ADDRESS)
//setting the account
web3.eth.defaultAccount = "0x391eCbC2F425a9451865d4cDF62D685B18479DAB";

async function getRecords(dev) {
    size = await ourSC.methods.getRecordLength(dev).call(function(err, res){
        if (err) {
            console.log("An error occured", err)
            return
        }
        return res
    });
    recs = []
    for (let i = 0; i < size; i++){
        recs.push(await ourSC.methods.records(dev,i).call( function (err, res){
            if (err) {
                console.log("An error occured", err)
                return
            }
            return res
        }))
    }
    return recs;
}

async function getEvents(dev) {
    var table = []
    var pwave = await ourSC.getPastEvents('PWaveAbnormal',
        {
            filter: {deviceId: dev},
            fromBlock: 0,
            toBlock: "latest",
        });
    let tab_pw = []
    for (let i = 0; i < pwave.length; i++) {
        tab_pw.push({deviceId: pwave[i].returnValues.deviceId, index: pwave[i].returnValues.index})
    }

    var hp = await ourSC.getPastEvents('HeartPulseAbnormal',
        {
            filter: {deviceId: dev},
            fromBlock: 0,
            toBlock: "latest",
        });
    let tab_hp = []
    for (let i = 0; i < hp.length; i++) {
        tab_hp.push({deviceId: hp[i].returnValues.deviceId, index: hp[i].returnValues.index})
    }
    var hr = await ourSC.getPastEvents('HeartRythmAbnormal',
        {
            filter: {deviceId: dev},
            fromBlock: 0,
            toBlock: "latest",
        });
    let tab_hr = []
    for (let i = 0; i < hr.length; i++) {
        tab_hr.push({deviceId: hr[i].returnValues.deviceId, index: hr[i].returnValues.index})
    }
    var saturation = await ourSC.getPastEvents('SaturationAbnormal',
        {
            filter: {deviceId: dev},
            fromBlock: 0,
            toBlock: "latest",
        });
    let tab_sat = []
    for (let i = 0; i < saturation.length; i++) {
        tab_sat.push({deviceId: saturation[i].returnValues.deviceId, index: saturation[i].returnValues.index})
    }
    var hyperTension = await ourSC.getPastEvents('HyperTension',
        {
            filter: {deviceId: dev},
            fromBlock: 0,
            toBlock: "latest",
        });
    let tab_ht = []
    for (let i = 0; i < hyperTension.length; i++) {
        tab_ht.push({deviceId: hyperTension[i].returnValues.deviceId, index: hyperTension[i].returnValues.index})
    }
    var hypotension = await ourSC.getPastEvents('HypoTension',
        {
            filter: {deviceId: dev},
            fromBlock: 0,
            toBlock: "latest",
        });
    let tab_hyp = []
    for (let i = 0; i < hypotension.length; i++) {
        tab_hyp.push({deviceId: hypotension[i].returnValues.deviceId, index: hypotension[i].returnValues.index})
    }
    return    { pwave :tab_pw, heartPulse: tab_hp, heartRythm : tab_hr, saturation : tab_sat,hyperTension:tab_ht, hypotension: tab_hyp}
}

async function prepareData(dev){
    var rec = await getRecords(dev)
    var evnt = await getEvents(dev)
    var res = []
    for (let i = 0; i < rec.length; i++){
        res.push({DeviceID:dev, HeartBPM:rec[i].heartRythm, Timestamp:rec[i].timestamp, HeartPulse:rec[i].heartPulse, PWave:rec[i].pwave, pressSys:rec[i].pressureSys, pressDias:rec[i].pressureDias, Sa02:rec[i].sao2, evnt:""})
    }
    for (let i = 0; i < evnt.pwave.length; i++){
        res[parseInt(evnt.pwave[i].index)].evnt = res[parseInt(evnt.pwave[i].index)].evnt + "[PWave Abnormal]"
    }
    for (let i = 0; i < evnt.heartPulse.length; i++){
        res[parseInt(evnt.heartPulse[i].index)].evnt = res[parseInt(evnt.heartPulse[i].index)].evnt + "[HeartPulse Abnormal]"
    }
    for (let i = 0; i < evnt.heartRythm.length; i++){
        res[parseInt(evnt.heartRythm[i].index)].evnt = res[parseInt(evnt.heartRythm[i].index)].evnt + "[heartRythm Abnormal]"
    }
    for (let i = 0; i < evnt.hyperTension.length; i++){
        res[parseInt(evnt.hyperTension[i].index)].evnt = res[parseInt(evnt.hyperTension[i].index)].evnt + "[HyperTension]"
    }
    for (let i = 0; i < evnt.hypotension.length; i++){
        res[parseInt(evnt.hypotension[i].index)].evnt = res[parseInt(evnt.hypotension[i].index)].evnt + "[HypoTension]"
    }
    for (let i = 0; i < evnt.saturation.length; i++){
        res[parseInt(evnt.saturation[i].index)].evnt = res[parseInt(evnt.saturation[i].index)].evnt + "[saturation Abnormal]"
    }
    for (let i = 0; i < res.length; i++){
        if (res[i].evnt === ''){
            res[i].evnt = 'RAS'
        }
    }
    return res
}
module.exports = router

/* TODO : Replace the body of the function with the request from the IOTA */

router.post('/FetchData',async(req, res)=>{
    res.json(prepareData(1))
})

router.post('/FetchData2',async(req, res)=>{
    res.json([
        {"DeviceID" : 3, "Timestamp" : "2022-06-20 10:12:20", "HeartBPM" : 80, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"},
        {"DeviceID" : 3, "Timestamp" : "2022-06-20 10:12:25", "HeartBPM" : 80, "HeartPulse":true, "PWave" : true, "Sa02":99, "evnt":"RAS"},
        {"DeviceID" : 3, "Timestamp" : "2022-06-20 10:12:30", "HeartBPM" : 85, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"},
        {"DeviceID" : 3, "Timestamp" : "2022-06-20 10:12:35", "HeartBPM" : 92, "HeartPulse":true, "PWave" : false, "Sa02":97, "evnt":"PWave abnormal"},
        {"DeviceID" : 3, "Timestamp" : "2022-06-20 10:12:40", "HeartBPM" : 0, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"Heart failure"},
        {"DeviceID" : 3, "Timestamp" : "2022-06-20 10:12:30", "HeartBPM" : 85, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"}
    ])
})