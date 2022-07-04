
var http = require('http');
const Web3 = require('web3');
var sc_ADDRESS = "0xC3B66D818945259792EAe741C588eef4EbE37648";
var sc_ABI = JSON.parse('[	{"inputs": [			{				"internalType": "uint256",				"name": "num",				"type": "uint256"			}		],		"name": "store",		"outputs": [],		"stateMutability": "nonpayable",		"type": "function"	},	{		"inputs": [],		"name": "retrieve",		"outputs": [			{				"internalType": "uint256",				"name": "",				"type": "uint256"		}],	"stateMutability": "view","type": "function"	}]');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('HTTP://127.0.0.1:7545'));
console.log(web3.version)
var account = "0xaefD0A351EfC971B7feeA22351a772A0548803b2";
const ourSC = new web3.eth.Contract(sc_ABI,sc_ADDRESS)
http.createServer(function (req, res) {
    console.log('request received')
    ourSC.methods.retrieve().call(function( err, info ) { 
        if (err){
            console.log("An error occured", err)
              return
        }
        console.log("the last stored number of our Storage smart contract is (calling the retrieve function) : ", info);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(info);
    });
}).listen(8185);

