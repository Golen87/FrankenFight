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
		this.load.image('dead1', 'assets/sprites/dead1.png');
		this.load.image('dead2', 'assets/sprites/dead2.png');
		this.load.image('head', 'assets/sprites/head.png');
		this.load.image('platform', 'assets/sprites/platform.png');
		this.load.image('blood', 'assets/sprites/blood.png');
		this.load.image('win1', 'assets/sprites/win1.png');
		this.load.image('win2', 'assets/sprites/win2.png');

		//this.load.audio('clank', 'assets/audio/gameplay/clank.wav');
		this.load.audio('crackle1', 'assets/audio/gameplay/crackle1.ogg');
		this.load.audio('crackle2', 'assets/audio/gameplay/crackle2.ogg');
		this.load.audio('crackle3', 'assets/audio/gameplay/crackle3.ogg');
		//this.load.audio('creak_long', 'assets/audio/gameplay/creak_long.wav');
		//this.load.audio('creak_tiny', 'assets/audio/gameplay/creak_tiny.ogg');
		this.load.audio('crow', 'assets/audio/gameplay/crow.wav');
		this.load.audio('crunch1', 'assets/audio/gameplay/crunch1.ogg');
		this.load.audio('crunch2', 'assets/audio/gameplay/crunch2.ogg');
		this.load.audio('crunch3', 'assets/audio/gameplay/crunch3.ogg');
		this.load.audio('crunch4', 'assets/audio/gameplay/crunch4.ogg');
		this.load.audio('crunch5', 'assets/audio/gameplay/crunch5.ogg');
		this.load.audio('crunch6', 'assets/audio/gameplay/crunch6.wav');
		this.load.audio('detach1', 'assets/audio/gameplay/detach1.ogg');
		this.load.audio('detach2', 'assets/audio/gameplay/detach2.ogg');
		this.load.audio('detach3', 'assets/audio/gameplay/detach3.ogg');
		//this.load.audio('drill', 'assets/audio/gameplay/drill.ogg');
		this.load.audio('drip1', 'assets/audio/gameplay/drip1.ogg');
		this.load.audio('drip2', 'assets/audio/gameplay/drip2.ogg');
		//this.load.audio('extinguish', 'assets/audio/gameplay/extinguish.wav');
		//this.load.audio('firework1', 'assets/audio/gameplay/firework1.wav');
		//this.load.audio('firework2', 'assets/audio/gameplay/firework2.wav');
		//this.load.audio('heartbeat', 'assets/audio/gameplay/heartbeat.wav');
		//this.load.audio('ignite', 'assets/audio/gameplay/ignite.wav');
		//this.load.audio('latch', 'assets/audio/gameplay/latch.wav');
		//this.load.audio('paper', 'assets/audio/gameplay/paper.wav');
		//this.load.audio('punch1', 'assets/audio/gameplay/punch1.ogg');
		//this.load.audio('punch2', 'assets/audio/gameplay/punch2.ogg');
		//this.load.audio('pwap1', 'assets/audio/gameplay/pwap1.ogg');
		//this.load.audio('pwap2', 'assets/audio/gameplay/pwap2.ogg');
		//this.load.audio('rocket', 'assets/audio/gameplay/rocket.wav');
		this.load.audio('shank1', 'assets/audio/gameplay/shank1.ogg');
		this.load.audio('shank2', 'assets/audio/gameplay/shank2.ogg');
		this.load.audio('shank3', 'assets/audio/gameplay/shank3.ogg');
		//this.load.audio('shatter', 'assets/audio/gameplay/shatter.wav');
		//this.load.audio('slosh1', 'assets/audio/gameplay/slosh1.ogg');
		//this.load.audio('slosh2', 'assets/audio/gameplay/slosh2.ogg');
		//this.load.audio('slosh3', 'assets/audio/gameplay/slosh3.ogg');
		//this.load.audio('slosh4', 'assets/audio/gameplay/slosh4.ogg');
		//this.load.audio('slosh5', 'assets/audio/gameplay/slosh5.ogg');
		//this.load.audio('sparkle2', 'assets/audio/gameplay/sparkle2.wav');
		//this.load.audio('sparkle', 'assets/audio/gameplay/sparkle.wav');
		//this.load.audio('spin', 'assets/audio/gameplay/spin.wav');
		//this.load.audio('splash1', 'assets/audio/gameplay/splash1.wav');
		//this.load.audio('splash2', 'assets/audio/gameplay/splash2.wav');
		//this.load.audio('splash_big', 'assets/audio/gameplay/splash_big.wav');
		//this.load.audio('spring_boing', 'assets/audio/gameplay/spring_boing.wav');
		//this.load.audio('spring_long', 'assets/audio/gameplay/spring_long.wav');
		//this.load.audio('spring_short', 'assets/audio/gameplay/spring_short.wav');
		//this.load.audio('spring_vibrate', 'assets/audio/gameplay/spring_vibrate.wav');
		//this.load.audio('stab', 'assets/audio/gameplay/stab.ogg');
		//this.load.audio('steppy_small', 'assets/audio/gameplay/steppy_small.wav');
		//this.load.audio('steppy', 'assets/audio/gameplay/steppy.wav');
		this.load.audio('thud1', 'assets/audio/gameplay/thud1.ogg');
		this.load.audio('thud2', 'assets/audio/gameplay/thud2.ogg');
		this.load.audio('thud3', 'assets/audio/gameplay/thud3.ogg');
		//this.load.audio('thud_bigger', 'assets/audio/gameplay/thud_bigger.wav');
		//this.load.audio('thud_big', 'assets/audio/gameplay/thud_big.wav');
		//this.load.audio('thunder', 'assets/audio/gameplay/thunder.wav');
		this.load.audio('toss', 'assets/audio/gameplay/toss.ogg');
		this.load.audio('toss_soft', 'assets/audio/gameplay/toss_soft.ogg');
		//this.load.audio('woosh_big', 'assets/audio/gameplay/woosh_big.ogg');
		//this.load.audio('woosh', 'assets/audio/gameplay/woosh.ogg');
		//this.load.audio('woosh_soft', 'assets/audio/gameplay/woosh_soft.wav');
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