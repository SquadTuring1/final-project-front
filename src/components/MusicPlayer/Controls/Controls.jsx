import React from 'react';
import { MainControl, ShuffleBtn, RepeatBtn,PlayBtn } from '../../../ui/index';
import { RiRepeat2Fill, RiShuffleFill, RiSkipBackFill, RiSkipForwardFill, RiPlayFill } from 'react-icons/ri';


import { useDispatch, useSelector } from 'react-redux';
import { playPreviousSong, playNextSong, toggleShuffle, toggleRepeat, togglePlaying } from '../../../features/songs/songsSlice';


const Controls = () => {
  const dispatch = useDispatch();
  const playPrevious = useSelector(playPreviousSong)
  const playNext = useSelector(playNextSong)
  const shuffle = useSelector(toggleShuffle);
  const repeat = useSelector(toggleRepeat);
  const play = useSelector(togglePlaying)




  return (
    <MainControl>
      <ShuffleBtn as={RiShuffleFill} onClick={() => dispatch(shuffle)} />
      <RiSkipBackFill onClick={() => dispatch(playPrevious)} />
      <PlayBtn as={RiPlayFill} onClick={() => dispatch(play)} />
      <RiSkipForwardFill onClick={() => dispatch(playNext)} />
      <RepeatBtn as={RiRepeat2Fill} onClick={() => dispatch(repeat)} />
    </MainControl>
  );
};

export default Controls;
