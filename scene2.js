class scene2 extends Phaser.Scene {
  constructor() {
    super({key: "scene2"});
  }

  create(){
    //adds text to our second scene
    this.text = this.add.text(0,0, "welcome to scene 2!", {font:"40px impacr"});
    // a tween is like a transition aninmation in this case we target our text
    //we define both x and y coordinates for our text we also state the length in time of the animation
    //defined the type of animation with 'ease' lol
    //easeParams sets the exaggeration of the animation
    //set how long to wait before beginning animation with delay
    // made text move to the middle of the page when we reach scene 2
    //the targets property is technically an array which is why we target our text in onComplete with tgt[0]
    //once the animation is complete the words will return to the upper right hand corner
    //as red text
    var tween = this.tweens.add({
      targets: this.text,
      x:200,
      y:250,
      duration:2000,
      ease: "Elastic",
      easeParams: [1.5,0.5],
      delay:1000,
      onComplete: function(src,tgt){
        tgt[0].x = 0,
        tgt[0].y = 0,
        tgt[0].setColor("Red");
      }

    },this);

    //here we tell JS that this.key_! is assigned to phaser's keycode for 1
    this.key_1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);

  }
  //this is how we navigate back to the first scene from the second once again using a phaser keycode
  update(delta){
    if (this.key_1.isDown)
    this.scene.start('scene1');
  }
}
