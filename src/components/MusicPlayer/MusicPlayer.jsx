import { RiVolumeUpFill } from 'react-icons/ri';
import { PlayerMain, ProgressBar, MusicBar, MusicControls, MusicVolume, CurrentSongMbl, ProgressTime, SongTimer } from '../../ui/index';
import Controls from './Controls/index';


const MusicPlayer = () => {
  return (
    <PlayerMain>
      <MusicControls>
        <Controls />
      </MusicControls>
      <MusicBar className='progress_bar'>
      <ProgressTime>
        <SongTimer>00:00</SongTimer>
        <SongTimer>00:00</SongTimer>
      </ProgressTime>
        <ProgressBar type="range" />
      </MusicBar>
      <MusicVolume className='volume__bar'>
        <RiVolumeUpFill />
        <input type="range" name="" id="" />
      </MusicVolume>
    </PlayerMain>
  );
};

export default MusicPlayer;
