import {assets, Scenes} from "../config";

export class MapScene extends Phaser.Scene {
  constructor() {
    super({
      key: Scenes.MAP
    });
  }

  create() {
    this.add.image(200, this.cameras.main.centerY, assets.icons.enemy.key)
      .setScale(0.1, 0.1)
      .setInteractive({ cursor: 'pointer' })

    this.add.image(300, this.cameras.main.centerY, assets.icons.store.key)
      .setScale(0.1, 0.1)
      .setInteractive({ cursor: 'pointer' })

    this.add.image(300, this.cameras.main.centerY + 100, assets.icons.enemy.key)
      .setScale(0.1, 0.1)
      .setInteractive({ cursor: 'pointer' })

    this.add.image(300, this.cameras.main.centerY - 100, assets.icons.enemy.key)
      .setScale(0.1, 0.1)
      .setInteractive({ cursor: 'pointer' })

    this.add.image(600, this.cameras.main.centerY, assets.icons.boss.key)
      .setScale(0.1, 0.1)
      .setInteractive({ cursor: 'pointer' })

    this.add.line(0, 0, 200 + 50, this.cameras.main.centerY, 300 + 50, this.cameras.main.centerY, 0x000000)
    this.add.line(0, 40, 200 + 50, this.cameras.main.centerY, 300 + 50, this.cameras.main.centerY + 100, 0x000000)
    this.add.line(0, 40, 200 + 50, this.cameras.main.centerY, 300 + 50, this.cameras.main.centerY - 100, 0x000000)


    this.add.line(0, 0, 400 + 50, this.cameras.main.centerY, 680 + 50, this.cameras.main.centerY, 0x000000)
    this.add.line(0, 40, 400 + 50, this.cameras.main.centerY - 100, 680 + 50, this.cameras.main.centerY, 0x000000)
    this.add.line(0, 40, 400 + 50, this.cameras.main.centerY + 100, 680 + 50, this.cameras.main.centerY, 0x000000)
  }
}