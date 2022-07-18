pragma solidity >=0.4.16 <0.9.0;
//todo modifier pour admin
contract ECG {

    constructor(){
        owner = msg.sender;
    }

    event PWaveAbnormal(uint deviceId, uint index);
    event HeartPulseAbnormal(uint deviceId, uint index);
    event HeartRythmAbnormal(uint deviceId, uint index);
    event SaturationAbnormal(uint deviceId, uint index);
    event HyperTension(uint deviceId, uint index);
    event HypoTension(uint deviceId, uint index);
    event Saturation(uint deviceId, uint index);
    event HeartFailure(uint deviceId, uint index);
    event newDevice(uint device, uint index);
    event storeData(uint deviceId, uint index); 

    address owner;
    address[] admins;

    modifier isAdmin(){
        bool part = false;
        for (uint j = 0; j< admins.length;j++){
            if (admins[j]==msg.sender){
                part = true;
            }
        }
        require (msg.sender == owner || part);
        _;
    }

    enum DeviceType{ALL}

    struct Record {
        uint heartRythm;
        bool heartPulse;
        bool pwave;
        uint timestamp;
        uint sao2;
        uint pressureSys;
        uint pressureDias;
        uint index;
    }

    struct Device {
        uint id;
        bool status; //set device status
        DeviceType typeDev;

    }

    mapping(uint=>Record[]) public records;
    //array of devices, for authentification
    Device[] devs;
    
    function addAdmin(address ad) public isAdmin returns (bool){
        bool part = false;
        for (uint j = 0; j< admins.length;j++){
            if (admins[j]==msg.sender){
                part = true;
            }
        }
        if (part){
            admins.push(ad);
            return true;
    }
    return false;
}
    

    function addDevice(uint id) public isAdmin returns (uint){
        //add a device in database, only allows operation if sender is admin
        uint j=0;
        for (j=0; j < devs.length; j+=1){
            if (devs[j].id == id){
                return 0;
            }
        }
        devs.push(Device(id, true,DeviceType.ALL));
        return 1;
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

    function getRecordLength(uint deviceId) public view returns (uint){
        // get record length associated to a device
        bool exist = false;
        uint j=0;
        for (j=0; j < devs.length; j+=1){
            if (devs[j].id == deviceId){
                exist = true;
            }
        }
        if (!exist) {
            return 0;
        }
        return records[deviceId].length;
    }


    function addRecord(uint deviceId,uint heartRythm, bool heartPulse, bool pwave, uint sao2, uint pressureS, uint pressureD) public isAdmin{
        //adds a record to a device
        bool res = authDev(deviceId);
        if (res){
            
            records[deviceId].push(Record(heartRythm, heartPulse, pwave, block.timestamp, sao2, pressureS,pressureD, records[deviceId].length));
            decision(deviceId, records[deviceId].length-1);
            emit storeData(deviceId, records[deviceId].length-1);
        }
    }

    function decision(uint devId,uint index) private {
        //decision for a record
        uint heartRythm= records[devId][index].heartRythm;
        bool heartPulse = records[devId][index].heartPulse;
        bool pwave = records[devId][index].pwave;
        uint sao2 = records[devId][index].sao2;
        uint pressureS = records[devId][index].pressureSys;
        uint pressureD = records[devId][index].pressureDias;
        if(pwave==false){
            emit PWaveAbnormal(devId,index);
        }
        if(heartPulse==false){
            emit HeartPulseAbnormal(devId,index);
        }
        if(sao2 < 95){
            emit SaturationAbnormal(devId,index);
        }
        if(pressureS>140 || pressureD>90){
            emit HyperTension(devId,index);
        }
        if(pressureS<90 || pressureD<60){
            emit HypoTension(devId,index);
        }
        if (heartRythm<60 || heartRythm>100){
            emit HeartRythmAbnormal(devId,index);
        }
    }


}