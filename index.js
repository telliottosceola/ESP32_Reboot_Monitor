const sp = require("serialport");
const sensor = require('./sensor_spoof.js');
const port = new sp("/dev/cu.SLAB_USBtoUART", { baudRate: 115200 });
var transCount;
sensor();
// port.on("open", function(err){
//   if(err){
//     console.log(err);
//   }else{
//     port.set({rts:false, dtr:false},function(err){
//       if(err){
//         console.log(err);
//       }else{
//         sensor();
//       }
//     });
//   }
// });
//
//
// port.on('data', function(data){
//   data = data.toString();
//
//   if(data.indexOf("Transmission count:") > -1){
//     transCount = data.split(": ").pop()*1;
//     if((transCount %100) == 0){
//       console.log(`running after ${transCount} transmissions`);
//     }
//   }
//
//   if(data.indexOf("WiFi connected to Travis-WiFi") > -1){
//     console.log("=================================");
//     console.log(`rebooted after ${transCount} transmissions`);
//     console.log("=================================");
//   }
// });
