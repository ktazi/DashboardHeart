const express = require('express')
const router = express.Router()
const Web3 = require('web3');
var sc_ADDRESS = "0x8bc029F9DB91e35f4bB1CbA8697fBf5d93557A21";
var sc_ABI = require("../../smartContracts/ABI.json")
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('HTTP://127.0.0.1:7545'));
const ourSC = new web3.eth.Contract(sc_ABI,sc_ADDRESS)
async function getRecords(dev) {
    size = await ourSC.methods.getRecordLength(dev).call(function(err, res){
        if (err)
            return
        return res
    });
    recs = []
    for (let i = 0; i < size; i++){
        recs.push(await ourSC.methods.records(dev,i).call( function (err, res){
            if (err)
                return
            return res
        }))
    }
    return recs;
}
async function getEvents(dev) {
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
    accounts = await web3.eth.getAccounts()
    accounts = accounts[0]
    var rec = await getRecords(dev)
    var evnt = await getEvents(dev)
    var res = []
    for (let i = 0; i < rec.length; i++){
        res.push({DeviceID:dev, HeartBPM:rec[i].heartRythm, Timestamp:rec[i].timestamp, HeartPulse:rec[i].heartPulse, PWave:rec[i].pwave, pressSys:rec[i].pressureSys, pressDias:rec[i].pressureDias, Sa02:rec[i].sao2, evnt:"", ind:parseInt(rec[i].index)})
    }
    for (let i = 0; i < evnt.pwave.length; i++){
        for (let j = 0; j < res.length; j++){
            if (res[j].ind ===parseInt(evnt.pwave[i].index)){
                res[j].evnt = res[j].evnt + "[PWave Abnormal]"
                break
            }
        }
    }
    for (let i = 0; i < evnt.heartPulse.length; i++){
        for (let j = 0; j < res.length; j++){
            if (res[j].ind ===parseInt(evnt.heartPulse[i].index)){
                res[j].evnt = res[j].evnt + "[heartPulse Abnormal]"
                break
            }
        }
    }
    for (let i = 0; i < evnt.heartRythm.length; i++){
        for (let j = 0; j < res.length; j++){
            if (res[j].ind ===parseInt(evnt.heartRythm[i].index)){
                res[j].evnt = res[j].evnt + "[heartRythm Abnormal]"
                break
            }
        }
    }
    for (let i = 0; i < evnt.hyperTension.length; i++){
        for (let j = 0; j < res.length; j++){
            if (res[j].ind ===parseInt(evnt.hyperTension[i].index)){
                res[j].evnt = res[j].evnt + "[hyperTension]"
                break
            }
        }
    }
    for (let i = 0; i < evnt.hypotension.length; i++){
        for (let j = 0; j < res.length; j++){
            if (res[j].ind ===parseInt(evnt.hypotension[i].index)){
                res[j].evnt = res[j].evnt + "[hypotension]"
                break
            }
        }
    }
    for (let i = 0; i < evnt.saturation.length; i++){
        for (let j = 0; j < res.length; j++){
            if (res[j].ind ===parseInt(evnt.saturation[i].index)){
                res[j].evnt = res[j].evnt + "[saturation abnormal]"
                break
            }
        }
    }
    for (let i = 0; i < res.length; i++){
        if (res[i].evnt === ''){
            res[i].evnt = 'RAS'
        }
    }
    return res
}

router.get('/FetchData',async(req, res)=>{

    res.json(await prepareData(parseInt(req.headers.device)))
})
module.exports = router
