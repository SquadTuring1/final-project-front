import React from 'react'
import { useGetGenresQuery } from '../../../features/api/apiSlice'
import { CoverCategoryMain } from '../../../ui/index'


const CategoryItem = () => {

  const { data: genres, isLoading, isSuccess, isError, error } = useGetGenresQuery();

  let content;
  if (isLoading) {
    content = <p>Loading genres...</p>
  } else if (isSuccess) {
    console.log(genres)
    content =     
      genres.map(genre => 
        <div>
          <img src={genre.imgUrl}></img>
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