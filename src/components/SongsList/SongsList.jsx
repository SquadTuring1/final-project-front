import { useGetSongsQuery } from "../../features/api/apiSlice"
import { nanoid } from '@reduxjs/toolkit' 

function SongsList() {
  const { data: songs, isLoading, isSuccess, isError, error} = useGetSongsQuery()
//   console.log([...songs])
  

  let content;
  if (isLoading){
    content = <p>Loading...</p>
  } else if (isSuccess){
    console.log('success')
    const songsArray = Object.entries(songs)
    console.log(songsArray)
    content = songsArray[0][1].map(song => {   
        console.log(song.title)
        return (
             
            <div key={nanoid()}>
                {/* <a href={song.imageUrl}></a> */}
                <p>{song.title}</p>
            </div>    
        )    
    })
  } else if (isError){
    content = <p>Error</p>
  }
  return (
    <>
    <div>SongsList</div>
    <div>{content}</div>
    </>
    
  )
}

export default SongsList
