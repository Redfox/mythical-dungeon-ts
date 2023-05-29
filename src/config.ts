import { BootScene } from './scenes/boot-scene'
import { MainMenuScene } from './scenes/main-menu-scene'
import {LobbyScene} from "./scenes/lobby-scene";
import {MapScene} from "./scenes/map-scene";

export enum Scenes {
  LOBBY = 'LobbyScene',
  MENU = 'MenuScene',
  BOOT = 'BootScene',
  MAP = 'MapScene'
}

export const assets = {
  splasharts: {
    medusa: {
      key: 'medusa-splashart',
      path: 'assets/splasharts/medusa-splashart.jpg'
    },
  },
  icons: {
    boss: {
      key: 'boss-icon',
      path: 'assets/boss.png'
    },
    enemy: {
      key: 'enemy-icon',
      path: 'assets/enemy.png'
    },
    store: {
      key: 'store-icon',
      path: 'assets/store.png'
    },
  }
}

export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Mythical Dungeon',
  url: 'https://redfoxag.com/',
  version: '1.0',
  width: 800,
  height: 600,
  type: Phaser.WEBGL,
  parent: 'game',
  disableContextMenu: true,
  scene: [BootScene, MainMenuScene, LobbyScene, MapScene],
  input: {
    keyboard: true,
    mouse: true,
    touch: false,
    gamepad: false
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    }
  },
  backgroundColor: '#525559',
  render: { pixelArt: false, antialias: true },
}