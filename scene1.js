//intially creates the class for the game's first scene
class scene1 extends Phaser.Scene {
  constructor() {
    //gives the key of scene one to the parent of the constructor 'scene1.js'
    super({key:"scene1"});
  }
  //preload, create, update, and delete are all callbacks
  //the preload function runs first in a phaser game loop it loads all assets before hand this allows the browser to have
  //the files ready when the game needs them decreasing overall loading time
  //preload does not actually display the loaded assets to the user
  //the preload function also gives me the ability to give the asset an identifier
  //this is the first parameter of the function
  preload(){
    this.load.image('luffy', 'assets/luffy.png');
    this.load.image('background', 'assets/background.png')
  }


//create is how the assets will be displayed to the user
  create(){
  //here we declare 'this' image and add it using the phaser add method
  //we define the height and width of our desired image and add it using
  //the identifier we gave it earlier
    this.image = this.add.image(100,100, 'luffy');

    //here we tie an event listener to our image that states when the D key is pressed and released
    //the image will be moved to the left by 10px within our defined window
    this.input.keyboard.on('keydown_D', function(event){
      this.image.x +=10;
    },this);//makes this image and not key up context(could have been achieved with es6)
    //defines movement
    this.input.keyboard.on('keydown_W', function(event){
      this.image.y -=10;
    },this);

    this.input.keyboard.on('keydown_X', function(event){
      this.image.y +=10;
    },this);



    //here we declare this.key_A as a keycode provided by phaser's methods
    //takes care of alot of our work for us
    this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
    this.input.on('pointerdown', function(event){
      this.image.x = event.x;
      this.image.y = event.y;

    },this);

    //creates the multi luffy effect
    this.input.keyboard.on('keyup_S', function(event){
      var physicsImage = this.physics.add.image(this.image.x, this.image.y, 'luffy')
      physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-100,100), -300);
    },this);

      //switches to cene 2 when 2 is pressed
    this.input.keyboard.on('keyup', function(e){
      if(e.key == "2")
      this.scene.start("scene2");
    },this);

    //switches to cene 3 when 3 is pressed
    this.input.keyboard.on('keyup', function(e){
      if(e.key == "3")
      this.scene.start("scene3");
    },this);

  }
  //update takes place the most frequntly in the phaser game loop
  //update also provides us with a way to scroll around an image via keypress
  //the one you use is up to prefrerence although update seems more practical
  //update is passed in a parameter 'delta' which is the amount of time since the last update
  //here we just say that if the mentioned key is down the image will get moved to the right
  update(delta){
    if(this.key_A.isDown)
    this.image.x--;
  }

}
