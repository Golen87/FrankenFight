class PreloadScene extends Phaser.Scene {
	constructor() {
		super({key: 'PreloadScene'});
	}

	preload() {
		this.loading = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, "Loading...", { font: "20px Courier" });
		this.loading.setOrigin(0.5);

		this.load.spritesheet('arms', 'assets/sprites/arm_spritesheet.png', { frameWidth: 500, frameHeight: 150 });
		this.load.spritesheet('legs', 'assets/sprites/leg_spritesheet.png', { frameWidth: 200, frameHeight: 250 });

		this.load.image('background', 'assets/sprites/background.png');
		this.load.image('block', 'assets/sprites/block.png');
		this.load.image('body1', 'assets/sprites/body1.png');
		this.load.image('body2', 'assets/sprites/body2.png');
		this.load.image('body', 'assets/sprites/body.png');
		this.load.image('circle', 'assets/sprites/circle.png');
		this.load.image('ground', 'assets/sprites/ground.png');
		this.load.image('head1', 'assets/sprites/head1.png');
		this.load.image('head2', 'assets/sprites/head2.png');
		this.load.image('head', 'assets/sprites/head.png');
		this.load.image('platform', 'assets/sprites/platform.png');

		//this.load.image('detrius', 'assets/images/icons/Detrius_128.png');
		//this.load.audio('ambience_main_menu', [ 'assets/audio/ambience_main_menu.ogg' ] );
		//this.load.on('progress', this.onLoadProgress, this);
	}

	onLoadProgress(progress) {
		this.loading.setText(`Loading... ${Math.round(progress * 100)}%`);
	}

	create() {
		this.scene.start("GameScene");
	}
}