import styled from 'styled-components';
import { CurrentSong } from './SidebarMain';

export const CurrentSongMbl = styled(CurrentSong)`
  grid-area: currentsong;
  /* border: 1px dotted #fff; */
`

export const MusicControls = styled.article `
  grid-area: controls;
  /* border: 1px dotted #fff; */

`
export const MusicBar = styled.article `
  grid-area: bar;
  /* border: 1px dotted #fff; */
`

export const ProgressTime = styled.article`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 70%;
`

export const MusicVolume = styled.article `
  display:none;
  color: #fff;
  grid-area: volume;
  /* border: 1px dotted #fff; */

  @media (min-width: 960px) {
    display: block;


    &.volume__bar {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &.progress_bar {
      display: flex;
      justify-content: center;
    }    
  }
`

export const PlayerMain = styled.main`

  height: 100%;
  display: grid;
  grid:
  '. controls' 80%
  'bar bar' auto /
   70% auto;

  &.volume__bar{
    display:none;
  }
  background-color: #040810;


  @media (min-width: 960px) {
    grid:
    'controls volume' 50%
    'bar      volume' auto/
    auto  14.3rem;
    height: 100%;
  }
`