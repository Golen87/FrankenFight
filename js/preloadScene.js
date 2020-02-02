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

		//this.load.audio('clank', 'clank.wav');
		//this.load.audio('crackle1', 'crackle1.ogg');
		//this.load.audio('crackle2', 'crackle2.ogg');
		//this.load.audio('crackle3', 'crackle3.ogg');
		//this.load.audio('creak_long', 'creak_long.wav');
		//this.load.audio('creak_tiny', 'creak_tiny.ogg');
		//this.load.audio('crow', 'crow.wav');
		//this.load.audio('crunch1', 'crunch1.ogg');
		//this.load.audio('crunch2', 'crunch2.ogg');
		//this.load.audio('crunch3', 'crunch3.ogg');
		//this.load.audio('crunch4', 'crunch4.ogg');
		//this.load.audio('crunch5', 'crunch5.ogg');
		//this.load.audio('crunch6', 'crunch6.wav');
		//this.load.audio('detach1', 'detach1.ogg');
		//this.load.audio('detach2', 'detach2.ogg');
		//this.load.audio('detach3', 'detach3.ogg');
		//this.load.audio('drill', 'drill.ogg');
		//this.load.audio('drip1', 'drip1.ogg');
		//this.load.audio('drip2', 'drip2.ogg');
		//this.load.audio('extinguish', 'extinguish.wav');
		//this.load.audio('firework1', 'firework1.wav');
		//this.load.audio('firework2', 'firework2.wav');
		//this.load.audio('heartbeat', 'heartbeat.wav');
		//this.load.audio('ignite', 'ignite.wav');
		//this.load.audio('latch', 'latch.wav');
		//this.load.audio('paper', 'paper.wav');
		//this.load.audio('punch1', 'punch1.ogg');
		//this.load.audio('punch2', 'punch2.ogg');
		//this.load.audio('pwap1', 'pwap1.ogg');
		//this.load.audio('pwap2', 'pwap2.ogg');
		//this.load.audio('rocket', 'rocket.wav');
		//this.load.audio('shank1', 'shank1.ogg');
		//this.load.audio('shank2', 'shank2.ogg');
		//this.load.audio('shank3', 'shank3.ogg');
		//this.load.audio('shatter', 'shatter.wav');
		//this.load.audio('slosh1', 'slosh1.ogg');
		//this.load.audio('slosh2', 'slosh2.ogg');
		//this.load.audio('slosh3', 'slosh3.ogg');
		//this.load.audio('slosh4', 'slosh4.ogg');
		//this.load.audio('slosh5', 'slosh5.ogg');
		//this.load.audio('sparkle2', 'sparkle2.wav');
		//this.load.audio('sparkle', 'sparkle.wav');
		//this.load.audio('spin', 'spin.wav');
		//this.load.audio('splash1', 'splash1.wav');
		//this.load.audio('splash2', 'splash2.wav');
		//this.load.audio('splash_big', 'splash_big.wav');
		//this.load.audio('spring_boing', 'spring_boing.wav');
		//this.load.audio('spring_long', 'spring_long.wav');
		//this.load.audio('spring_short', 'spring_short.wav');
		//this.load.audio('spring_vibrate', 'spring_vibrate.wav');
		//this.load.audio('stab', 'stab.ogg');
		//this.load.audio('steppy_small', 'steppy_small.wav');
		//this.load.audio('steppy', 'steppy.wav');
		//this.load.audio('steps', 'steps');
		//this.load.audio('thud1', 'thud1.ogg');
		//this.load.audio('thud2', 'thud2.ogg');
		//this.load.audio('thud3', 'thud3.ogg');
		//this.load.audio('thud_bigger', 'thud_bigger.wav');
		//this.load.audio('thud_big', 'thud_big.wav');
		//this.load.audio('thunder', 'thunder.wav');
		//this.load.audio('toss', 'toss.ogg');
		//this.load.audio('toss_soft', 'toss_soft.ogg');
		//this.load.audio('woosh_big', 'woosh_big.ogg');
		//this.load.audio('woosh', 'woosh.ogg');
		//this.load.audio('woosh_soft', 'woosh_soft.wav');
		//this.load.audio('nsmbwiiFootStepBlock1', 'nsmbwiiFootStepBlock1.wav');
		//this.load.audio('nsmbwiiFootStepBlock2', 'nsmbwiiFootStepBlock2.wav');
		//this.load.audio('nsmbwiiFootStepGrass1', 'nsmbwiiFootStepGrass1.wav');
		//this.load.audio('nsmbwiiFootStepGrass2', 'nsmbwiiFootStepGrass2.wav');
		//this.load.audio('nsmbwiiFootStepHotAirBalloon1', 'nsmbwiiFootStepHotAirBalloon1.wav');
		//this.load.audio('nsmbwiiFootStepHotAirBalloon2', 'nsmbwiiFootStepHotAirBalloon2.wav');
		//this.load.audio('nsmbwiiFootStepIce1', 'nsmbwiiFootStepIce1.wav');
		//this.load.audio('nsmbwiiFootStepIce2', 'nsmbwiiFootStepIce2.wav');
		//this.load.audio('nsmbwiiFootStepSand1', 'nsmbwiiFootStepSand1.wav');
		//this.load.audio('nsmbwiiFootStepSand2', 'nsmbwiiFootStepSand2.wav');
		//this.load.audio('nsmbwiiFootStepShallowWater1', 'nsmbwiiFootStepShallowWater1.wav');
		//this.load.audio('nsmbwiiFootStepShallowWater2', 'nsmbwiiFootStepShallowWater2.wav');
		//this.load.audio('nsmbwiiFootStepSnow1', 'nsmbwiiFootStepSnow1.wav');
		//this.load.audio('nsmbwiiFootStepSnow2', 'nsmbwiiFootStepSnow2.wav');
		//this.load.audio('nsmbwiiFootStepTree1', 'nsmbwiiFootStepTree1.wav');
		//this.load.audio('nsmbwiiFootStepTree2', 'nsmbwiiFootStepTree2.wav');
		//this.load.audio('nsmbwiiHotAirBalloonLand', 'nsmbwiiHotAirBalloonLand.wav');
		//this.load.audio('nsmbwiiKoopalingLand', 'nsmbwiiKoopalingLand.wav');
		//this.load.audio('nsmbwiiKoopalingShellLand', 'nsmbwiiKoopalingShellLand.wav');
		//this.load.audio('nsmbwiiLandBlock1', 'nsmbwiiLandBlock1.wav');
		//this.load.audio('nsmbwiiLandBlock2', 'nsmbwiiLandBlock2.wav');
		//this.load.audio('nsmbwiiLandGrass', 'nsmbwiiLandGrass.wav');
		//this.load.audio('nsmbwiiLandIce', 'nsmbwiiLandIce.wav');
		//this.load.audio('nsmbwiiLandQuicksand', 'nsmbwiiLandQuicksand.wav');
		//this.load.audio('nsmbwiiLandSand', 'nsmbwiiLandSand.wav');
		//this.load.audio('nsmbwiiLandShallowWater', 'nsmbwiiLandShallowWater.wav');
		//this.load.audio('nsmbwiiLandSnow', 'nsmbwiiLandSnow.wav');
		//this.load.audio('nsmbwiiLandTree', 'nsmbwiiLandTree.wav');
		//this.load.audio('nsmbwiiPenguinSuitFootstep1', 'nsmbwiiPenguinSuitFootstep1.wav');
		//this.load.audio('nsmbwiiPenguinSuitFootStep2', 'nsmbwiiPenguinSuitFootStep2.wav');
		//this.load.audio('nsmbwiiPenguinSuitFootStep3', 'nsmbwiiPenguinSuitFootStep3.wav');
		//this.load.audio('nsmbwiiPenguinSuitFootStep4', 'nsmbwiiPenguinSuitFootStep4.wav');
		//this.load.audio('nsmbwiiPenguinSuitLand1', 'nsmbwiiPenguinSuitLand1.wav');
		//this.load.audio('nsmbwiiPenguinSuitLand2', 'nsmbwiiPenguinSuitLand2.wav');
		//this.load.audio('nsmbwiiPenguinSuitSwim1', 'nsmbwiiPenguinSuitSwim1.wav');
		//this.load.audio('nsmbwiiPenguinSuitSwim2', 'nsmbwiiPenguinSuitSwim2.wav');
		//this.load.audio('nsmbwiiPrincessToadstoolFootStep1', 'nsmbwiiPrincessToadstoolFootStep1.wav');
		//this.load.audio('nsmbwiiPrincessToadstoolFootStep2', 'nsmbwiiPrincessToadstoolFootStep2.wav');
		//this.load.audio('nsmbwiiPrincessToadstoolLand', 'nsmbwiiPrincessToadstoolLand.wav');
		//this.load.audio('nsmbwiiSlide1', 'nsmbwiiSlide1.wav');
		//this.load.audio('nsmbwiiSlide2', 'nsmbwiiSlide2.wav');
		//this.load.audio('nsmbwiiSlideIce1', 'nsmbwiiSlideIce1.wav');
		//this.load.audio('nsmbwiiSlideSand', 'nsmbwiiSlideSand.wav');
		//this.load.audio('nsmbwiiSlideShallowWater', 'nsmbwiiSlideShallowWater.wav');
		//this.load.audio('nsmbwiiYoshiFootStep1', 'nsmbwiiYoshiFootStep1.wav');


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