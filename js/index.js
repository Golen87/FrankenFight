//var config = {
//	type: Phaser.WEBGL,
//	width: 800,
//	height: 600,
//	parent: 'game',
//	//scale: {
//	//	mode: Phaser.Scale.RESIZE
//	//},
//	physics: {
//		default: 'arcade',
//		arcade: {
//			gravity: {y: 200}
//		}
//	},
//	scene: [
//		PreloadScene,
//		TitleScene,
//		WorldScene,
//		LevelScene,

//		ExampleScene1,
//		ExampleScene2,
//		ExampleScene3,
//		ClickScene,
//	]
//};

//var game = new Phaser.Game(config);

var config = {
	type: Phaser.AUTO,
	width: 75*16,
	height: 75*9,
	parent: 'phaser-example',
	physics: {
		default: 'arcade',
		arcade: {
			debug: true,
			//gravity: { y: 150 }
		}
	},
	scene: {
		preload: preload,
		create: create,
		update: update
	}
};

new Phaser.Game(config);

function preload() {
	this.load.image('body', 'assets/sprites/body.png');
	this.load.image('head', 'assets/sprites/head.png');
	this.load.image('arm', 'assets/sprites/arm.png');
	this.load.image('leg', 'assets/sprites/leg.png');
}

function create() {
	this.cameras.main.setBackgroundColor(0xbababa);

	//this.physics.world.gravity.y = 60;

	var group = this.physics.add.group({
		//defaultKey: 'head',
		bounceX: 1,
		bounceY: 1,
		collideWorldBounds: true
	});

	//group.create(250, 300, 'body');
	//group.create(350, 300, 'head').setGravity(0, 0);
	//group.create(450, 300, 'leg').setGravity(0, 0);
	//group.create(550, 300, 'arm').body.setAllowGravity(false);

	this.player = new Player(this, 600, 300);
	//this.player.setDepth(2);
	this.add.existing(this.player);

	this.cursors = this.input.keyboard.createCursorKeys();
}

function update(time, delta) {
	this.player.update(time, delta);

	if (this.cursors.left.isDown) {
		this.player.x -= 10;
	}

	if (this.cursors.right.isDown) {
		this.player.x += 10;
	}
}


//var config = {
//	type: Phaser.AUTO,
//	width: 800,
//	height: 600,
//	backgroundColor: '#2d2d2d',
//	parent: 'phaser-example',
//	scene: {
//		preload: preload,
//		create: create
//	}
//};

//var game = new Phaser.Game(config);

//function preload ()
//{
//	this.load.spritesheet('diamonds', 'assets/sprites/diamonds32x24x5.png', { frameWidth: 32, frameHeight: 24 });
//}

//function create ()
//{
//	var group = this.add.group({
//		key: 'diamonds',
//		frame: [ 0, 1, 2, 3, 4 ],
//		frameQuantity: 20
//	});

//	Phaser.Actions.GridAlign(group.getChildren(), {
//		width: 10,
//		height: 10,
//		cellWidth: 32,
//		cellHeight: 32,
//		x: 100,
//		y: 100
//	});
//}

/*
var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	parent: 'phaser-example',
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 },
			debug: false
		}
	},
	scene: {
		preload: preload,
		create: create,
		update: update
	}
};

var player;
var cursors;

var game = new Phaser.Game(config);

function preload ()
{
	this.load.image('sky', 'assets/sprites/head.png');
	this.load.image('ground', 'assets/sprites/head.png');
	this.load.image('star', 'assets/sprites/head.png');
	this.load.spritesheet('dude', 'assets/sprites/head.png', { frameWidth: 300, frameHeight: 300 });
}

var FlyingStar = new Phaser.Class({

	Extends: Phaser.Physics.Arcade.Sprite,

	initialize:

	function FlyingStar (scene, x, y, width, height, speed)
	{
		Phaser.Physics.Arcade.Sprite.call(this, scene, x, y, 'star');

		//  This is the path the sprite will follow
		this.path = new Phaser.Curves.Ellipse(x, y, width, height);
		this.pathIndex = 0;
		this.pathSpeed = speed;
		this.pathVector = new Phaser.Math.Vector2();

		this.path.getPoint(0, this.pathVector);

		this.setPosition(this.pathVector.x, this.pathVector.y);
	},

	preUpdate: function (time, delta)
	{
		this.anims.update(time, delta);

		this.path.getPoint(this.pathIndex, this.pathVector);

		this.setPosition(this.pathVector.x, this.pathVector.y);

		this.pathIndex = Phaser.Math.Wrap(this.pathIndex + this.pathSpeed, 0, 1);
	}

});

function create ()
{
	this.add.image(400, 300, 'sky');

	var platforms = this.physics.add.staticGroup();

	platforms.create(400, 568, 'ground').setScale(2).refreshBody();
	platforms.create(600, 400, 'ground');
	platforms.create(50, 250, 'ground');

	player = this.physics.add.sprite(100, 450, 'dude');

	player.setBounce(0.2);
	player.setCollideWorldBounds(true);

	var stars = this.physics.add.group({ allowGravity: false });

	//  x, y = center of the path
	//  width, height = size of the elliptical path
	//  speed = speed the sprite moves along the path per frame

	stars.add(new FlyingStar(this, 150, 100, 100, 100, 0.005), true);
	stars.add(new FlyingStar(this, 500, 200, 40, 100, 0.005), true);
	stars.add(new FlyingStar(this, 600, 200, 40, 100, -0.005), true);
	stars.add(new FlyingStar(this, 700, 200, 40, 100, 0.01), true);

	// this.anims.create({
	// 	key: 'left',
	// 	frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
	// 	frameRate: 10,
	// 	repeat: -1
	// });

	// this.anims.create({
	// 	key: 'turn',
	// 	frames: [ { key: 'dude', frame: 4 } ],
	// 	frameRate: 20
	// });

	// this.anims.create({
	// 	key: 'right',
	// 	frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
	// 	frameRate: 10,
	// 	repeat: -1
	// });

	cursors = this.input.keyboard.createCursorKeys();

	this.physics.add.collider(player, platforms);

	this.physics.add.overlap(player, stars, collectStar, null, this);
}

function update ()
{
	if (cursors.left.isDown)
	{
		player.setVelocityX(-160);

		//player.anims.play('left', true);
	}
	else if (cursors.right.isDown)
	{
		player.setVelocityX(160);

		//player.anims.play('right', true);
	}
	else
	{
		player.setVelocityX(0);

		//player.anims.play('turn');
	}

	if (cursors.up.isDown && player.body.touching.down)
	{
		player.setVelocityY(-330);
	}
}

function collectStar (player, star)
{
	star.disableBody(true, true);
}
*/