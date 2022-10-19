import React from 'react';
import { MainControl, ShuffleBtn, RepeatBtn,PlayBtn } from '../../../ui/index';
import { RiRepeat2Fill, RiShuffleFill, RiSkipBackFill, RiSkipForwardFill, RiPlayFill } from 'react-icons/ri';

import { useDispatch, useSelector } from 'react-redux';
import { playPreviousSong, playNextSong, toggleShuffle, toggleRepeat, togglePlaying, getPlaying } from '../../../features/songs/songsSlice';


const Controls = ({audioTag, children}) => {
  const dispatch = useDispatch();
  const isPlaying = useSelector(getPlaying)


  const toggleAudio = () => {
    console.log(isPlaying)
    dispatch(togglePlaying);          // toggle playing state
    audioTag.current.paused ? audioTag.current.play() : audioTag.current.pause();
  }


  return (
    <MainControl>
      {children && children}
      <ShuffleBtn as={RiShuffleFill} onClick={() => dispatch(toggleShuffle())} />
      <RiSkipBackFill onClick={() => dispatch(playPreviousSong())} />
      <PlayBtn as={RiPlayFill} onClick={() => toggleAudio()} />
      <RiSkipForwardFill onClick={() => dispatch(playNextSong())} />
      <RepeatBtn as={RiRepeat2Fill} onClick={() => dispatch(toggleRepeat())} />
    </MainControl>
  );
};

export default Controls;
