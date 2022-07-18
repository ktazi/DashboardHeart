<template>
<div>
  <!-- Title -->
  <h1 class="title text-light text-center mt-5 mb-5">
    DASHBOARD
  </h1>
  <div class="d-flex flex-row justify-content-center">
    <!-- Input to visualize the data from each machine -->
    <div>
      <div class="form__group field" style="max-width: 300px;">
        <input type="number" v-model="deviceId"  class="form__field" name="ID of device" id="iddev">
        <label for="iddev" class="form__label">ID of device</label>
      </div>
    </div>
    <!-- Refresh button -->
    <button class="button-78 mr-5" v-on:click="refrsh">Refresh</button>
  </div>
  <div class="mr-auto ml-auto" style="max-width: fit-content">
    <table class="table-responsive" style=" max-width: 100%;max-height: 500px">
      <thead>
      <tr class="sticky-top" style="background-color: #242526">
        <th>DeviceID
        <th>Heart Rhythm BPM
        <th>Heart Pulse
        <th>P-Wave
        <th>Timestamp
        <th>Sa02
        <th>Systolic pressure
        <th>Diastolic pressure
        <th>Event
      </thead>
      <tbody>
      <tr v-for="entry in logs" >
        <td v-if="entry.evnt==='RAS'" style="color: greenyellow">{{entry.DeviceID}}</td>
        <td v-else-if="entry.evnt==='Heart failure'" style="color: crimson">{{entry.DeviceID}}</td>
        <td v-else style="color: darkorange">{{entry.DeviceID}}</td>
        <td v-if="entry.evnt==='RAS'" style="color: greenyellow">{{entry.HeartBPM}}</td>
        <td v-else-if="entry.evnt==='Heart failure'" style="color: crimson">{{entry.HeartBPM}}</td>
        <td v-else style="color: darkorange">{{entry.HeartBPM}}</td>
        <td v-if="entry.evnt==='RAS'" style="color: greenyellow">{{entry.HeartPulse}}</td>
        <td v-else-if="entry.evnt==='Heart failure'" style="color: crimson">{{entry.HeartPulse}}</td>
        <td v-else style="color: darkorange">{{entry.HeartPulse}}</td>
        <td v-if="entry.evnt==='RAS'" style="color: greenyellow">{{entry.PWave}}</td>
        <td v-else-if="entry.evnt==='Heart failure'" style="color: crimson">{{entry.PWave}}</td>
        <td v-else style="color: darkorange">{{entry.PWave}}</td>
        <td v-if="entry.evnt==='RAS'" style="color: greenyellow">{{entry.Timestamp}}</td>
        <td v-else-if="entry.evnt==='Heart failure'" style="color: crimson">{{entry.Timestamp}}</td>
        <td v-else style="color: darkorange">{{entry.Timestamp}}</td>
        <td v-if="entry.evnt==='RAS'" style="color: greenyellow">{{entry.Sa02}}</td>
        <td v-else-if="entry.evnt==='Heart failure'" style="color: crimson">{{entry.Sa02}}</td>
        <td v-else style="color: darkorange">{{entry.Sa02}}</td>
        <td v-if="entry.evnt==='RAS'" style="color: greenyellow">{{entry.pressSys}}</td>
        <td v-else-if="entry.evnt==='Heart failure'" style="color: crimson">{{entry.pressSys}}</td>
        <td v-else style="color: darkorange">{{entry.pressSys}}</td>
        <td v-if="entry.evnt==='RAS'" style="color: greenyellow">{{entry.pressDias}}</td>
        <td v-else-if="entry.evnt==='Heart failure'" style="color: crimson">{{entry.pressDias}}</td>
        <td v-else style="color: darkorange">{{entry.pressDias}}</td>
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
      logs : []
    }
  },
  mounted: async function () {
    await this.re()
  },
  methods : {
    re : async function(){
      var test = this
      setInterval(async function(){
        let mes = await axios.get('/api/FetchData', {headers:{"device" : test.deviceId}});
        test.logs = mes.data
      }, 5000)
    },
    refrsh : async function(){
      let mes = await axios.get('/api/FetchData', {headers:{"device" : this.deviceId}});
      test.logs = mes.data
    }
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

.button-78 {
  align-items: center;
  appearance: none;
  background-clip: padding-box;
  background-color: initial;
  background-image: none;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  flex-direction: row;
  flex-shrink: 0;
  font-family: Eina01,sans-serif;
  font-size: 16px;
  font-weight: 800;
  justify-content: center;
  line-height: 24px;
  margin: 0;
  min-height: 64px;
  outline: none;
  overflow: visible;
  padding: 19px 26px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: auto;
  word-break: keep-all;
  z-index: 0;
}

@media (min-width: 768px) {
  .button-78 {
    padding: 19px 32px;
  }
}

.button-78:before,
.button-78:after {
  border-radius: 80px;
}

.button-78:before {
  background-image: linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
  content: "";
  display: block;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -2;
}

.button-78:after {
  background-color: initial;
  background-image: linear-gradient(#541a0f 0, #1a1a1a 100%);
  bottom: 4px;
  content: "";
  display: block;
  left: 4px;
  overflow: hidden;
  position: absolute;
  right: 4px;
  top: 4px;
  transition: all 100ms ease-out;
  z-index: -1;
}

.button-78:hover:not(:disabled):before {
  background: linear-gradient(92.83deg, rgb(255, 116, 38) 0%, rgb(249, 58, 19) 100%);
}

.button-78:hover:not(:disabled):after {
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  transition-timing-function: ease-in;
  opacity: 0;
}

.button-78:active:not(:disabled) {
  color: #ccc;
}

.button-78:active:not(:disabled):before {
  background-image: linear-gradient(0deg, #1a1a1a, rgba(0, 0, 0, .2)), linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
}

.button-78:active:not(:disabled):after {
  background-image: linear-gradient(#541a0f 0,#1a1a1a 100%);
  bottom: 4px;
  left: 4px;
  right: 4px;
  top: 4px;
}

.button-78:disabled {
  cursor: default;
  opacity: .24;
}
</style>