const express = require('express')
const router = express.Router()

module.exports = router

/* TODO : Replace the body of the function with the request from the IOTA */
/* TODO : Add login and device type, modifiers only admins require */

router.post('/FetchData',async(req, res)=>{
    res.json([
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
    ])
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