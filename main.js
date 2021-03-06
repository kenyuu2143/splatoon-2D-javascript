// グローバルに展開
phina.globalize();

var SCREEN_WIDTH    = 640;
var SCREEN_HEIGHT   = 960;
var SCREEN_LIMIT = 150
var XBUTTON_SIZE = 80
var HREF = "";

// アセット
var ASSETS = {
  // 画像
  image: {
    'background': './images/background03.jpg',
    'walk': './images/walk3646.png',
    'ink': './images/ink3646.png',
    'shoot': './images/shoot5046.png',
    'xbutton': './images/xbutton1.png',
  },
  // スプライトシート
  spritesheet: {
    'walk': './spriteSS/walk.ss',
    'ink': './spriteSS/ink.ss',
    'shoot': './spriteSS/shoot.ss',
  },
};

/*
 * メイン処理
 */
phina.main(function() {
  console.log("main");
  // アプリケーションを生成
  var app = GameApp({
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  });
  // fps表示
  //app.enableStats();
  // 実行
  app.replaceScene(SceneSequence());
  app.run();
});

// SceneSequenceクラス
phina.define("SceneSequence", {
  superClass: "phina.game.ManagerScene",

  // 初期化
  init: function() {
    console.log("SceneSequenceクラスinit");
    this.superInit({
      scenes: [
        {
          label: "Loading",
          className: "LoadingScene",
          nextLabel:'Main'
        },
        {
          label: "Main",
          className: "MainScene",
        },
      ]
    });
  }
});
  
phina.define("LoadingScene", {
  superClass: "phina.game.LoadingScene",

  init: function(options) {
    console.log("LoadingSceneクラスinit");

    this.superInit({
      // アセット読み込み
      assets: ASSETS,
      exitType: "auto",
    });

    var self = this;
    this.backgroundColor = "BLACK";

    // view
    var baseLayer = DisplayElement(options).addChildTo(this);

    // ラベル
    var label = Label({
      text: "NOW LOADING...",
    })
    .addChildTo(baseLayer)
    .setPosition(this.width*0.5, this.height*0.5)
    label.tweener.clear()
    .setLoop(1)
    .to({alpha:0}, 500)
    .to({alpha:1}, 500)
    ;
    label.fill = "white";
    label.fontSize = 40;
  }
});
