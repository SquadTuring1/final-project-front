import React from 'react';
import { MainControl, ShuffleBtn, RepeatBtn,PlayBtn, ChangeSongBtn } from '../../../ui/index';
import { RiRepeat2Fill, RiShuffleFill, RiSkipBackFill, RiSkipForwardFill, RiPlayFill, RiPauseFill } from 'react-icons/ri';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playPreviousSong, playNextSong, toggleShuffle, toggleRepeat, togglePlaying, getPlaying, getShuffle, getRepeat } from '../../../features/songs/songsSlice';


const Controls = ({audioTag, children}) => {
  const dispatch = useDispatch();
  const isPlaying = useSelector(getPlaying)
  const shuffle = useSelector(getShuffle);
  const repeat = useSelector(getRepeat)
  



  const togglePlayPause = () => {
    console.log(isPlaying)
    dispatch(togglePlaying());          // toggle playing state
    audioTag.current.paused ? audioTag.current.play() : audioTag.current.pause();
  }

  const playPrevious = () => {
    if (audioTag.current.playing) {
      audioTag.current.ended = true;
      dispatch(playPreviousSong());
      audioTag.current.play();
    } 
  }

  const playNext = () => {
    
  }


  return (
    <MainControl>
      {/* component composition from musicplayer to bring in audio, with state */}
      {children && children}
      <ShuffleBtn as={RiShuffleFill} selected={shuffle} onClick={() => dispatch(toggleShuffle())} />
      <ChangeSongBtn as={RiSkipBackFill}  onClick={() => playPrevious} />      
      <PlayBtn as={!isPlaying ? RiPlayFill : RiPauseFill} selected={isPlaying} onClick={togglePlayPause} />
      <ChangeSongBtn as={RiSkipForwardFill} onClick={() => dispatch(playNextSong())} />
      <RepeatBtn as={RiRepeat2Fill} selected={repeat} onClick={() => dispatch(toggleRepeat())} />
    </MainControl>
  );
};

export default Controls;
