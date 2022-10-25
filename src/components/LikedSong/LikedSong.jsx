import { RiRestartLine, RiStarFill, RiStarLine } from 'react-icons/ri'
import { useEffect, useState } from 'react';
import { getAuthUser, getUserId } from '../../features/auth/authSlice'
import { useSelector } from 'react-redux';
import { useLikeASongMutation, useDeleteLikeASongMutation } from '../../features/api/apiSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import { nanoid } from '@reduxjs/toolkit';
import auth from '../../utils/firebase/firebaseConfig.js';

export default function LikedSong({ songId, likedBY, likedByCurrentUser }) {
  

  const userId = useSelector(getUserId)
  const [ isLiked, setIsLiked] = useState(likedByCurrentUser)
  
  

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
    } else {
      if (!userId) {
        toast.warning('Likes are not saved when user is not logged in', { toastId: nanoid() })
        return;
      }
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
    <div onClick={handleClick}>{likedByCurrentUser ? <RiStarFill/> : <RiStarLine/>}</div>
    </>
  )
}
