export class MainMenuScene extends Phaser.Scene {
  private bitmapTexts: Phaser.GameObjects.BitmapText[] = [];

  constructor() {
    super({
      key: 'MainMenuScene'
    });
  }

  init() {
    console.log('init')
  }

  preload() {
    this.load.bitmapFont(
      'font',
      './assets/font/font.png',
      './assets/font/font.fnt'
    )
  }

  create() {
    this.bitmapTexts.push(
      this.add.bitmapText(
        this.sys.canvas.width / 2 - 150,
        this.sys.canvas.height / 2 + 40,
        'font',
        'PRESS S TO PLAY',
        45
      )
    )
  }

  update() {

  }
}