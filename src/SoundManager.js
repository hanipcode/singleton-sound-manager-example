


class SoundManager {
  sounds = {};
  bgMusicPlayed = false;

  constructor() {
    this.sounds['walk']  = new Audio('jump.wav');
    this.sounds['jump'] = new Audio('jump.flac')
    this.sounds['bgMusic'] = new Audio('abeth.wav');
  }

  play(soundName) {
    this.sounds[soundName].play();
  }

  startBgMusic() {
    if (!this.bgMusicPlayed) {
      this.sounds['bgMusic'].play();
      this.bgMusicPlayed = true;
    }
  }

  pauseBgMusic() {
    if (this.bgMusicPlayed) {
      this.sounds['bgMusic'].pause();
      this.bgMusicPlayed = false;
    }
  }

  replayBGMusic() {
    this.sounds['bgMusic'].currentTime = 0;
    this.startBgMusic();
  }
}


export default new SoundManager();