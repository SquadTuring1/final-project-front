import { PlayerMain, ProgressBar, MusicBar, MusicControls, ProgressTime, SongTimer, MusicVolume } from '../../ui/index';
import Volume from '../Volume/index';
import { RiVolumeUpFill } from 'react-icons/ri';
import { useRef, useState } from 'react';
import Controls from './Controls/index';
import { getCurrentSongUrl, getShuffle, getRepeat, getCurrentSongIndex, getSongList, playNextSong, playRandomSong } from '../../features/songs/songsSlice';
import { useDispatch, useSelector } from 'react-redux';


const MusicPlayer = () => {
  const dispatch = useDispatch();
  const songUrl = useSelector(getCurrentSongUrl); 
  const shuffle = useSelector(getShuffle);
  const repeat = useSelector(getRepeat);
  const songIndex = useSelector(getCurrentSongIndex)
  const songList = useSelector(getSongList)

  const [ currentSongTime, setCurrentSongTime ] = useState(0);
  const [ songDuration, setSongDuration ] = useState(0);
  const [ volume, setVolume ] = useState(0.15);

  const audioTag = useRef();
  
  const formatSongTime = (ms)=> { 
    return (ms - (ms %= 60)) / 60 + ( 9 < ms ? ':' : ':0') + ~~ms;  
  }

  const handleProgressBar = (e) => {
    const progress = Math.floor((e.target.value / 1000) * songDuration);
    setCurrentSongTime(progress)
    audioTag.current.currentTime = progress;
  }

  const handleVolume = (volumeValue) => {
    setVolume(volumeValue)
    audioTag.current.volume = volumeValue;
  }

  const handleEndOfSong = async (e) => {    
    console.log(e)
    if (shuffle) {
      dispatch(playRandomSong())
    } else {
      if (repeat) {
        dispatch(playNextSong())
      } else if (songIndex === songList.length - 1) {   // if last song, don't play anything else
        return;
      } else {          // if error, play next song
        dispatch(playNextSong())
      }
    }
    await audioTag.current.load();
    await audioTag.current.play();
  }

  return (
    <>
    <PlayerMain>  
    <MusicControls>
      <Controls audioTag={audioTag} >
        <audio ref={audioTag}
          onTimeUpdate={(e) => setCurrentSongTime(e.target.currentTime)}
          onCanPlay={(e) => setSongDuration(e.target.duration)}
          onEnded={(e) => handleEndOfSong(e)}
          type="audio/mpeg"
          preload="true"
          src={songUrl}>
        </audio>
      </Controls>      
      </MusicControls>
      <MusicBar className='progress_bar'>
        <ProgressTime>
          <SongTimer>{currentSongTime ? formatSongTime(currentSongTime) : formatSongTime(0)}</SongTimer>
          <SongTimer>{formatSongTime(songDuration)}</SongTimer>
        </ProgressTime>
        <ProgressBar type="range" 
        id="progressBar"
        value={songDuration ? (currentSongTime * 1000) / songDuration : 0}
        max="1000"  
        onChange={(e) => handleProgressBar(e)}
        />
          {/* </MusicBar> */}
            
         
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
