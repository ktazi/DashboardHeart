<template>
<div>
  <h1 class="title text-light text-center mt-5 mb-5">
    DASHBOARD
  </h1>

  <div>
    <div class="form__group field" style="max-width: 300px; margin-left: auto; margin-right: auto">
      <input type="number" v-model="deviceId"  class="form__field" name="ID of device" id="iddev">
      <label for="iddev" class="form__label">ID of device</label>
    </div>
  </div>
  <div class="mr-auto ml-auto" style="max-width: fit-content">
    <table class="table-responsive" style=" max-width: 100%;max-height: 500px">
      <thead>
      <tr class="sticky-top" style="background-color: #242526">
        <th>DeviceID
        <th>Heart Rhythm BPM
        <th>Heart Pulse
        <th>P-Wave
        <th>Sa02
        <th>Timestamp
        <th>Event
      </thead>
      <tbody>
      <tr v-for="entry in logs.filter(el => el.DeviceID==deviceId)" >
        <td >{{entry.DeviceID}}</td>
        <td>{{entry.HeartBPM}}</td>
        <td>{{entry.HeartPulse}}</td>
        <td>{{entry.PWave}}</td>
        <td>{{entry.Timestamp}}</td>
        <td>{{entry.Sa02}}</td>
        <td v-if="entry.evnt==='RAS'" style="color: greenyellow">{{entry.evnt}}</td>
        <td v-else-if="entry.evnt==='Heart failure'" style="color: crimson">{{entry.evnt}}</td>
        <td v-else style="color: darkorange">{{entry.evnt}}</td>

      </tr>
      </tbody>
    </table>
  </div>
</div>

</template>

