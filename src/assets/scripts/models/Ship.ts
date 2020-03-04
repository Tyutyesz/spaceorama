import * as Pixi from "pixi.js";

class Ship {
    private spriteSheet = new Pixi.BaseTexture('./src/assets/images/spritesheet.png');
    private texture = new Pixi.Texture(this.spriteSheet, new Pixi.Rectangle(
        9,
        99,
        28,
        19
    ));
    private sprite = new Pixi.Sprite();
    private stage: Pixi.Container;
    constructor(stage: Pixi.Container, x: number, y: number) {
        this.stage = stage;
        this.sprite.texture = this.texture;
        this.sprite.scale.x = 1.5;
        this.sprite.scale.y = 1.5;
        this.sprite.x = x;
        this.sprite.y = y;
    }
    addShip() {
        this.stage.addChild(this.sprite);
    }
    updatePos() {

    }

}

export default Ship;
