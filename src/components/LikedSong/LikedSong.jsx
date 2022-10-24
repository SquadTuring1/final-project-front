import { RiRestartLine, RiStarFill, RiStarLine } from 'react-icons/ri'
import { useState } from 'react';
import { getUserId } from '../../features/auth/authSlice'
import { useSelector } from 'react-redux';
import { useLikeASongMutation, useDeleteLikeASongMutation } from '../../features/api/apiSlice';

export default function LikedSong({ songId}) {

  const [ isLiked, setIsLiked] = useState()
  const userId = useSelector(getUserId);

  const [ likeASong, { isLoading } ] = useLikeASongMutation();
  const [ deleteASong ] = useDeleteLikeASongMutation()

  const toggleLiked = () => {
    setIsLiked(current => !isLiked)
  }

  const canSave = [ songId, userId, !isLiked ].every(Boolean) && !isLoading;

  const handleClick = async () => {
    toggleLiked()
    const songObj = { songId, userId }
    if (canSave) {
      console.log(songObj)
      try{
        await likeASong(songObj).unwrap()
      } catch (error){
        console.error("Failed to load liked song!")
      }
    } 
    else{
      console.log("Deleting liked song!")
      try{
        await deleteASong(songObj).unwrap()
      } catch(error){
        console.error("Failed to delete liked song!")
      }
    }
  }  
  
  return (
    <>    
    <div onClick={handleClick}>{isLiked ? <RiStarFill/> : <RiStarLine/>}</div>
    </>
  )
}
