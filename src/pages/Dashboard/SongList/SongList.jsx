import React from 'react';
import { song_item_test } from '../../../dbtest';
import { SongsDash, SongsH2 } from '../../../ui';
import SongItem from '../SongItem';
SongsH2


const SongList = () => {
  return (
    <SongsDash>
      {' '}
      {song_item_test.map(({ id, artist, title, cover }) => {
        return (
          <SongItem key={id} artist={artist} title={title} cover={cover} />
        );
      })}
    </SongsDash>
  );
};

export default SongList;
