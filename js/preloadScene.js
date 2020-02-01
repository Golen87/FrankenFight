class PreloadScene extends Phaser.Scene {
	constructor() {
		super({key: 'PreloadScene'});
	}

	preload() {
		this.loading = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, "Loading...", { font: "20px Courier" });
		this.loading.setOrigin(0.5);

		this.load.image('arm_left1', 'assets/sprites/arm_left1.png');
		this.load.image('arm_left2', 'assets/sprites/arm_left2.png');
		this.load.image('arm', 'assets/sprites/arm.png');
		this.load.image('arm_right1', 'assets/sprites/arm_right1.png');
		this.load.image('arm_right2', 'assets/sprites/arm_right2.png');
		this.load.image('block', 'assets/sprites/block.png');
		this.load.image('body1', 'assets/sprites/body1.png');
		this.load.image('body2', 'assets/sprites/body2.png');
		this.load.image('body', 'assets/sprites/body.png');
		this.load.image('head1', 'assets/sprites/head1.png');
		this.load.image('head2', 'assets/sprites/head2.png');
		this.load.image('head', 'assets/sprites/head.png');
		this.load.image('leg_left1', 'assets/sprites/leg_left1.png');
		this.load.image('leg_left2', 'assets/sprites/leg_left2.png');
		this.load.image('leg', 'assets/sprites/leg.png');
		this.load.image('leg_right1', 'assets/sprites/leg_right1.png');
		this.load.image('leg_right2', 'assets/sprites/leg_right2.png');
		this.load.image('platform', 'assets/sprites/platform.png');
		this.load.image('circle', 'assets/sprites/circle.png');

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