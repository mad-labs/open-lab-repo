
function OggettinoFigo(testo){
  this.proprietaScema = testo;
  this.funzioneScema = function (){
    console.log("this.proprietaScema: ", this.proprietaScema);
  }.bind(this);
};

var oggettinoFigo = new OggettinoFigo("sono scema");
var oggettinoFigo2 = new OggettinoFigo("NON sono scema");

oggettinoFigo2.funzioneScema = oggettinoFigo.funzioneScema;

setTimeout(oggettinoFigo2.funzioneScema, 1000);