

const SOUND_CONFIG = {
  walk:  'jump.wav',
  jump: 'jump.flac',
  bg: 'abeth.wav',
};

class SoundManager {
  sounds = {};
  bgMusicPlayed = false;
  muted = false;

  constructor() {
    this.sounds['walk']  = new Audio(SOUND_CONFIG['walk']);
    this.sounds['jump'] = new Audio(SOUND_CONFIG['jump']);
    this.sounds['bgMusic'] = new Audio(SOUND_CONFIG['bg']);
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

  muteOrUnmute() {
    const soundsKey = Object.keys(this.sounds);
    soundsKey.forEach((key => {
       this.sounds[key].muted  = !this.muted;
    }));
    this.muted = !this.muted;
  }
}


export default new SoundManager();