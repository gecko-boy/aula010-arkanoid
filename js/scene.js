export class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    init() {}

    create() {
        let paddle_s = this.add.sprite (
            this.game.config.width * 0.5,
            this.game.config.height - 20,
            "paddle"
        );
    }

    update(time) {}
}