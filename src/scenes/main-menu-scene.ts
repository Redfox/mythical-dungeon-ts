import {Button} from "../components/button";
import {Scenes} from "../config";

export class MainMenuScene extends Phaser.Scene {
  constructor() {
    super({
      key: Scenes.MENU
    });
  }

  init() {

  }

  preload() {

  }

  create() {
    new Button({
      x: this.cameras.main.centerX,
      y: this.cameras.main.centerY,
      scene: this,
      text: 'Start Game',
      callback: () => this.scene.start(Scenes.LOBBY),
    })
  }

  update() {
  }
}