<script>
module.exports = {
  data : function(){
    return {
      deviceId: 1,
      logs : [
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:20", "HeartBPM" : 80, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"},
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:25", "HeartBPM" : 80, "HeartPulse":true, "PWave" : true, "Sa02":99, "evnt":"RAS"},
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:30", "HeartBPM" : 85, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"},
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:35", "HeartBPM" : 92, "HeartPulse":true, "PWave" : false, "Sa02":97, "evnt":"PWave abnormal"},
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:40", "HeartBPM" : 0, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"Heart failure"},
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:30", "HeartBPM" : 85, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"},
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:35", "HeartBPM" : 92, "HeartPulse":true, "PWave" : false, "Sa02":97, "evnt":"PWave abnormal"},
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:40", "HeartBPM" : 0, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"Heart failure"},
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:30", "HeartBPM" : 85, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"},
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:35", "HeartBPM" : 92, "HeartPulse":true, "PWave" : false, "Sa02":97, "evnt":"PWave abnormal"},
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:40", "HeartBPM" : 0, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"Heart failure"},
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:30", "HeartBPM" : 85, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"},
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:35", "HeartBPM" : 92, "HeartPulse":true, "PWave" : false, "Sa02":97, "evnt":"PWave abnormal"},
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:40", "HeartBPM" : 0, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"Heart failure"},
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:30", "HeartBPM" : 85, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"},
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:35", "HeartBPM" : 92, "HeartPulse":true, "PWave" : false, "Sa02":97, "evnt":"PWave abnormal"},
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:40", "HeartBPM" : 0, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"Heart failure"},
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:30", "HeartBPM" : 85, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"},
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:35", "HeartBPM" : 92, "HeartPulse":true, "PWave" : false, "Sa02":97, "evnt":"PWave abnormal"},
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:40", "HeartBPM" : 0, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"Heart failure"},
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:30", "HeartBPM" : 85, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"},
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:35", "HeartBPM" : 92, "HeartPulse":true, "PWave" : false, "Sa02":97, "evnt":"PWave abnormal"},
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:40", "HeartBPM" : 0, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"Heart failure"},
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:30", "HeartBPM" : 85, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"},
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:35", "HeartBPM" : 92, "HeartPulse":true, "PWave" : false, "Sa02":97, "evnt":"PWave abnormal"},
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:40", "HeartBPM" : 0, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"Heart failure"},
        {"DeviceID" : 1, "Timestamp" : "2022-06-20 10:12:30", "HeartBPM" : 85, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:35", "HeartBPM" : 92, "HeartPulse":true, "PWave" : false, "Sa02":97, "evnt":"PWave abnormal"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:40", "HeartBPM" : 0, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"Heart failure"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:30", "HeartBPM" : 85, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:35", "HeartBPM" : 92, "HeartPulse":true, "PWave" : false, "Sa02":97, "evnt":"PWave abnormal"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:40", "HeartBPM" : 0, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"Heart failure"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:30", "HeartBPM" : 85, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:35", "HeartBPM" : 92, "HeartPulse":true, "PWave" : false, "Sa02":97, "evnt":"PWave abnormal"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:40", "HeartBPM" : 0, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"Heart failure"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:20", "HeartBPM" : 80, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:25", "HeartBPM" : 80, "HeartPulse":true, "PWave" : true, "Sa02":99, "evnt":"RAS"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:30", "HeartBPM" : 85, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:35", "HeartBPM" : 92, "HeartPulse":true, "PWave" : false, "Sa02":97, "evnt":"PWave abnormal"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:40", "HeartBPM" : 0, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"Heart failure"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:30", "HeartBPM" : 85, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:35", "HeartBPM" : 92, "HeartPulse":true, "PWave" : false, "Sa02":97, "evnt":"PWave abnormal"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:40", "HeartBPM" : 0, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"Heart failure"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:30", "HeartBPM" : 85, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:35", "HeartBPM" : 92, "HeartPulse":true, "PWave" : false, "Sa02":97, "evnt":"PWave abnormal"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:40", "HeartBPM" : 0, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"Heart failure"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:30", "HeartBPM" : 85, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:35", "HeartBPM" : 92, "HeartPulse":true, "PWave" : false, "Sa02":97, "evnt":"PWave abnormal"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:40", "HeartBPM" : 0, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"Heart failure"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:30", "HeartBPM" : 85, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:35", "HeartBPM" : 92, "HeartPulse":true, "PWave" : false, "Sa02":97, "evnt":"PWave abnormal"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:40", "HeartBPM" : 0, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"Heart failure"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:30", "HeartBPM" : 85, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:35", "HeartBPM" : 92, "HeartPulse":true, "PWave" : false, "Sa02":97, "evnt":"PWave abnormal"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:40", "HeartBPM" : 0, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"Heart failure"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:30", "HeartBPM" : 85, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:35", "HeartBPM" : 92, "HeartPulse":true, "PWave" : false, "Sa02":97, "evnt":"PWave abnormal"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:40", "HeartBPM" : 0, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"Heart failure"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:30", "HeartBPM" : 85, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:35", "HeartBPM" : 92, "HeartPulse":true, "PWave" : false, "Sa02":97, "evnt":"PWave abnormal"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:40", "HeartBPM" : 0, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"Heart failure"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:30", "HeartBPM" : 85, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:35", "HeartBPM" : 92, "HeartPulse":true, "PWave" : false, "Sa02":97, "evnt":"PWave abnormal"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:40", "HeartBPM" : 0, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"Heart failure"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:30", "HeartBPM" : 85, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:35", "HeartBPM" : 92, "HeartPulse":true, "PWave" : false, "Sa02":97, "evnt":"PWave abnormal"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:40", "HeartBPM" : 0, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"Heart failure"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:30", "HeartBPM" : 85, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"RAS"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:35", "HeartBPM" : 92, "HeartPulse":true, "PWave" : false, "Sa02":97, "evnt":"PWave abnormal"},
        {"DeviceID" : 2, "Timestamp" : "2022-06-20 10:12:40", "HeartBPM" : 0, "HeartPulse":true, "PWave" : true, "Sa02":98, "evnt":"Heart failure"},
      ],
      plByMonth : [
        { name: 'Jan', pl: 1000, avg: 500, inc: 300 },
        { name: 'Feb', pl: 2000, avg: 900, inc: 400 },
        { name: 'Apr', pl: 400, avg: 400, inc: 500 },
        { name: 'Mar', pl: 3100, avg: 1300, inc: 700 },
        { name: 'May', pl: 200, avg: 100, inc: 200 },
        { name: 'Jun', pl: 600, avg: 400, inc: 300 },
        { name: 'Jul', pl: 500, avg: 90, inc: 100 }
      ],
      direction : 'horizontal',
      margin : {
        left: 0,
        top: 20,
        right: 20,
        bottom: 0
      },
      axis : {
        primary: {
          type: 'band'
        },
        secondary: {
          domain: ['dataMin', 'dataMax + 100'],
          type: 'linear',
          ticks: 8
        }
      }
    }
  },
  mounted: async function () {
    console.log(this.logs)
  }

}


</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600);

*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #1a1a1a;
  font-family: 'Open Sans', sans-serif;
}
table {
  background: #242526;
  border-radius: 0.25em;
  border-collapse: collapse;
  margin: 1em;
  max-height: 300px;
}
th {
  border-bottom: 1px solid #364043;
  color: #E2B842;
  font-size: 0.85em;
  font-weight: 600;
  padding: 0.5em 1em;
  text-align: left;
}
td {
  color: #fff;
  font-weight: 400;
  padding: 0.65em 1em;
}
.disabled td {
  color: #4F5F64;
}
tbody tr {
  transition: background 0.25s ease;
}
tbody tr:hover {
  background: #014055;
}

.form__group {

  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
}

.form__field {

  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: #ffffff;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
}
.form__field::placeholder {
   color: transparent;
}


.form__field:placeholder-shown ~ .form__label {
  font-size: 1.3rem;
  cursor: text;
  top: 20px;
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #9b9b9b;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  font-family: 'Open Sans', sans-serif;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
  font-family: 'Open Sans', sans-serif;
}
</style>