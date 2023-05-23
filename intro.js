class scene1 extends Phaser.Scene {
    constructor(){
        super('scene1');
    }
    create()
    {
        // create a tilemap from the loaded json file
        const map = this.make.tilemap({ key: 'map' });

        // add tileset image to map
        const tileset = map.addTilesetImage('Overworld', 'tiles');

        // create tilemap layer using tileset + map data
        const layer = map.createLayer('layer_name', tileset, 0, 0);

        this.scene.start('scene2');
    }
}