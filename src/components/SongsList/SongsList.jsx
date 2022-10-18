import { useGetSongsQuery } from "../../features/api/apiSlice"

function SongsList() {
  const { data: songs, isLoading, isSuccess, isError, error} = useGetSongsQuery()
//   console.log([...songs])
  

  let content;
  if (isLoading){
    content = <p>Loading...</p>
  } else if (isSuccess){
    console.log('success')
    content = songs.map(song => {   
        return (             
            <div key={song._id}>
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
    <h1>SongsList</h1><br></br>
    <div>{content}</div>
    </>

  )
}

export default SongsList
