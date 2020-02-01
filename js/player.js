class Player {
	constructor(scene, x, y) {
		this.scene = scene;

		this.scale = 0.3;

		let Bodies = Phaser.Physics.Matter.Matter.Bodies;
		let compoundBody = Phaser.Physics.Matter.Matter.Body.create({parts: [
			Bodies.circle(0, 0, 130*this.scale),
			Bodies.circle(0, -200, 120*this.scale),
			Bodies.rectangle(0, 50, 120, 150)
		]});


		this.legLeft = scene.matter.add.image(x, y, 'leg_left1', 0, {isSensor: true, density: 0.00001});
		this.legRight = scene.matter.add.image(x, y, 'leg_right1', 0, {isSensor: true, density: 0.00001});
		this.armLeft = scene.matter.add.image(x, y, 'arm_left1', 0, {isSensor: true, density: 0.00001});
		this.body = scene.matter.add.image(x, y, 'body1', {density: 10});
		this.armRight = scene.matter.add.image(x, y, 'arm_right1', 0, {isSensor: true, density: 0.00001});
		this.head = scene.matter.add.image(x, y, 'head1', 0, {isSensor: true, density: 0.00001});
		this.balls = scene.matter.add.image(x, y, 'circle', 0, {isSensor: true, density: 0.02});
		this.balls.visible = false;

		this.body.setExistingBody(compoundBody);
		this.body.setPosition(x, y);
		this.body.setOrigin(0.5);

		this.legLeft.setScale(this.scale);
		this.legRight.setScale(this.scale);
		this.armLeft.setScale(this.scale);
		this.body.setScale(this.scale);
		this.armRight.setScale(this.scale);
		this.head.setScale(this.scale);
		this.balls.setScale(this.scale);

		this.stiffness = 0.3;
		this.softStiffness = 0.004;

		this.addJointPlus(
			this.body, {x:40, y:63},
			this.armLeft, {x:120, y:25},
			{x:-90, y:90}, {x:0, y:-50},
			this.stiffness, this.softStiffness
		);
		this.addJointPlus(
			this.body, {x:200, y:75},
			this.armRight, {x:33, y:30},
			{x:110, y:120}, {x:0, y:-50},
			this.stiffness, this.softStiffness
		);
		this.addJointPlus(
			this.body, {x:40, y:220},
			this.legLeft, {x:83, y:30},
			{x:-20, y:110}, {x:0, y:50},
			this.stiffness, this.softStiffness
		);
		this.addJointPlus(
			this.body, {x:220, y:230},
			this.legRight, {x:60, y:27},
			{x:0, y:120}, {x:0, y:50},
			this.stiffness, this.softStiffness
		);
		this.addJointPlus(
			this.body, {x:132, y:24},
			this.head, {x:180, y:325},
			{x:0, y:-280}, {x:0, y:-50},
			this.stiffness, this.softStiffness * 5
		);
		this.addJoint(
			this.body, {x:130, y:250},
			this.balls, {x:50, y:50}
		);

		this.body.setFriction(0.05);
		this.body.setFrictionAir(0.0005);
		this.body.setBounce(0.2);


		this.keyUp = scene.input.keyboard.addKey('UP');
		this.keyDown = scene.input.keyboard.addKey('DOWN');
		this.keyLeft = scene.input.keyboard.addKey('LEFT');
		this.keyRight = scene.input.keyboard.addKey('RIGHT');
	}

	addJointPlus(bodyA, offsetA, bodyB, offsetB, offsetA2, offsetB2, stiffness, softStiffness) {
		let softOffsetA = {
			x: offsetA.x + offsetA2.x + offsetB2.x,
			y: offsetA.y + offsetA2.y + offsetB2.y,
		};
		let softOffsetB = {
			x: offsetB.x + offsetA2.x,
			y: offsetB.y + offsetA2.y,
		};

		this.addJoint(bodyA, offsetA, bodyB, offsetB, stiffness);
		this.addJoint(bodyA, softOffsetA, bodyB, softOffsetB, softStiffness);
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
			this.body.setVelocity(0, -10);
		}
		if (this.keyDown.isDown) {
		}
		if (this.keyLeft.isDown) {
			this.body.setVelocityX(-8);
		}
		if (this.keyRight.isDown) {
			this.body.setVelocityX(8);
		}
	}
}