const SOUND = new Audio('public/static/sound/eight-bit-coin.wav');

export default function clickerGame() {
  return {
    score: 0,
    scoreMultiplier: 1.0,
    scorePerClick: 1,
    // sound data
    maxSounds: 5,
    soundIndex: 0,
    clickSoundPool: [],
    clicks: 0,
    init() {
      SOUND.load();

      for (let i = 0; i < this.maxSounds; i++) {
        this.clickSoundPool.push(SOUND)
      }
    },
    playSound() {
      const currentSound = this.clickSoundPool[this.soundIndex];
      currentSound.currentTime = 0; // reset
      currentSound.play(); // play
      this.soundIndex = (this.soundIndex + 1) % this.maxSounds; // cycle
    },
    handleClick() {
      this.score = this.score + (this.scorePerClick * this.scoreMultiplier);
      this.clicks++;
      this.playSound();
      // this.addScoreAnimation();
    }
  }
}
