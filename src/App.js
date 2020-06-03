import React from 'react';
import logo from './logo.svg';
import './App.css';
import SoundManager from './SoundManager';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => SoundManager.play('jump')}>Play jump</button>
        <button onClick={() => SoundManager.play('walk')}>Play walk</button>
        <button onClick={() => SoundManager.startBgMusic()}>Play BG music</button>
        <button onClick={() => SoundManager.pauseBgMusic()}>Pause BG music</button>
        <button onClick={() => SoundManager.replayBGMusic()}>REplay BG music</button>
      </header>
    </div>
  );
}

export default App;
