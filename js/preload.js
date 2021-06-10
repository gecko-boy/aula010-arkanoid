export default class LoadScene extends Phaser.Scene {
    constructor() {
        super("LoadScene");
    }

    preload() {
        this.load.image("ball", "./images/ballBlue.png");
        this.load.image("ball", "./images/blue.png");
        this.load.image("ball", "./images/green.png");
        this.load.image("ball", "./images/purple.png");
        this.load.image("ball", "./images/red.png");
        this.load.image("ball", "./images/yellow.png");
        this.load.image("paddle", "./images/paddleRed.png");
    }

    create() {
        this.scene.start("MainScene");

        this.input.mouse.disableContextMenu();
    }
}