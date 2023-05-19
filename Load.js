class load extends Phaser.Scene {
    constructor(){
        super('load');
    }
    preload ()
    {
        this.load.path = 'assets/';
        
        this.load.tilemapTiledJSON('map', 'map.json');
        this.load.image('tileset', tilesetImage);

        this.load.image('tiles', 'Overworld.png');
        this.load.tilemapTiledJSON('OverworldJson', 'Overworld.json' );

    }
    create()
    {
        this.scene.start('scene2');
    }

}