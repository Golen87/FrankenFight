class Limb {
	constructor(scene, x, y, key, frame) {
		this.scene = scene;
		this.scale = 0.3;

		this.image = scene.matter.add.image(0, 0, key, frame);
		this.image.setScale(this.scale);

		let Bodies = Phaser.Physics.Matter.Matter.Bodies;
		let compoundBody = Phaser.Physics.Matter.Matter.Body.create({parts: [
			Bodies.circle(0, 0, 75*this.scale),
			Bodies.circle(-100*this.scale, 0, 75*this.scale),
		]});

		this.image.setExistingBody(compoundBody);
		this.image.setPosition(x, y);
		//this.image.setAngle(angle);
		this.image.setOrigin(0.5, 0.5);

		this.image.setCollisionCategory(scene.GROUP.GROUND);
		this.image.setCollidesWith(scene.GROUP.GROUND);

		this.image.setFriction(0.05);
		this.image.setFrictionAir(0.0005);
		this.image.setBounce(0.7);

		this.image.body.obj = scene.OBJ.LIMB;


		this.pickTimer = 1.0;
	}

	destroy() {
		this.image.destroy();
	}

	isBody(pair) {
		const id = this.image.body.id;
		const id1 = pair.bodyA.parent.id;
		const id2 = pair.bodyB.parent.id;
		return (id == id1 || id == id2);
	}

	canPick() {
		return (this.pickTimer <= 0);
	}


	/* Update */

	update(time, delta) {
		this.pickTimer -= delta/1000;
	}
}