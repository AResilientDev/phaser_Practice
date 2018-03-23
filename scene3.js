class scene3 extends Phaser.Scene {
  constructor() {
    super({key:"scene3"});
  }
  //preloaded the mp3 to reduce load time
    preload(){
      this.load.audio("test", ["assets/cow.mp3"]);
    }
    //here we actually add the sound to our game and give it the identifier of test and make it loop
    //we can play the file using one of phasers methods
    //we also set the olay rate to 75% speed
    create(){
      this.soundFX =this.sound.add("test", {loop: "true"});
      this.soundFX.play();
      this.soundFX.rate = 0.75;

      //here we give ourselves a way to escape the dastardly loop via holding down c
      //phaser has another handy method that allows us to pause an audio file
      //it simply states if the audio file is playing pressing c will pause it
      //otherwise it will resume playing the audio
        break;
      this.input.keyboard.on("keydown_C", function(e){
        if(this.soundFX.isPlaying) this.soundFX.pause();
        else this.soundFX.resume();
      },this);
  }
}
