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



var pwave = Boolean(Math.round(Math.random() > 0,9));
var heartPulse = Boolean(Math.round(Math.random() > 0,9));
var sao2 = gaussian(97.5, 3);
var pressureS = gaussian(115, 25);
var pressureD = gaussian(75, 15);
var heartRythm = gaussian(80, 20);


console.log("Pwave : " + pwave);
console.log("Heart Pulse : " + heartPulse);
console.log("Systolic Pressure : " + pressureS());
console.log("Diastolic Pressure : " + pressureD());
console.log("Heart Rythm : " + heartRythm());
console.log("sao2 : " + sao2());