import Phaser from 'phaser';

export default class MyGame extends Phaser.Game {
  constructor () {
    super(800, 600, Phaser.AUTO, 'content', null);
    // this.state.add('Boot', .Boot)
    // this.state.add('Preloader', BasicGame.Preloader)
    // this.state.add('MainMenu', MainMenu, false)
    // this.state.add('Game', BasicGame.Game)
    // this.state.start('Boot')
  }
}
