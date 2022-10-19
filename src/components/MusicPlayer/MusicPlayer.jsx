import { RiVolumeUpFill } from 'react-icons/ri';
import { useRef, useState } from 'react';
import { PlayerMain, ProgressBar, MusicBar, MusicControls, MusicVolume, CurrentSongMbl } from '../../ui/index';
import Controls from './Controls/index';
import { getCurrentSongUrl, handleEndOfSong } from '../../features/songs/songsSlice';
import { useDispatch, useSelector } from 'react-redux';

const MusicPlayer = () => {
  const dispatch = useDispatch();
  const songUrl = useSelector(getCurrentSongUrl);

  const [ currentSongTime, setCurrentSongTime ] = useState(0);
  const [ songDuration, setSongDuration ] = useState(0);
  const [ volume, setVolume ] = useState(0.25);

  const audioTag = useRef();
  
  const formatSongTime = (ms)=> { 
    return (ms - (ms %= 60)) / 60 + ( 9 < ms ? ':' : ':0') + ~~ms;  
  }

  const handleProgressBar = (progressValue) => {
    let calculatedProgress =(progressValue * songDuration);
    setCurrentSongTime(calculatedProgress);    
    audioTag.current.currentTime = calculatedProgress;
  }

  const handleVolume = (volumeValue) => {
    console.log(volumeValue)
    console.log(audioTag.current.volume)
    setVolume(volumeValue)
    audioTag.current.volume = volumeValue;
  }


  return (
    <>
    <PlayerMain>  
    <MusicControls>
      <Controls audioTag={audioTag} >
        <audio ref={audioTag}
          onTimeUpdate={(e) => setCurrentSongTime(e.target.currentTime)}
          onCanPlay={(e) => setSongDuration(e.target.duration)}
          onEnded={(e) => dispatch(handleEnd)}
          type="audio/mpeg"
          preload="true"
          src={songUrl}>
        </audio>
      </Controls>       // Component
      </MusicControls>
      <MusicBar className='progress_bar'>
        <ProgressBar 
        type="range" 
        id="progressBar"
        value={songDuration ? (currentSongTime * 100) / songDuration : 0}
        max="100"  
        onChange={(e) => handleProgressBar(((e.clientX - e.target.offsetLeft) / e.target.offsetWidth) * 100)}
      />
      <span>{currentSongTime ? formatSongTime(currentSongTime) : formatSongTime(0)}</span>
      <br></br>
      <span>{formatSongTime(songDuration)}</span>
      </MusicBar>
      <MusicVolume className='volume__bar'>
        <RiVolumeUpFill />
        <input 
          type="range" 
          value={Math.round(volume * 100)}
          name="volumeBar" 
          id="volumeBar" 
          onChange={(e) => handleVolume(e.target.value / 100)}
          />
      </MusicVolume>
    </PlayerMain>
    </>    
  );
};

export default MusicPlayer;
