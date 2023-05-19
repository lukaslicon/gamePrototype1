class scene1 extends Phaser.Scene {
    constructor(){
        super('scene1');
    }
    create()
    {
        this.scene.start('intro');
    }
}