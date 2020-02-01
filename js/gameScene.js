class GameScene extends Phaser.Scene {
	constructor() {
		super({key: 'GameScene'});
	}

	create() {
		this.ground = this.matter.add.image(400, 550, 'platform', null, { restitution: 0.4, isStatic: true });

		this.player = new Player(this, 400, 100);
	}

	update(time, delta) {
		this.player.update(time, delta);
	}
}

// 	this.cameras.main.setBackgroundColor(0xbababa);

// 	this.physics.world.setBounds(0, 0, 75*16, 75*9);

// 	//this.physics.world.gravity.y = 60;

// 	// var group = this.physics.add.group({
// 	// 	//defaultKey: 'head',
// 	// 	bounceX: 1,
// 	// 	bounceY: 1,
// 	// 	collideWorldBounds: true
// 	// });