export class Ball extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        scene.add.existing(this);

        this.velociy_limits = {
            min: {
                x: -200,
                y: -600
            },
            max: {
                x: 200,
                y: -800
            }
        }
    }

    launch() {
        this.scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
        this.setBounce(1, 1);

        this.setVelocity(
            Phaser.Math.Between(
                this.velociy_limits.min.x,
                this.velocity_limits.max.x), 
            Phaser.Math.Between(
                this.velociy_limits.min.y,
                this.velocity_limits.max.y
            )
        );
    }
}