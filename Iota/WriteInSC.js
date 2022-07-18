

/* Smart contract */

const Web3 = require('web3');

var sc_ADDRESS =  require("../smartContracts/SCAddress.json")
console.log(sc_ADDRESS)
var sc_ABI = require("../smartContracts/ABI.json")
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('HTTP://127.0.0.1:7545'));
const ourSC = new web3.eth.Contract(sc_ABI,sc_ADDRESS.addressSC)

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
    await ourSC.methods.addDevice(dev).send({from:acc[0], gasLimit: '3000000'},function (err, res){
        if (err) {
            console.log("An error occured", err)
            return
        }
        console.log(" The device has been added ", res)
    })
}


/* IOTA */

const Iota = require('@iota/core');
const Extract = require('@iota/extract-json');
let zmq = require('zeromq');
let sock = zmq.socket('sub');
const txconverter = require('@iota/transaction-converter');
const converter = require('@iota/converter');

var itte = 0;

sock.connect('tcp://192.168.1.14:5556')

sock.subscribe('tx_trytes');

console.log("Connector : Waiting Data from IOTA...");

const iota = Iota.composeAPI({
    provider: 'http://192.168.1.14:14265'
});
console.time("Time-Execution");

sock.on('message', msg => {
    const data = msg.toString().split(' ');
    const txobj = txconverter.asTransactionObject(data[1]);
    var tailTransactionHash = txobj.hash;
    iota.getBundle(tailTransactionHash)
        .then(function(bundle) {
            var message = JSON.parse(Extract.extractJson(bundle));
            ourSC.methods.addRecord(message.dev,message.hr, message.hp, message.pwave, message.sat, message.pressS,message.pressD).send({from:"0x6B174A7957ab22c34CDaA55F31518B3B98DbfE45", gasLimit: '3000000'}, function (err, res){
                if (err) {
                    console.log("An error occured", err)
                    return
                }
                console.log(" The record has been added : ", res)
            });
            bundle = null;
        })
        .catch(err => {
            console.error(err);
        });

});


