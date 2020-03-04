import * as Pixi from "pixi.js";

class Ship {

    public bullets: any[] = [];
    private spriteSheet = new Pixi.BaseTexture('./src/assets/images/spritesheet.png');
    private texture = new Pixi.Texture(this.spriteSheet, new Pixi.Rectangle(
        9,
        99,
        28,
        19
    ));
    private ticker = Pixi.Ticker.shared;
    private sprite = new Pixi.Sprite();
    private stage: Pixi.Container;
    private position = {
        x: 0,
        y: 0,
    };
    private speed = 10;

    constructor(stage: Pixi.Container, x: number, y: number) {
        this.stage = stage;
        this.sprite.texture = this.texture;
        this.sprite.scale.x = 1.5;
        this.sprite.scale.y = 1.5;
        this.position.x = x;
        this.position.y = y;
        this.sprite.x = this.position.x;
        this.sprite.y = this.position.y;
    }
    addShip() {
        this.bullets.push({x: 10});
        this.stage.addChild(this.sprite);
    }
    shoot() {
        this.bullets.push({
            pos: {}
        })
    }
    animateShip() {
       // console.log(this.sprite);
    }
    updatePos(direction:string) {

        switch (direction) {
            case 'up':
                this.sprite.y -= 10;
                break;
            case 'down':
                this.sprite.y += 10;
                break;
            case 'left':
                this.sprite.x -= 10;
                break;
            case 'right':
                this.sprite.x += 10;
                break;
        }

        if (this.sprite.x < 0) {
            this.sprite.x = 0;
        } else if (this.sprite.x > this.stage.width * 0.6) {
            this.sprite.x = this.stage.width * 0.6
        }
        if (this.sprite.y < 0) {
            this.sprite.y = 0;
        } else if (this.sprite.y > this.stage.height) {
            this.sprite.y = this.stage.height;
        }
    }

}

export default Ship;
