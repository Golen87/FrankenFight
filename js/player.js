class Player {
	constructor(scene, x, y) {
		this.scene = scene;

		this.scale = 0.4;



		this.legLeft = scene.matter.add.image(x, y, 'leg_left1', 0, {isSensor: true, density: 0.00001});
		this.legRight = scene.matter.add.image(x, y, 'leg_right1', 0, {isSensor: true, density: 0.00001});
		this.armLeft = scene.matter.add.image(x, y, 'arm_left1', 0, {isSensor: true, density: 0.00001});
		this.body = scene.matter.add.image(x, y, 'body1', {density: 10});
		this.armRight = scene.matter.add.image(x, y, 'arm_right1', 0, {isSensor: true, density: 0.00001});
		this.head = scene.matter.add.image(x, y, 'head1', 0, {isSensor: true, density: 0.00001});

		this.legLeft.setScale(this.scale);
		this.legRight.setScale(this.scale);
		this.armLeft.setScale(this.scale);
		this.body.setScale(this.scale);
		this.armRight.setScale(this.scale);
		this.head.setScale(this.scale);

		this.stiffness = 0.2;
		this.softStiffness = 0.002;

		this.addJointPlus(
			this.body, {x:40, y:63},
			this.armLeft, {x:120, y:25},
			{x:-90, y:90}, {x:0, y:-50}
		);
		this.addJointPlus(
			this.body, {x:200, y:75},
			this.armRight, {x:33, y:30},
			{x:110, y:120}, {x:0, y:-50}
		);
		this.addJointPlus(
			this.body, {x:40, y:220},
			this.legLeft, {x:83, y:30},
			{x:-20, y:110}, {x:0, y:50}
		);
		this.addJointPlus(
			this.body, {x:220, y:230},
			this.legRight, {x:60, y:27},
			{x:0, y:120}, {x:0, y:50}
		);
		this.addJointPlus(
			this.body, {x:132, y:24},
			this.head, {x:180, y:325},
			{x:0, y:-280}, {x:0, y:-50}
		);

		this.body.setFriction(0.05);
		this.body.setFrictionAir(0.0005);
		this.body.setBounce(0.2);

		//this.legL = scene.add.sprite(-30, 40, 'leg');
		//this.legL.setScale(-0.5, 0.5);
		//this.add(this.legL);

		//this.armL = scene.add.sprite(-30, -30, 'arm');
		//this.armL.setScale(-0.7, 0.7);
		//this.add(this.armL);

		//this.body = scene.add.sprite(0, 0, 'body');
		//this.body.setScale(0.8);
		//this.add(this.body);

		//this.head = scene.add.sprite(0, -50, 'head');
		//this.head.setScale(0.7);
		//this.add(this.head);

		//this.legR = scene.add.sprite(30, 40, 'leg');
		//this.legR.setScale(0.5);
		//this.add(this.legR);

		//this.armR = scene.add.sprite(30, -30, 'arm');
		//this.armR.setScale(0.7);
		//this.add(this.armR);

		//this.velocityX = 0;
		//this.velocityY = 0;

		this.keyUp = scene.input.keyboard.addKey('UP');
		this.keyDown = scene.input.keyboard.addKey('DOWN');
		this.keyLeft = scene.input.keyboard.addKey('LEFT');
		this.keyRight = scene.input.keyboard.addKey('RIGHT');
	}

	addJointPlus(bodyA, offsetA, bodyB, offsetB, offsetA2, offsetB2) {
		let softOffsetA = {
			x: offsetA.x + offsetA2.x + offsetB2.x,
			y: offsetA.y + offsetA2.y + offsetB2.y,
		};
		let softOffsetB = {
			x: offsetB.x + offsetA2.x,
			y: offsetB.y + offsetA2.y,
		};

		this.addJoint(bodyA, offsetA, bodyB, offsetB, this.stiffness);
		this.addJoint(bodyA, softOffsetA, bodyB, softOffsetB, this.softStiffness);
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