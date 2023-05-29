import {assets, Scenes} from "../config";
import {Button} from "../components/button";

export class LobbyScene extends Phaser.Scene {
  constructor() {
    super({
      key: Scenes.LOBBY
    })
  }

  create() {
    this.add.text(
      this.cameras.main.centerX,
      50,
      'Party'
    )
      .setOrigin(0.5);

    new Button({
      x: this.cameras.main.centerX,
      y: this.cameras.main.height - 50,
      text: 'Start',
      scene: this,
      callback: () => this.scene.start(Scenes.MAP),
    })

    this.add.rectangle(
      this.cameras.main.centerX - (150 + 10),
      this.cameras.main.centerY + 15,
      150,
      200,
      0xff0000
    )

    this.add.rectangle(
      this.cameras.main.centerX + (150 + 10),
      this.cameras.main.centerY + 15,
      150,
      200,
      0xff0000
    )

    this.drawSprite()
  }

  drawSprite() {
    const rt = this.add.renderTexture(this.cameras.main.centerX, this.cameras.main.centerY, 150, 200)

    const brush = this.make.image({ key: assets.splasharts.medusa.key,  }, false);
    rt.draw(brush, 60, 223);

    this.add.text(
      this.cameras.main.centerX,
      this.cameras.main.centerY + (150 / 2) + 50,
      'Medusa'
    )
      .setOrigin(0.5);
  }
}