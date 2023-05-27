import { BootScene } from './scenes/boot-scene'
import { MainMenuScene } from './scenes/main-menu-scene'

export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Mythical Dungeon',
  url: 'https://redfoxag.com/',
  version: '1.0',
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  parent: 'game',
  scene: [BootScene, MainMenuScene],
  input: {
    keyboard: true,
    mouse: false,
    touch: false,
    gamepad: false
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    }
  },
  backgroundColor: '#000000',
  render: { pixelArt: false, antialias: true }
}