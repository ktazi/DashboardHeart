pragma solidity >=0.4.16 <0.9.0;

contract ECG {

    event PWaveAbnormal(bool pwave);
    event HeartPulseAbnormal(bool hp);
    event HeartRythmAbnormal(uint hr);
    event SaturationAbnormal(uint sao2);
    event HyperTension(uint prS, uint prD);
    event HypoTension(uint prS, uint prD);
    event Saturation(uint sao2);
    event HeartFailure(uint heartRythm, bool heartPulse);
    
    enum DeviceType{ALL}

    struct Record {
        uint heartRythm;
        bool heartPulse;
        bool pwave;
        uint timestamp;
        uint sao2;
        uint pressureSys;
        uint pressureDias;
    }

    struct Device {
        uint id;
        DeviceType typeDev;
    }
    
    mapping(uint=>Record[]) public data;
    //array of devices, for authentification
    Device[] devs;
    address[] admins;

    function addAdmin(address ad) public returns (bool){
        if (admins.length == 0 || checkAdmin()){
            admins.push(ad);
            return true;
        }
        return false;
    }

    function checkAdmin() private view returns (bool){
        //check if sender is admin
        uint j=0;
        for (j=0; j < admins.length; j+=1){
            if (admins[j] == msg.sender){
                return true;
            }
        }
        return false;
    }

    function addDevice(uint id) public returns (bool){
        //add a device in database, only allows operation if sender is admin
        if (checkAdmin()){
            uint j=0;
            for (j=0; j < devs.length; j+=1){
                if (devs[j].id == id){
                    return false;
                }
            }
            devs.push(Device(id, DeviceType.ALL));
            return true;
        }
        return false;
    }

    function authDev(uint id) private view returns (bool){
        //test existance in database
        uint j=0;
        for (j=0; j < devs.length; j+=1){
            if (devs[j].id == id){
                return true;
            }
        }
        return false;
    }

    function addRecord(uint deviceId,uint heartRythm, bool heartPulse, bool pwave, uint sao2, uint pressureS, uint pressureD) public {
        //adds a record to a device
        if (authDev(deviceId)){
            data[deviceId].push(Record(heartRythm, heartPulse, pwave, block.timestamp, sao2, pressureS,pressureD));
            decision(deviceId, data[deviceId].length-1);
        }
    }

    function decision(uint devId,uint index) private {
        //decision for a record
        uint heartRythm= data[devId][index].heartRythm;
        bool heartPulse = data[devId][index].heartPulse;
        bool pwave = data[devId][index].pwave;
        uint sao2 = data[devId][index].sao2;
        uint pressureS = data[devId][index].pressureSys;
        uint pressureD = data[devId][index].pressureDias;
        if(pwave==false){
            emit PWaveAbnormal(pwave);
        }
        if(heartPulse==false){
            emit HeartPulseAbnormal(heartPulse);
        }
        if(sao2 < 95){
            emit SaturationAbnormal(sao2);
        }
        if(pressureS>140 || pressureD>90){
            emit HyperTension(pressureS, pressureD);
        }
        if(pressureS<90 || pressureD<60){
            emit HypoTension(pressureS, pressureD);
        }
        if (heartRythm<60 || heartRythm>100){
            emit HeartRythmAbnormal(heartRythm);
        }
    }


}