import * as Pixi from "pixi.js";

class Space {
    private bgTexture = Pixi.Texture.from('./src/assets/images/background.jpg');
    private ticker = Pixi.Ticker.shared;
    private animationSpeed: number = 0.5;
    private stage: Pixi.Container;
    private readonly tilingSprite: Pixi.TilingSprite;
    constructor(stage: Pixi.Container, width: number, height: number) {
        this.stage = stage;
        this.tilingSprite = new Pixi.TilingSprite(this.bgTexture, width, height);
        this.stage.addChild(this.tilingSprite);
        console.log(this.tilingSprite);
    }

    animateSpace() {
        this.tilingSprite.tilePosition.x -= this.animationSpeed;
    }
    startAnimation() {
        this.ticker.add(this.animateSpace, this);
    }
    stopAnimation() {
        this.ticker.remove(this.animateSpace, this);
    }

}

export default Space;
