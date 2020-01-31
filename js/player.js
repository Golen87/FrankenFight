class Player extends Phaser.GameObjects.Container {
	constructor(scene, x, y) {
		super(scene, x, y);

		this.legL = scene.add.sprite(-30, 40, 'leg');
		this.legL.setScale(-0.5, 0.5);
		this.add(this.legL);

		this.armL = scene.add.sprite(-30, -30, 'arm');
		this.armL.setScale(-0.7, 0.7);
		this.add(this.armL);

		this.body = scene.add.sprite(0, 0, 'body');
		this.body.setScale(0.8);
		this.add(this.body);

		this.legR = scene.add.sprite(30, 40, 'leg');
		this.legR.setScale(0.5);
		this.add(this.legR);

		this.armR = scene.add.sprite(30, -30, 'arm');
		this.armR.setScale(0.7);
		this.add(this.armR);

		this.head = scene.add.sprite(0, -50, 'head');
		this.head.setScale(0.7);
		this.add(this.head);
	}

	update(time, delta) {
		//this.x = 600 + 100 * Math.sin(time/1000);

		//this.head.y = -80 + 10 * Math.sin(3*time/1000);

		this.head.setRotation(Math.sin(time/300));
		this.legL.setRotation(Math.sin(time/300));
		this.legR.setRotation(Math.sin(time/300));
		this.armL.setRotation(Math.sin(time/300));
		this.armR.setRotation(Math.sin(time/300));
	}
}