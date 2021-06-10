import {Paddle} from "./paddle.js"
import {Ball} from "./ball.js"

export class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    init() {}

    create() {
        this.paddle = new Paddle(this, this.game.config.width * 0.5, this.game.config.height - 20, "paddle");

        this.ball = new Ball(this, this.game.config.width * 0.5, this.game.config.height - 20, "ball");

        this.paddle.setBall(this.ball);
    }

    update(time) {
        this.paddle.update(time);
    }

    launchBall() {
        this.ball.launch();
        this.physics.add.collider(this.paddle, this.ball);
    }
}