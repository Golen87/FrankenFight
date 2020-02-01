class GameScene extends Phaser.Scene {
	constructor() {
		super({key: 'GameScene'});
	}

	create() {
		this.matter.world.setBounds(0, 0, this.W, this.H, 1000);

		let background = this.add.image(this.CX, this.CY, 'background');
		this.fitToScreen(background);

		let ground1 = this.matter.add.image(this.W*1/4, this.H-40, 'ground', null, { restitution: 0.4, isStatic: true });
		ground1.setScale(this.W / ground1.width / 2);
		ground1.setOrigin(0.5, 0.6);
		let ground2 = this.matter.add.image(this.W*3/4, this.H-40, 'ground', null, { restitution: 0.4, isStatic: true });
		ground2.setScale(this.W / ground2.width / 2);
		ground2.setOrigin(0.5, 0.6);

		this.player1 = new Player(this, this.W*1/4, this.CY, 1);
		this.player2 = new Player(this, this.W*3/4, this.CY, 2);


		let testKey1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
		testKey1.on('down', function() {
			console.log("addArm");
			this.player1.addArm();
		}, this);
		let testKey2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
		testKey2.on('down', function() {
			console.log("removeArm");
			this.player1.removeArm();
		}, this);
		let testKey3 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);
		testKey3.on('down', function() {
			console.log("addLeg");
			this.player1.addLeg();
		}, this);
		let testKey4 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR);
		testKey4.on('down', function() {
			console.log("removeLeg");
			this.player1.removeLeg();
		}, this);
	}

	update(time, delta) {
		this.player1.update(time, delta);
		this.player2.update(time, delta);
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