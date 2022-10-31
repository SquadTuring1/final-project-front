import { PlayerMain, ProgressBar, MusicBar, MusicControls, ProgressTime, SongTimer, MusicVolume } from '../../ui/index';
import Volume from '../Volume/index';
import { RiVolumeUpFill } from 'react-icons/ri';
import { useRef, useState } from 'react';
import Controls from './Controls/index';
import { getCurrentSongUrl, getShuffle, getRepeat, getCurrentSongIndex, getSongList, playNextSong, playRandomSong } from '../../features/songs/songsSlice';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';


const MusicPlayer = () => {
  const dispatch = useDispatch();
  const songUrl = useSelector(getCurrentSongUrl); 
  const shuffle = useSelector(getShuffle);
  const repeat = useSelector(getRepeat);
  const songIndex = useSelector(getCurrentSongIndex)
  const songList = useSelector(getSongList)

  const [ currentSongTime, setCurrentSongTime ] = useState(0);
  const [ songDuration, setSongDuration ] = useState(0);
  const [ volume, setVolume ] = useState(0.1);

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
    console.log(volumeValue)
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

  const handleChange = (event, newValue) => {
    setVolume(newValue);
  };


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
        <Box sx={{ width: '70%',
          margin:'0 auto' }}>
          <ProgressBar as={Slider}
          aria-label="Temperature"
          defaultValue={30}
          color='error'
            value={songDuration ? (currentSongTime * 1000) / songDuration : 0}
            max='1000'
            onChange={(e) => handleProgressBar(e)}
          />
        </Box>
          {/* </MusicBar> */}
            
         
      </MusicBar>
      {/* <MusicVolume className='volume__bar'>
        <RiVolumeUpFill />
        <input 
          type="range" 
          value={Math.round(volume * 100)}
          name="volumeBar" 
          id="volumeBar" 
          onChange={(e) => handleVolume(e.target.value / 100)}
          />
      </MusicVolume> */}
      <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1, margin:'3rem 1rem 0 0'}} alignItems="center">
        <VolumeDown sx={{ color:'#fff'}} />
        <Slider aria-label="Volume"   value={Math.round(volume * 100)} onChange={(e) => handleVolume(e.target.value / 100)} color='error'/>
        <VolumeUp  sx={{ color:'#fff'}} />
      </Stack>
    </Box>
    </PlayerMain>
    </>    
  );
};

export default MusicPlayer;
