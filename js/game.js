import {MainScene} from "./scene.js"
import LoadScene from "./preload.js"

const config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: "game-canvas",
    backgroundColor: "#AD89F6",
    scene: [LoadScene, MainScene],
    physics: {
        default: "arcade",
        arcade: {
            gravity: {y: 150},
            gebug: false
        }
    }
}

new Phaser.Game(config);