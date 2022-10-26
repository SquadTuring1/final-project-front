import React from 'react'
import { useGetGenresQuery } from '../../../features/api/apiSlice'
import { CoverCategoryMain, CoverPlaylistMain } from '../../../ui/index'



const CategoryItem = () => {
  const { data: genres, isLoading, isSuccess, isError, error } = useGetGenresQuery();



  let content;
  if (isLoading) {
    content = <p>Loading genres...</p>
  } else if (isSuccess) {
    content =     
      genres.map(genre =>  
        <div key={genre._id}>
          <img src={genre.imgUrl} /> 
        </div>
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