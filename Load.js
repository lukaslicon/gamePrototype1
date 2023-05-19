class load extends Phaser.Scene {
    constructor(){
        super('load');
    }
    preload ()
    {
        this.load.path = 'assets/';

    }
    create()
    {
        this.scene.start('intro');
    }
}