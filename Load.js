class load extends Phaser.Scene {
    constructor(){
        super('load');
    }
    preload ()
    {
        this.load.path = 'assets/';
        this.load.image('tiles', 'Overworld.png');

    }
    create()
    {
        this.scene.start('intro');
    }
}