var config = {
  type: Phaser.Auto,
  //sets the size of the game window
  width:800,
  height:800,
  //sets physics engine
  //and defines gravity
  physics: {
    default: 'arcade',
    arcade:{
      gravity: {y: 200}
    }
  },
    scene:[scene1, scene2, scene3]
};
//creates a new instance of a game using our config
var game = new Phaser.Game(config);
