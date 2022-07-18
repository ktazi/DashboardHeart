// Random Sensor data generation

function gaussian(mean, stdev) {
    var y2;
    var use_last = false;
    return function() {
        var y1;
        if (use_last) {
            y1 = y2;
            use_last = false;
        } else {
            var x1, x2, w;
            do {
                x1 = 2.0 * Math.random() - 1.0;
                x2 = 2.0 * Math.random() - 1.0;
                w = x1 * x1 + x2 * x2;
            } while (w >= 1.0);
            w = Math.sqrt((-2.0 * Math.log(w)) / w);
            y1 = x1 * w;
            y2 = x2 * w;
            use_last = true;
        }

        var retval = mean + stdev * y1;
        if (retval > 0)
            return retval;
        return -retval;
    }
}
var pwave = () => Boolean(Math.round(Math.random() > 0,9));
var heartPulse = () => Boolean(Math.round(Math.random() > 0,9));
var sao2 = gaussian(97.5, 3);
var pressureS = gaussian(115, 25);
var pressureD = gaussian(75, 15);
var heartRythm = gaussian(80, 20);

function sensorRandom1(d){
    return {dev: d, pwave : pwave(), hp : heartPulse(), pressS: parseInt(pressureS()), pressD:parseInt(pressureD()), hr:parseInt(heartRythm()), sat: parseInt(sao2())}
}

//Transfer to IOTA

const Iota = require('@iota/core');
const Converter = require('@iota/converter');
const generate = require('iota-generate-seed');

const iota = Iota.composeAPI({
    provider: 'http://192.168.1.14:14265'
});
const depth = 3;
const minimumWeightMagnitude = 14;
const seed = generate();
const devs = [1,2]
setInterval(function () {
        const address = 'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D';
        for (var i = 0; i < devs.length; i++) {
            console.log("***************** SEND DATA DEVICE   *********************")
            /* GENERATE THE DATA OF THE ALL-PURPOSE SENSOR*/
            var mesure = sensorRandom1(devs[i])
            console.log(mesure)
            /*Prepare it for transfer*/
            const m = JSON.stringify(mesure);
            const message = Converter.asciiToTrytes(m)
            const transfers = [
                {
                    value: 0,
                    address: address, // Where the data is being sent
                    message: message // The message converted into trytes
                }
            ]
            /*Transfer to IOTA*/
            iota
                .prepareTransfers(seed, transfers)
                .then(trytes => iota.sendTrytes(trytes, 3, 14))
                .then(bundle => {
                    console.log("************************************************************")
                    console.log("Transfer successfully sent")
                    console.log("************************************************************")
                    bundle.map(tx => console.log(tx))
                    console.log("************************************************************")
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
    , 20000);