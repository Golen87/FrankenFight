class GameScene extends Phaser.Scene {
	constructor() {
		super({key: 'GameScene'});
	}

	create() {
		this.matter.world.setBounds(30, 30, this.W-60, this.H-60, 1000);
		this.GROUP = {
			GROUND: 1 << 0, // Default
			TORSO: 1 << 1,
			ARMS: 1 << 2,
		};
		this.OBJ = {
			BORDER:	0,
			GROUND:	1,
			PLAYER:	2,
			ARMS:	3,
			LIMB:	4,
		};

		let background = this.add.image(this.CX, this.CY, 'background');
		this.fitToScreen(background);

		let ground1 = this.matter.add.image(this.W*1/4, this.H-35, 'ground', null, { restitution: 0.4, isStatic: true });
		ground1.setScale(this.W / ground1.width / 2);
		ground1.setOrigin(0.5, 0.7);
		let ground2 = this.matter.add.image(this.W*3/4, this.H-35, 'ground', null, { restitution: 0.4, isStatic: true });
		ground2.setScale(this.W / ground2.width / 2);
		ground2.setOrigin(0.5, 0.7);

		ground1.body.obj = this.OBJ.GROUND;
		ground2.body.obj = this.OBJ.GROUND;
		ground1.setCollisionCategory(this.GROUP.GROUND);
		ground2.setCollisionCategory(this.GROUP.GROUND);

		this.player1 = new Player(this, this.W*1/4, this.CY, 1);
		this.player2 = new Player(this, this.W*3/4, this.CY, 2);

		this.limbs = [];
		this.limbs.push(new Limb(this, this.CX, this.CY, 'arms', Math.floor(Math.random()*8)));
		this.limbs.push(new Limb(this, this.CX, this.CY, 'arms', Math.floor(Math.random()*8)));
		this.limbs.push(new Limb(this, this.CX, this.CY, 'arms', Math.floor(Math.random()*8)));
		this.limbs.push(new Limb(this, this.CX, this.CY, 'arms', Math.floor(Math.random()*8)));
		this.limbs.push(new Limb(this, this.CX, this.CY-50, 'legs', Math.floor(Math.random()*7)));
		this.limbs.push(new Limb(this, this.CX, this.CY-50, 'legs', Math.floor(Math.random()*7)));
		this.limbs.push(new Limb(this, this.CX, this.CY-50, 'legs', Math.floor(Math.random()*7)));
		this.limbs.push(new Limb(this, this.CX, this.CY-50, 'legs', Math.floor(Math.random()*7)));


		// Collision

		this.matter.world.on('collisionstart', function (event) {
			for (let i = 0; i < event.pairs.length; i++) {
				const pair = event.pairs[i];
				const objA = pair.bodyA.parent.obj || 0;
				const objB = pair.bodyB.parent.obj || 0;
				const names = ["border", "ground", "player", "arms", "limb"];
				//console.log(names[objA], names[objB]);
				//const bodyA = event.pairs[i].bodyA;
				//const bodyB = event.pairs[i].bodyB;
				//const idA = bodyA.parent.id;
				//const idB = bodyB.parent.id;

				if (objA == this.OBJ.PLAYER && objB == this.OBJ.LIMB) {
					for (const player of [this.player1, this.player2]) {
						for (let l in this.limbs) {
							const limb = this.limbs[l];
							if (player.isBody(pair) && limb.isBody(pair)) {

								if (limb.canPick() && player.isAlive()) {
									const success = player.addLimb(limb);
									if (success) {
										limb.destroy();
										this.limbs.splice(l, 1);
										break;
									}
								}
							}
						}
					}
				}

				if (objA == this.OBJ.PLAYER && objB == this.OBJ.ARMS || objA == this.OBJ.ARMS && objB == this.OBJ.PLAYER) {
					const playerA = pair.bodyA.parent.owner;
					const playerB = pair.bodyB.parent.owner;
					const gameObjA = pair.bodyA.parent.gameObject;
					const gameObjB = pair.bodyB.parent.gameObject;

					if (playerA != playerB) {
						if (objA == this.OBJ.ARMS && gameObjA.visible) {
							playerB.takeDamage();
						}
						else if (objB == this.OBJ.ARMS && gameObjB.visible) {
							playerA.takeDamage();
						}
					}
				}

				if (pair.isSensor) {
					if (objA == this.OBJ.GROUND && objB == this.OBJ.PLAYER) {
						for (const player of [this.player1, this.player2]) {
							if (player.isBody(pair)) {
								player.setGrounded(true);
							}
						}
					}
				}
			}
		}, this);

		this.matter.world.on('collisionend', function (event) {
			for (let i = 0; i < event.pairs.length; i++) {
				const pair = event.pairs[i];
				const objA = pair.bodyA.parent.obj || 0;
				const objB = pair.bodyB.parent.obj || 0;
				const names = ["border", "ground", "player", "limb"];

				if (pair.isSensor) {
					if (objA == this.OBJ.GROUND && objB == this.OBJ.PLAYER) {
						for (const player of [this.player1, this.player2]) {
							if (player.isBody(pair)) {
								player.setGrounded(false);
							}
						}
					}
				}
			}
		}, this);


		// Input

		let testKey1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
		testKey1.on('down', function() {
			//console.log("addArm");
			//this.player1.addArm();
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

		for (const limb of this.limbs) {
			limb.update(time, delta);
		}
	}


	createArm(arm) {
		let pos = arm.body.position;
		let angle = arm.body.angle;
		let frame = arm.frame.name;

		let limb = new Limb(this, pos.x, pos.y, 'arms', frame);
		this.limbs.push(limb);

		//limb.image.angle = angle;
		//limb.image.scaleX = arm.scaleX;
		//limb.image.scaleY = arm.scaleY;
	}

	createLeg(leg) {
		let pos = leg.body.position;
		let angle = leg.body.angle;
		let frame = leg.frame.name;

		let limb = new Limb(this, pos.x, pos.y, 'legs', frame);
		this.limbs.push(limb);

		//limb.image.angle = angle;
		//limb.image.scaleX = arm.scaleX;
		//limb.image.scaleY = arm.scaleY;
	}

	createHead(head) {
		let pos = head.body.position;
		let limb = new Limb(this, pos.x, pos.y, head.texture.key.replace('head', 'dead'), null);
		this.limbs.push(limb);
		limb.image.scaleX = head.scaleX;
	}

	gameOver(tag) {
		this.player1.running = false;
		this.player2.running = false;
		this.matter.world.engine.timing.timeScale = 0.05;

		this.addEvent(1500, function() {
			// Display word "Game Over" at center of the screen game
			let gameOver = this.add.image(this.CX, this.CY, tag);
			gameOver.setScale(0.7);

			this.addEvent(2500, function() {
				this.scene.start("GameScene");
			});
		});
	}


	addEvent(delay, callback) {
		return this.time.addEvent({
			delay: delay,
			callback: callback,
			callbackScope: this
		});
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

// 	// let group = this.physics.add.group({
// 	// 	//defaultKey: 'head',
// 	// 	bounceX: 1,
// 	// 	bounceY: 1,
// 	// 	collideWorldBounds: true
// 	// });

