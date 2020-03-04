import '../styles/main.scss';
import * as Pixi from 'pixi.js';
import Ship from './models/Ship';
import Space from './models/Space';

class Game {
    private App: Pixi.Application;
    private container: Pixi.Container = new Pixi.Container();
    private ship: Ship;
    private space: Space;
    constructor() {
        this.App = new Pixi.Application({
            width: 800,
            height:600,
            backgroundColor: 0x000000,
            resolution: window.devicePixelRatio || 1,
        });
    }
    init() {
        document.body.appendChild(this.App.view);
        this.App.stage.addChild(this.container);
        this.space = new Space(this.container, this.App.screen.width, this.App.screen.height);
        this.space.startAnimation();
        this.ship = new Ship(this.container, 0, 30);
        this.ship.addShip();
        this.userEvents();
    };
    userEvents() {
        const setKey = (code:string) => {
            switch (code) {
                case 'ArrowUp':
                    this.ship.updatePos('up');
                    break;
                case 'KeyW':
                    this.ship.updatePos('up');
                    break;
                case 'ArrowDown':
                    this.ship.updatePos('down');
                    break;
                case 'KeyS':
                    this.ship.updatePos('down');
                    break;
                case 'ArrowRight':
                    this.ship.updatePos('right');
                    break;
                case 'KeyD':
                    this.ship.updatePos('right');
                    break;
                case 'ArrowLeft':
                    this.ship.updatePos('left');
                    break;
                case 'KeyA':
                    this.ship.updatePos('left');
                    break;
                case 'Space':
                    this.ship.shoot();
                    break;
                default:
                    break;
            }
        };
        document.addEventListener('keydown', (e) => {
            setKey(e.code);
        });
    }
}

window.addEventListener('load', () => {
    let game = new Game();
    game.init();
});

