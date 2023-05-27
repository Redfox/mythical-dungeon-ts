export class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'BootScene'
    });
  }

  update() {
    this.scene.start('MainMenuScene');
  }
}