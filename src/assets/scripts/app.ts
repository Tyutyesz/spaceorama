import '../styles/main.scss';
import * as Pixi from 'pixi.js';


const app = new Pixi.Application({
    width: 800,
    height:600,
    backgroundColor: 0x000000,
    resolution: window.devicePixelRatio || 1,
});
const container = new Pixi.Container();
console.log(Pixi);
const Game = {
    init() {
        console.log(app.view);
        document.body.appendChild(app.view);
        app.stage.addChild(container);
    }
};

window.addEventListener('load', () => {
    Game.init();
});

