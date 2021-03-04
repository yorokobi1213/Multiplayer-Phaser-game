export class PhaserSpaceGame extends Game implements LifeCycle
{ 
    private game: Phaser.Game;

}
this.game = new Phaser.Game(1024, 768, Phaser.AUTO,
    'space-shooter', {
        preload: this.preload,
        create: this.create,
        update: this.update

    });
}
..
public preload(): void {
    this.game.load.crossOrigin = 'anonymous';
    this.game.load.image('space', 'assets/background.jpg');
    this.game.load.image('laser', 'assets/bullet.png');
    this.game.load.spritesheet('dust', 'assets/dust.png', 64, 64, 16);
    this.game.load.spritesheet('kaboom', 'assets/explosions.png', 64, 64, 16);
    this.game.load.image('pickup', 'assets/pickup.png');
    this.game.load.spritesheet('shooter-sprite', 'assets/ship.png', 32, 32);
}
public create(): void {
    super.properties(this.game);
    super.manageAssets(this.game);
}
public update(): void {
    super.gameUpdate(this.game);
}
...
