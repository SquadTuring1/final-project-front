import React, { useEffect } from 'react';
import { MainControl, ShuffleBtn, RepeatBtn,PlayBtn, ChangeSongBtn } from '../../../ui/index';
import { RiRepeat2Fill, RiShuffleFill, RiSkipBackFill, RiSkipForwardFill, RiPlayFill, RiPauseFill } from 'react-icons/ri';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playPreviousSong, playNextSong, toggleShuffle, toggleRepeat, togglePlaying, getPlaying, getShuffle, getRepeat } from '../../../features/songs/songsSlice';


const Controls = ({audioTag, children}) => {
    const dispatch = useDispatch();
    const isPlayingState = useSelector(getPlaying)
    const shuffle = useSelector(getShuffle);
    const repeat = useSelector(getRepeat)

    useEffect(() => {
      if (audioTag.current) {
        audioTag.current.paused === isPlayingState ?? dispatch(togglePlaying())
      } 
    }, [audioTag.current && audioTag.current.paused])

    const togglePlayPause = () => {
      dispatch(togglePlaying());          // toggle playing state
      audioTag.current.paused ? audioTag.current.play() : audioTag.current.pause();
    }

    const changeTrack = async (trackChoice) => {    
      trackChoice === 'previous' && dispatch(playPreviousSong());
      trackChoice === 'next' && dispatch(playNextSong());
      if (!audioTag.current.paused) {
        await audioTag.current.load();
        await audioTag.current.play();
      }
    }

  return (
    <MainControl>
      {/* component composition from musicplayer to bring in audio, with state */}
      {children && children}
      <ShuffleBtn as={RiShuffleFill} selected={shuffle} onClick={() => dispatch(toggleShuffle())} />
      <ChangeSongBtn as={RiSkipBackFill}  onClick={() => changeTrack('previous')} />      
      <PlayBtn as={audioTag.current && audioTag.current.paused ? RiPlayFill : RiPauseFill} selected={audioTag.current && !audioTag.current.paused} onClick={togglePlayPause} />
      <ChangeSongBtn as={RiSkipForwardFill} onClick={() => changeTrack('next')} />
      <RepeatBtn as={RiRepeat2Fill} selected={repeat} onClick={() => dispatch(toggleRepeat())} />
    </MainControl>
  );
};

export default Controls;
