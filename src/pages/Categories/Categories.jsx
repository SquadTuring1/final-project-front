import React from 'react';
import {
  CoverCategoryMain,
  PlaylistColumn,
  PlaylistColumnSongs,
  PlaylistContainer,
  PlaylistSong,
} from '../../ui/index';
import CategoryItem from '../Dashboard/CategoryItem/index';
import SongItem from '../Dashboard/SongItem';
import Playlist from '../Playlist/index';
import SongList from '../Dashboard/SongList/index'



const Categories = () => {
  return (
    <PlaylistContainer className="category__container">
      <div>
        <CategoryItem />
      </div>
      <PlaylistColumnSongs>

      </PlaylistColumnSongs>
    </PlaylistContainer>
  );
};

export default Categories;
