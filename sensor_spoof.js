const sp = require("serialport");
module.exports = function(){
  const port = new sp("/dev/tty.usbserial-AD025Q3O", { baudRate: 115200 });
  var transCount;
  port.on("open", function(err){
    if(err){
      console.log(err);
    }else{
      port.set({rts:false, dtr:false},function(err){
        if(err){
          console.log(err);
        }else{
          transmit();
        }
      });
    }
  });

  function transmit(){
    setTimeout(function(){
      var transData = Buffer.from([126,0,27,16,1,0,0,0,0,0,0,255,255,255,254,0,0,127,1,3,3,239,1,0,1,0,13,157,9,109,92]);
      port.write(transData);
      transmit();
    },2000);
  }
}
