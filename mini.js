class Mini extends Phaser.Scene {
    constructor() {
        super('mini');
    }
    path1(obj){
        let target1 = new Phaser.Math.Vector2();
            target1.x = 1532
            target1.y = 201
        let target2 = new Phaser.Math.Vector2();
            target2.x = 429
            target2.y = 850
        let target3 = new Phaser.Math.Vector2();
            target3.x = 710
            target3.y = 1500
        this.physics.moveToObject(obj,target1, 200);
        const distance1 = Phaser.Math.Distance.BetweenPoints(obj, target1);
        const distance2 = Phaser.Math.Distance.BetweenPoints(target1, target2);
        const distance3 = Phaser.Math.Distance.BetweenPoints(target2, target3);
        this.time.delayedCall(distance1/200 + 200, () => {
            this.physics.moveToObject(obj,target2, 200);
            this.time.delayedCall(distance2/200 + 200, () => {
                this.physics.moveToObject(obj,target3, 200);
                this.time.delayedCall(distance3/200 + 200, () => {
                    this.path1(obj);
                });
            });
        });
    }
    create(){
        this.coin1 = this.add.image(400,200,"coin")
            .setScale(0.1)
        //this.path1(this.coin1);
    }
    update(){
        if (this.coin1.body.speed > 0)
          {

            if (distance < tolerance)    {
                this.source.body.reset(this.target.x, this.target.y);
            }
        }
    }
}