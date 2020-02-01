class GameScene extends Phaser.Scene {
	constructor() {
		super({key: 'GameScene'});
	}

	create() {
		this.matter.world.setBounds(0, 0, this.W, this.H, 1000);

		let ground1 = this.matter.add.image(this.CX, this.H*3/4, 'platform', null, { restitution: 0.4, isStatic: true });

		this.player = new Player(this, this.CX, this.CY);
	}

	update(time, delta) {
		this.player.update(time, delta);
	}


	get W() { return this.cameras.main.displayWidth; }
	get H() { return this.cameras.main.displayHeight; }
	get CX() { return this.cameras.main.centerX; }
	get CY() { return this.cameras.main.centerY; }

	fitToScreen(image) {
		image.setScale(Math.max(this.W / image.width, this.H / image.height));
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