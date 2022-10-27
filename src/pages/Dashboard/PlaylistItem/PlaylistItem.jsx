import React from 'react';
import {
  CoverPlaylistMain,
  PlaylistTitle,
  PlaylistInfo,
} from '../../../ui/index';

const PlaylistItem = ({ tracks, title }) => {
  return (
    <CoverPlaylistMain>
      <PlaylistTitle>{title}</PlaylistTitle>
      <PlaylistInfo>{tracks}</PlaylistInfo>
      {/* {console.log(title)} */}
    </CoverPlaylistMain>
  );
};

export default PlaylistItem;