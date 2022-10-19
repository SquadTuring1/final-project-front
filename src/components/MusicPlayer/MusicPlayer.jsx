import { RiVolumeUpFill } from 'react-icons/ri';
import { useRef, useState } from 'react';
import { PlayerMain, ProgressBar, MusicBar, MusicControls, MusicVolume, CurrentSongMbl } from '../../ui/index';
import Controls from './Controls/index';
import { getCurrentSongTime, getSongDuration, getVolume, setVolume, setCurrentSongTime } from '../../features/songs/songsSlice';
import { useDispatch, useSelector } from 'react-redux';

const MusicPlayer = () => {
  const dispatch = useDispatch();
  const setCurrentTime = useSelector(setCurrentSongTime)
  const songDuration = useSelector(getSongDuration)
  
  const currentTime = useSelector(getCurrentSongTime)
  // const handleVolume = useSelector(setVolume)

  const [ volume, setVolume ] = useState(0.25);
  


  const handleProgressBar = (progressBarValue) => {
    let calculatedProgress = progressBarValue * duration;
    dispatch(setCurrentTime(calculatedProgress));
    audio.current.currentTime = calculatedProgress;
  }

  const formatSongTime = (ms)=> {
    return (ms - (ms %= 60)) / 60 + ( 9 < ms ? ':' : ':0') + ms;
  }


  return (
    <>
    <PlayerMain>
    <MusicControls>
      <Controls />
      </MusicControls>
      <MusicBar className='progress_bar'>
        <ProgressBar 
        type="range" 
        id="progressBar"
        value={songDuration ? (currentTime * 100) / songDuration : 0}
        max="100"  
        onChange={(e) => handleProgressBar(e.clientX - e.target.offsetLeft / e.target.offsetWidth * 100)}
        
      />
      {/* <span>{formatSongTime(currentTime)}</span>
      <br></br>
      <span>{formatSongTime(songDuration)}</span> */}
      </MusicBar>
      <MusicVolume className='volume__bar'>
        <RiVolumeUpFill />
        <input 
          type="range" 
          defaultValue={Math.round(volume * 100)}
          name="volumeBar" 
          id="volumeBar" 
          onChange={(e) => {
            
            setVolume(e.target.value / 100)}  
          }
          />
      </MusicVolume>
    </PlayerMain>
    </>    
  );
};

export default MusicPlayer;
