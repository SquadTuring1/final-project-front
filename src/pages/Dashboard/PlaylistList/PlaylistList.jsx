import { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { song_item_test } from '../../../dbtest';
import { PlaylistDash } from '../../../ui';
import PlaylistItem from '../PlaylistItem';
import "swiper/css";
import "swiper/css/bundle";



const PlaylistList = () => {
  return (
    <main>
      <Swiper
        modules={[ Navigation, Pagination, Scrollbar, A11y, Virtual]}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={0}
        slidesPerView={4}
        virtual
        height={"100%"}
        loop={true}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          "--swiper-navigation-size": "1.5rem"
        }}
      >
        <PlaylistDash>
          {song_item_test.map(({id, tracks, title}) => {
            return (
              <SwiperSlide virtualIndex={id}>
                <PlaylistItem key={id} tracks={tracks} title={title} />
              </SwiperSlide>
            )
          })}
        </PlaylistDash>
      </Swiper>
          
    </main>
  )
}

export default PlaylistList