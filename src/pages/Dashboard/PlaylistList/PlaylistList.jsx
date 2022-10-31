import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper';
import { song_item_test } from '../../../dbtest';
import { PlaylistDash } from '../../../ui';
import PlaylistItem from '../PlaylistItem';
import "swiper/css";
import "swiper/css/bundle";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd/'
import { useGetPlaylistsQuery } from '../../../features/api/apiSlice';


const PlaylistList = () => {
  const { data: playlists, isLoading, isSuccess, isError: error } = useGetPlaylistsQuery();


  let content;
  if (isLoading) {
    content = <div>Loading genres...</div>
  } else if (isSuccess) {
    console.log(playlists)
    content = playlists.map(({ id, tracks, title }) => {
      return (
        <SwiperSlide key={id} virtualIndex={id}>
          <PlaylistItem tracks={tracks} title={title} />
        </SwiperSlide>
      )
    })
  }
  
// const content = 

  return (
    <main>
      <Swiper
      modules={[ Navigation, Pagination, Virtual]}
      navigation
      spaceBetween={-300}
      slidesPerView={5}
      virtual
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-navigation-size": "1.5rem"
        }}
      >
        <PlaylistDash>
          {content}
        </PlaylistDash>
      </Swiper>
          
    </main>
  )
}

export default PlaylistList