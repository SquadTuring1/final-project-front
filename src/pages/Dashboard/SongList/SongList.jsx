import React from 'react';
import { song_item_test } from '../../../dbtest';
import { SongsDash, SongsH2 } from '../../../ui';
import SongItem from '../SongItem';
import { useGetSongsQuery } from '../../../features/api/apiSlice'



const SongList = () => {
  const { data: songs, isLoading, isSuccess, isError, error} = useGetSongsQuery()


  let content;
  if (isLoading){
    content = <p>Loading...</p>
  } else if (isSuccess){
    console.log('success')
    content = songs.map(({imageUrl, title, _id,}) => {
        return (
          <SongItem key={_id} title={title} cover={imageUrl} />   // TODO add artist={artist}
        )
    })
  } else if (isError){
    content = <p>Error</p>
  }


  return (
    <SongsDash>
      {'Songs'}
      {content}
    </SongsDash>
  );
};

export default SongList;
