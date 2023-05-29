interface ButtonProps {
  x: number
  y: number
  scene: Phaser.Scene
  text: string
  callback: () => void
}

export class Button {
  constructor({ x, y, scene, text, callback }: ButtonProps) {
    const button = scene.add.text(
      x,
      y,
      text
    )
      .setOrigin(0.5)
      .setPadding(10)
      .setStyle({ backgroundColor: '#FFFF', color: 'blue' })
      .setInteractive({ cursor: 'pointer' })
      .on('pointerdown', callback)
      .on('pointerover', () => button.setStyle({ fill: 'black' }))
      .on('pointerout', () => button.setStyle({ fill: 'blue' }))
  }
}