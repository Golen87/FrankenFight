class Player {
	constructor(scene, x, y, playerNumber=1) {
		this.scene = scene;

		this.scale = 0.3;

		let Bodies = Phaser.Physics.Matter.Matter.Bodies;
		let compoundBody = Phaser.Physics.Matter.Matter.Body.create({parts: [
			Bodies.circle(0, 0, 130),
			Bodies.circle(0, -200, 120),
			Bodies.rectangle(0, 50, 150, 150),
			Bodies.circle(0, 100, 10, { isSensor: true, label: 'feet' })
		]});

		this.playerNumber = playerNumber;
		const frame = playerNumber-1;
		this.legLeft1 = scene.matter.add.image(x, y, 'legs', frame, {isSensor: true, density: 0.00001});
		this.legLeft2 = scene.matter.add.image(x, y, 'legs', frame, {isSensor: true, density: 0.00001});
		this.legRight1 = scene.matter.add.image(x, y, 'legs', frame, {isSensor: true, density: 0.00001});
		this.legRight2 = scene.matter.add.image(x, y, 'legs', frame, {isSensor: true, density: 0.00001});
		this.armLeft3 = scene.matter.add.image(x, y, 'arms', frame, {isSensor: true, density: 0.00001});
		this.armLeft2 = scene.matter.add.image(x, y, 'arms', frame, {isSensor: true, density: 0.00001});
		this.armLeft1 = scene.matter.add.image(x, y, 'arms', frame, {isSensor: true, density: 0.00001});
		this.torso = scene.matter.add.image(x, y, 'body'+playerNumber, 0, {density: 10});
		this.head = scene.matter.add.image(x, y, 'head'+playerNumber, 0, {isSensor: true, density: 0.00001});
		this.armRight3 = scene.matter.add.image(x, y, 'arms', frame, {isSensor: true, density: 0.00001});
		this.armRight2 = scene.matter.add.image(x, y, 'arms', frame, {isSensor: true, density: 0.00001});
		this.armRight1 = scene.matter.add.image(x, y, 'arms', frame, {isSensor: true, density: 0.00001});
		this.balls = scene.matter.add.image(x, y, 'circle', 0, {isSensor: true, density: 0.3});

		this.balls.setVisible(false);
		//this.balls.body.density = 0.001;

		this.torso.setExistingBody(compoundBody);
		this.torso.setPosition(x, y);
		this.torso.setOrigin(0.5);
		this.torso.body.obj = scene.OBJ.PLAYER;

		const bodyParts = [this.legLeft1, this.legLeft2, this.legRight1, this.legRight2, this.armLeft3, this.armLeft2, this.armLeft1, this.torso, this.armRight3, this.armRight2, this.armRight1, this.head, this.balls];
		const direction = (playerNumber == 1) ? -1 : 1;
		for (let part of bodyParts) {
			part.setScale(direction * this.scale, this.scale);
			part.setCollisionCategory(0);
			part.setCollidesWith(0);
		}
		this.torso.setCollisionCategory(scene.GROUP.GROUND);
		this.torso.setCollidesWith(scene.GROUP.GROUND);

		let limbs = [this.armLeft1, this.armLeft2, this.armLeft3, this.armRight1, this.armRight2, this.armRight3, this.legLeft1, this.legLeft2, this.legRight1, this.legRight2];
		for (let part of limbs) {
			part.setVisible(false);
		}

		this.stiffness = 0.5;
		this.softStiffness = 0.008;

		// Left arms
		this.addJointPlus(
			this.torso, {x:47, y:49},
			this.armLeft1, {x:50, y:75},
			{x:200, y:0}, {x:-400-50, y:-120}
		);
		this.addJointPlus(
			this.torso, {x:25, y:90},
			this.armLeft2, {x:50, y:75},
			{x:200, y:0}, {x:-400-20, y:-20}
		);
		this.addJointPlus(
			this.torso, {x:21, y:143},
			this.armLeft3, {x:50, y:75},
			{x:200, y:0}, {x:-400+20, y:60}
		);
		// // Right arms
		this.addJointPlus(
			this.torso, {x:200, y:75},
			this.armRight1, {x:50, y:75},
			{x:200, y:0}, {x:20, y:-120}
		);
		this.addJointPlus(
			this.torso, {x:223, y:122},
			this.armRight2, {x:50, y:75},
			{x:200, y:0}, {x:30, y:-30}
		);
		this.addJointPlus(
			this.torso, {x:222, y:176},
			this.armRight3, {x:50, y:75},
			{x:200, y:0}, {x:20, y:60}
		);
		// Left legs
		this.addJointPlus(
			this.torso, {x:40, y:220},
			this.legLeft1, {x:100, y:50},
			{x:0, y:150}, {x:-50, y:20}
		);
		this.addJointPlus(
			this.torso, {x:90, y:235},
			this.legLeft2, {x:100, y:50},
			{x:0, y:150}, {x:-20, y:20}
		);
		// Right legs
		this.addJointPlus(
			this.torso, {x:225, y:228},
			this.legRight1, {x:100, y:50},
			{x:0, y:150}, {x:40, y:20}
		);
		this.addJointPlus(
			this.torso, {x:173, y:239},
			this.legRight2, {x:100, y:50},
			{x:0, y:150}, {x:10, y:20}
		);
		// Head
		this.addJointPlus(
			this.torso, {x:132, y:24},
			this.head, {x:180, y:325},
			{x:0, y:-280}, {x:0, y:-50},
			5
		);
		// Bottom weight
		this.addJoint(
			this.torso, {x:130, y:250},
			this.balls, {x:50, y:50}
		);

		const flipArms = [this.armLeft1, this.armLeft2, this.armLeft3];
		for (let part of flipArms) {
			part.scaleY *= -1;
			part.angle = 180;
		}
		const flipLegs = [this.legRight1];
		for (let part of flipLegs) {
			//part.scaleX *= -1;
		}

		this.torso.setFriction(0.05);
		this.torso.setFrictionAir(0.0005);
		this.torso.setBounce(0.2);


		this.addArm();
		this.addArm();
		this.addLeg();
		this.addLeg();


		if (playerNumber == 1) {
			this.keyUp = scene.input.keyboard.addKey('W');
			this.keyDown = scene.input.keyboard.addKey('S');
			this.keyLeft = scene.input.keyboard.addKey('A');
			this.keyRight = scene.input.keyboard.addKey('D');
			this.keyAttack = scene.input.keyboard.addKey('E');
		}
		else {
			this.keyUp = scene.input.keyboard.addKey('UP');
			this.keyDown = scene.input.keyboard.addKey('DOWN');
			this.keyLeft = scene.input.keyboard.addKey('LEFT');
			this.keyRight = scene.input.keyboard.addKey('RIGHT');
			this.keyAttack = scene.input.keyboard.addKey('SPACE');
		}

		this.keyUp.on('down', this.onJump, this);
		this.keyAttack.on('down', this.onAttack, this);

		this.addArm();
		this.addArm();
		//this.addArm();
		//this.addLeg();
		//this.addLeg();
		this.addLeg();
		this.addLeg();

		this.particles = scene.add.particles('blood');

		this.jump1 = scene.sound.add('toss', {'volume': 0.3});
		this.jump2 = scene.sound.add('toss_soft', {'volume': 0.3});
		this.drip1 = scene.sound.add('drip1');
		this.drip2 = scene.sound.add('drip2');
	}

	addJointPlus(bodyA, offsetA, bodyB, offsetB, offsetA2, offsetB2, stiffnessFactor=1) {
		let softOffsetA = {
			x: offsetA.x + offsetA2.x + offsetB2.x,
			y: offsetA.y + offsetA2.y + offsetB2.y,
		};
		let softOffsetB = {
			x: offsetB.x + offsetA2.x,
			y: offsetB.y + offsetA2.y,
		};

		this.addJoint(bodyA, offsetA, bodyB, offsetB, this.stiffness);
		this.addJoint(bodyA, softOffsetA, bodyB, softOffsetB, this.softStiffness * stiffnessFactor);
	
	}

	addJoint(bodyA, offsetA, bodyB, offsetB, stiffness) {
		this.scene.matter.add.joint(bodyA, bodyB, 0, stiffness, {
			pointA: {
				x: bodyA.scaleX * (offsetA.x - bodyA.width / 2),
				y: bodyA.scaleY * (offsetA.y - bodyA.height / 2)
			},
			pointB: {
				x: bodyB.scaleX * (offsetB.x - bodyB.width / 2),
				y: bodyB.scaleY * (offsetB.y - bodyB.height / 2)
			},
		});
	}

	isBody(pair) {
		const id = this.torso.body.id;
		const id1 = pair.bodyA.parent.id;
		const id2 = pair.bodyB.parent.id;
		return (id == id1 || id == id2);
	}


	/* Limb management */

	isActive(part) {
		return part.visible;
	}

	addArm(frame) {
		const leftArms = [this.armLeft1, this.armLeft2, this.armLeft3];
		const rightArms = [this.armRight1, this.armRight2, this.armRight3];

		const leftCount = leftArms.reduce(function (sum, arm) { return sum + arm.visible; }, 0);
		const rightCount = rightArms.reduce(function (sum, arm) { return sum + arm.visible; }, 0);

		let arms = leftArms;
		if (rightCount < leftCount || (rightCount == leftCount && Math.random() > 0.5)) {
			arms = rightArms;
		}

		for (const arm of arms) {
			if (!this.isActive(arm)) {
				arm.setVisible(true);
				arm.setFrame(frame);
				return true;
			}
		}

		return false;
	}

	removeArm() {
		const allArms = [this.armLeft1, this.armLeft2, this.armLeft3, this.armRight1, this.armRight2, this.armRight3];
		const arms = allArms.filter(this.isActive);

		if (arms.length > 0) {
			const arm = arms[Math.floor(Math.random()*arms.length)];
			this.bleed(arm.x, arm.y);
			arm.setVisible(false);
			this.scene.createArm(arm);
		}
	}

	addLeg() {
		const leftLegs = [this.legLeft1, this.legLeft2];
		const rightLegs = [this.legRight1, this.legRight2];

		const leftCount = leftLegs.reduce(function (sum, leg) { return sum + leg.visible; }, 0);
		const rightCount = rightLegs.reduce(function (sum, leg) { return sum + leg.visible; }, 0);

		let legs = leftLegs;
		if (rightCount < leftCount || (rightCount == leftCount && Math.random() > 0.5)) {
			legs = rightLegs;
		}

		for (const leg of legs) {
			if (!this.isActive(leg)) {
				leg.setVisible(true);
				leg.setFrame(Math.floor(Math.random()*7));
				break;
			}
		}
	}

	removeLeg() {
		const allLegs = [this.legLeft1, this.legLeft2, this.legRight1, this.legRight2];
		const legs = allLegs.filter(this.isActive);

		if (legs.length > 0) {
			const leg = legs[Math.floor(Math.random()*legs.length)];
			this.bleed(leg.x, leg.y);
			leg.setVisible(false);
		}
		
	}

	bleed (x, y) {
		this.particles.createEmitter({
			alpha: {start: 1, end: 0.5},
			scale: {start: 0.4, end: 0.8},
			gravityY: 200,
			speedX: {min: -100, max: 100},
			speedY: {min: -100, max: 300},
			collideLeft: true,
			collideRight: true,
			angle: { min: -85, max: 95 },
        	rotate: { min: -180, max: 180 },
        	lifespan: { min: 300, max: 800 },
        	maxParticles: 7,
        	x: x,
        	y: y
		});
		const bleedEffects = [this.drip1, this.drip2];
		bleedEffects[Math.floor(Math.random()*bleedEffects.length)].play();
	}
	/* Update */

	update(time, delta) {
		//this.x += this.velocityX * delta/1000;
		//this.y += this.velocityY * delta/1000;
		////this.x = 600 + 100 * Math.sin(time/1000);

		////this.head.y = -80 + 10 * Math.sin(3*time/1000);

		//this.head.setRotation(-Math.sin(time/300));
		//this.legL.setRotation(0.1*Math.sin(time/300));
		//this.legR.setRotation(0.1*Math.sin(time/300));
		//this.armL.setRotation(-Math.sin(time/300));
		//this.armR.setRotation(3.3-Math.sin(time/300));

		if (this.keyUp.isDown) {
		}
		if (this.keyDown.isDown) {
			this.removeArm();
		}
		if (this.keyLeft.isDown) {
			this.torso.setVelocityX(-8);
		}
		if (this.keyRight.isDown) {
			this.torso.setVelocityX(8);
		}
	}

	onJump() {
		if (this.playerNumber % 2 === 0) {
			this.jump1.play();
		} else {
			this.jump2.play();
		}
		this.torso.setVelocity(0, -200);
	}

	onAttack() {
		this.removeArm();
	}
}