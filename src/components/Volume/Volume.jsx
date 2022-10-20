import React from 'react';
import { RiVolumeUpFill } from 'react-icons/ri';
import { MusicVolume } from '../../ui/index';


const Volume = () => {
  return (
    <MusicVolume className="volume__bar">
      <RiVolumeUpFill />
      <input type="range" name="" id="" />
    </MusicVolume>
  );
};

export default Volume;
