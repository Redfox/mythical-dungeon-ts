import {assets, Scenes} from "../config";

export class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: Scenes.BOOT
    });
  }

  preload() {
    this.input.mouse?.disableContextMenu();
    this.load.image(assets.splasharts.medusa.key, assets.splasharts.medusa.path)
    this.load.image(assets.icons.boss.key, assets.icons.boss.path)
    this.load.image(assets.icons.enemy.key, assets.icons.enemy.path)
    this.load.image(assets.icons.store.key, assets.icons.store.path)
  }

  update() {
    this.scene.start(Scenes.MENU);
  }
}