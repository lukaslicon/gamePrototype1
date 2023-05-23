class Scene2 extends Phaser.Scene {
    constructor(){
        super('scene2');
    }
    create()
    {
        this.tileWidth = 32;
        this.tileHeight = 32;
    
        const map = this.make.tilemap({ key: 'OverworldJson' });
        map.addTilesetImage('tiles', 'tileset');
        map.layers.forEach((layer, index) => {
            map.createLayer(index, 'tiles', 0, 0);
        });

    }
}