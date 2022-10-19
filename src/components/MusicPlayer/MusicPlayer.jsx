import { PlayerMain, ProgressBar, MusicBar, MusicControls, ProgressTime, SongTimer } from '../../ui/index';
import Volume from '../Volume/index';
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
      <Volume />
    </PlayerMain>
  );
};

export default MusicPlayer;
