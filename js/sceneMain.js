class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }
  preload()
  {
    //load images or sounds
    //this.load.image("key","path")
    this.load.image('background', 'assets/backgroundPrototype.png');
    this.load.image('banana', 'assets/banana.png');
    this.load.image('basket', 'assets/basket.png');
    this.load.image('plane', 'assets/plane.png');
  }
  create() {
      //wold bounds
      //this.matter.world.setBounds(0, 0, game.config.width, game.config.height);

      this.background = this.add.image(0, 0, 'background');
      this.background.setOrigin(0,0);

      //platforms.create(400, 568, 'ground').setScale(2).refreshBody();

      // this.groundplane = this.physics.add.staticGroup(0, 1000, 'plane');
      //this.groundplane.setOrigin(0,0);
      //groundplane.refreshBody;


      var groundplane = this.physics.add.staticGroup({
        key: 'plane',
        //repeat: 1,
        setXY: { x: 0, y: 1000 },

        //.refreshBody();
      });
      groundplane.refreshBody;
      groundplane.setOrigin(0,0);


      // as property 27.04.2021
      // this.bananaGroup = this.physics.add.group(
       this.bananaGroup = this.physics.add.group(
        {
          key: 'banana',
          repeat: 1,
          setScale:{ x: 0.3, y: 0.3 },
          setSize: {x: 20, y: 20},
          setXY: { x: (Phaser.Math.Between(150, 800)), y: 0, stepX: 100 }
        }
      );




      //this.bananaGroup.create(400, 0, 'banana').setScale(0.5).setSize(20, 20);


      // property end

      // var bananaGroup = this.physics.add.group({
      //   key: 'banana',
      //   repeat: 1,
      //   createCallback: function (banana) {
      //
      //     banana.setScale(0.5).setSize(20, 20);
      //
      //   },
      //   setXY: { x: (Phaser.Math.Between(150, 800)), y: 0, stepX: 70 }
      // });



      // this.basket = this.physics.add.image({
      //   setXY: {x: 200, y: 650},
      //   key: 'basket',
      //  setSize: {x: 20, y: 20},



    //  this.background = this.add.image(400, 300, 'background');
    //  this.banana = this.add.image(200, 250, 'banana');
      //player = this.physics.add.sprite(100, 450, 'dude');
      //this.basket = this.add.image(200, 650, 'basket').setInteractive();
      this.basket = this.physics.add.image(200, 650, 'basket').setInteractive();
      this.basket.scaleX=.5;
      this.basket.scaleY=.5;
      this.basket.setCollideWorldBounds(true);
      this.input.setDraggable(this.basket);

      //  The pointer has to move 16 pixels before it's considered as a drag
      this.input.dragDistanceThreshold = 16;
      this.input.on('dragstart', function (pointer, gameObject) {

         //gameObject.setTint(0xff0000);
         gameObject.alpha=.5;

     });

      this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

         gameObject.x = dragX;
        // gameObject.y = dragY;

     });

      this.input.on('dragend', function (pointer, gameObject) {

         //gameObject.clearTint();
         gameObject.alpha=1;

     });

      this.physics.add.overlap(this.bananaGroup, this.basket, this.hitBasket, null, this);
      this.physics.add.collider(groundplane, this.basket);
      //gameOver









      // this.physics.add.collider(groundplane, bananaGroup);


  }


update() {
    // everything that is constantly checked
    //kommentar hier
      this.test();


  }

    hitBasket(basket,banana,bananaGroup)
    {

    //this.basket.physics.pause();
      basket.setTint(0xff0000);
      banana.body.setVelocity(0,0);
      banana.body.setAllowGravity(false);
      banana.disableBody(true,true);
       if (this.bananaGroup.countActive(true) === 0)
       {
         console.log("stop");
         endgame = 1;
       }




    // this.time.addEvent({ delay: 2000, callback: this.goGameOver, callbackScope: this.scene, loop: false });


    };

    test()
    {
      if (endgame == 1)
      {

      this.input.once('pointerdown', function () {

          console.log('From SceneA to SceneB');

          this.scene.start('SceneOver');

      }, this);

    } else {
      console.log('nope');
    }




      // console.log("irgendwas");
      // this.time.addEvent({
      //     delay: 3000,
      //     loop: false,
      //     callback: () => {
      //         this.scene.start("SceneOver");
      //     }
      //
      // })
    }


  //   goGameOver()
  // {
  //     this.scene.start("SceneOver");
  // }




}




// this.input.once('pointerdown', function () {
//
//     console.log('From SceneA to SceneB');
//
//     this.scene.start('SceneOver');
//
// }, this);
