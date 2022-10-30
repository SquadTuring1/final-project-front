import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper';
import { song_item_test } from '../../../dbtest';
import { PlaylistDash } from '../../../ui';
import PlaylistItem from '../PlaylistItem';
import "swiper/css";
import "swiper/css/bundle";


const PlaylistList = () => {
  
const content = song_item_test.map(({ id, tracks, title }) => {
  return (
    <SwiperSlide key={id} virtualIndex={id}>
      <PlaylistItem tracks={tracks} title={title} />
    </SwiperSlide>
  )
})

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