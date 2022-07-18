const Web3 = require('web3');
var sc_ADDRESS = "0x8bc029F9DB91e35f4bB1CbA8697fBf5d93557A21";
var sc_ABI = require("../smartContracts/ABI.json")
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('HTTP://127.0.0.1:7545'));
const ourSC = new web3.eth.Contract(sc_ABI,sc_ADDRESS)

async function addAdmin(add) {
    let acc = await web3.eth.getAccounts()
    ourSC.methods.addAdmin(add).send({
        from: acc[0],
        gasLimit: '3000000'
    }, function (err, res) {
        if (err) {
            console.log("An error occured", err)
            return
        }
        console.log(" The admin has been added ", res)
    });
}

async function addDevice(dev){
    let acc = await web3.eth.getAccounts()
    await ourSC.methods.addDevice(1).send({from:acc[0], gasLimit: '3000000'},function (err, res){
        if (err) {
            console.log("An error occured", err)
            return
        }
        console.log(" The device has been added ", res)
    })
}

async function addRecord(dev, hrythm, hpulse, pwave, sa02, pressureS, pressureD){
    let acc = await web3.eth.getAccounts()
    await ourSC.methods.addRecord(dev,hrythm,hpulse,pwave,sa02,pressureS,pressureD).send({from:acc[0], gasLimit: '3000000'}, function (err, res){
        if (err) {
            console.log("An error occured", err)
            return
        }
        console.log(" The record has been added ")
    });
}