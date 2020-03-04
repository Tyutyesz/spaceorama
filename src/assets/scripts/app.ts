import '../styles/main.scss';
import * as Pixi from 'pixi.js';
import Ship from './models/Ship';
import Space from './models/Space';


const app = new Pixi.Application({
    width: 800,
    height:600,
    backgroundColor: 0x000000,
    resolution: window.devicePixelRatio || 1,
});
const container:Pixi.Container = new Pixi.Container();

const Game = {
    init() {
        document.body.appendChild(app.view);
        app.stage.addChild(container);
        let space = new Space(container, app.screen.width, app.screen.height);
        space.startAnimation();
        let ship = new Ship(container, 0, 30);
        ship.addShip();
    },
    userEvents() {

    }
};

window.addEventListener('load', () => {
    Game.init();
});

