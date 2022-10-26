import React from 'react'
import { useGetGenresQuery } from '../../../features/api/apiSlice'
import { CoverCategoryMain, CoverSong } from '../../../ui/index'


const CategoryItem = () => {
  const { data: genres, isLoading, isSuccess, isError, error } = useGetGenresQuery();

  let content;
  if (isLoading) {
    content = <p>Loading genres...</p>
  } else if (isSuccess) {
    content =     
      genres.map(genre =>  
          <img key={genre._id} src={genre.imgUrl}></img> 
      )
  }

  return (
    <>
    <CoverCategoryMain>
    {content}
    </CoverCategoryMain>
    
    </>
  )
}

export default CategoryItem