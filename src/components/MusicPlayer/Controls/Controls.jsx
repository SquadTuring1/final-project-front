import React from 'react';
import { MainControl, ShuffleBtn, RepeatBtn,PlayBtn } from '../../../ui/index';
import { RiRepeat2Fill, RiShuffleFill, RiSkipBackFill, RiSkipForwardFill, RiPlayFill, RiPauseFill } from 'react-icons/ri';

import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPlaying, playPreviousSong, playNextSong, toggleShuffle, toggleRepeat, togglePlaying, handleEndOfSong } from '../../../features/songs/songsSlice';


const Controls = ({audioTag, children}) => {
 
  const dispatch = useDispatch();
 
  
  const toggleAudio = () => {    
    audioTag.current.paused ? audioTag.current.play() : audioTag.current.pause();
  }

  const playAudio = () => {
    dispatch(togglePlaying);             // toggle playing state
    toggleAudio();
  }


  return (
    <MainControl>
      {children && children}
      <ShuffleBtn as={RiShuffleFill} onClick={() => dispatch(toggleShuffle())} />
      <RiSkipBackFill onClick={() => dispatch(playPreviousSong())} />
      <PlayBtn as={RiPlayFill} onClick={() => playAudio()} />
      <RiSkipForwardFill onClick={() => dispatch(playNextSong())} />
      <RepeatBtn as={RiRepeat2Fill} onClick={() => dispatch(toggleRepeat())} />
    </MainControl>
  );
};

export default Controls;
