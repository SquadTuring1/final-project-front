import React from 'react';
import { MainControl, ShuffleBtn, RepeatBtn,PlayBtn } from '../../../ui/index';
import {
  RiRepeat2Fill,
  RiShuffleFill,
  RiSkipBackFill,
  RiSkipForwardFill,
  RiPlayFill,
} from 'react-icons/ri';

const Controls = () => {
  return (
    <MainControl>
      <ShuffleBtn as={RiShuffleFill} />
      <RiSkipBackFill />
      <PlayBtn as={RiPlayFill} />
      <RiSkipForwardFill />
      <RepeatBtn as={RiRepeat2Fill} />
    </MainControl>
  );
};

export default Controls;
