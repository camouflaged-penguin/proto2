class SceneOver extends Phaser.Scene {
  constructor() {
    super('SceneOver');
  }
  preload()
  {
    this.load.image('background', 'assets/background.jpg');
    this.load.image('banana', 'assets/banana.png')
    this.load.image('basket', 'assets/basket.png')
    this.load.image('plane', 'assets/plane.png');

  }
  create() {

    this.background = this.add.image(0, 0, 'background');
    this.background.setOrigin(0,0);

    var bananaGroup = this.physics.add.group({
      key: 'banana',

      setXY: { x: (Phaser.Math.Between(150, 800)), y: 0, stepX: 70 }
    });


    // var text = this.add.text(
    //        640,
    //        360,
    //        "Hello World",
    //        {
    //            fontSize: 50,
    //            color: "#000000",
    //            fontStyle: "bold"
    //        }
    //    ).setOrigin(0.5);



  }
  update() {

  }








}
