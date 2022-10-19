import React from 'react';
import { MainControl, ShuffleBtn, RepeatBtn,PlayBtn } from '../../../ui/index';
import { RiRepeat2Fill, RiShuffleFill, RiSkipBackFill, RiSkipForwardFill, RiPlayFill } from 'react-icons/ri';

import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { playPreviousSong, playNextSong, toggleShuffle, toggleRepeat, togglePlaying, getCurrentSong, handleEndOfSong, setCurrentSongTime, setSongDuration } from '../../../features/songs/songsSlice';


const Controls = ({audioRef}) => {
  const dispatch = useDispatch();

  const currentSong = useSelector(getCurrentSong)
  const handleEnd = useSelector(handleEndOfSong)  
  const playPrevious = useSelector(playPreviousSong)
  const playNext = useSelector(playNextSong)
  const shuffle = useSelector(toggleShuffle);
  const repeat = useSelector(toggleRepeat);
  const play = useSelector(togglePlaying)
  const setCurrentTime = useSelector(setCurrentSongTime)
  const setDuration = useSelector(setSongDuration)

  const audioTag = useRef('audio_tag');


  const toggleAudio = () => {
    audioTag.current && audioTag.current.paused ? audioTag.current.play() : audioTag.current.pause();
  }

  const playAudio = () => {
    dispatch(play);
    toggleAudio();
  }


  return (    
    <MainControl>
       <audio ref={audioTag} 
        onTimeUpdate={(e) => {
          dispatch(setCurrentTime(e.target.currentTime))
          console.log(e)
        }}
        onCanPlay={(e) => dispatch(setDuration(e.target.duration))}
        onEnded={(e) => dispatch(handleEnd)}
        type="audio/mpeg"
        preload="true"
        src={currentSong.fileUrl}>
      </audio>
      <ShuffleBtn as={RiShuffleFill} onClick={() => dispatch(shuffle)} />
      <RiSkipBackFill onClick={() => dispatch(playPrevious)} />
      <PlayBtn as={RiPlayFill} onClick={() => playAudio()} />
      <RiSkipForwardFill onClick={() => dispatch(playNext)} />
      <RepeatBtn as={RiRepeat2Fill} onClick={() => dispatch(repeat)} />
    </MainControl>
  );
};

export default Controls;
