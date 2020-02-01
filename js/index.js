let config = {
	type: Phaser.AUTO,
	width: 75*16,
	height: 75*9,
	parent: 'game',
	backgroundColor: '#DDDDDD',
	scale: {
		mode: Phaser.Scale.FIT
	},
	physics: {
		default: 'matter',
		matter: {
			gravity: {y: 1},
			//debug: true
		}
	},
	scene: [
		PreloadScene,
		GameScene,
	]
};

let game = new Phaser.Game(config);