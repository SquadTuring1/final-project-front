import React from 'react'
// import "swiper/css";
// import 'swiper/css/a11y';
// import "swiper/css/bundle";
// import "swiper/css/grid";
// import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGetGenresQuery } from '../../../features/api/apiSlice'
import { CoverCategoryMain, CoverPlaylistMain, CoverCategoryImg, CategorySwiper, CategorySwiperItem } from '../../../ui/index'
// import { A11y, Navigation, Pagination, Scrollbar, Virtual, Grid } from "swiper";
import { Grid, Pagination, Navigation, Virtual, Scrollbar, A11y } from "swiper";



const CategoryItem = () => {
  const { data: genres, isLoading, isSuccess, isError, error } = useGetGenresQuery();

  let content;
  if (isLoading) {
    content = <p>Loading genres...</p>
  } else if (isSuccess) {
    genres.map(gen =>console.log(gen))
    content =     
      genres.map(genre =>  
        <CategorySwiperItem key={genre._id} virtualIndex={genre._id}>
            <CoverCategoryImg  src={genre.imgUrl} />
       </CategorySwiperItem>
      )
  }

  return (
    <>
    <Swiper
      modules={[ Navigation, Pagination, Virtual]}
      navigation
      spaceBetween={-300}
      slidesPerView={5}
      virtual
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-navigation-size": "1.5rem"
      }}>

        
        <CategorySwiper>{content}</CategorySwiper>
    </Swiper>
    
    </>
  )
}

export default CategoryItem