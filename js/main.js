var game;
var endgame;




window.onload = function() {
    var isMobile = navigator.userAgent.indexOf("Mobile");
    if (isMobile == -1) {
        isMobile = navigator.userAgent.indexOf("Tablet");
    }
    //
    //
    if (isMobile == -1) {
        var config = {
            type: Phaser.AUTO,
            width: 1920,
            height: 1080,
            parent: 'phaser-game',
            physics: {
                default: 'arcade',
                arcade: {
                gravity: { y: 300 },
                debug: false
              }
            },
            scene: [SceneMain, SceneOver]
        };
    } else {
        var config = {
        type: Phaser.AUTO,
        width: window.innerWidth,
        height: window.innerHeight,
        parent: 'phaser-game',
        physics: {
            default: 'arcade',
            arcade: {
            gravity: { y: 300 },
            debug: false
          }
        },
        scene: [SceneMain, SceneOver]
    };
    }

    game = new Phaser.Game(config);
  }







// window.onload=function()
// {
//   var config = {
//         type: Phaser.AUTO,
//         width: 1920,
//         height: 1080,
//         physics: {
//             default: 'arcade',
//             arcade: {
//                 gravity: { y: 300 },
//                 debug: false
//             }
//         },
//         parent: 'phaser-game',
//         scene: [SceneMain, SceneOver]
//     };
//      game = new Phaser.Game(config);
// }
