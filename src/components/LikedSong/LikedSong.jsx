import { RiRestartLine, RiStarFill, RiStarLine } from 'react-icons/ri'
import { useEffect, useState } from 'react';
import { getAuthUser, getUserId } from '../../features/auth/authSlice'
import { useSelector } from 'react-redux';
import { useLikeASongMutation, useDeleteLikeASongMutation } from '../../features/api/apiSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import { nanoid } from '@reduxjs/toolkit';
import auth from '../../utils/firebase/firebaseConfig.js';

export default function LikedSong({ songId, likedBY }) {  
  const userId = useSelector(getUserId)
  const [ isLiked, setIsLiked] = useState(likedBY?.some(user => user._id === userId))

  const [ likeASong, { isLoading } ] = useLikeASongMutation();
  const [ deleteASong, { isLoading: deleteLoading } ] = useDeleteLikeASongMutation()

  const toggleLiked = () => {
    setIsLiked(current => !isLiked)
  }


  const canSave = [ songId, userId, !isLiked ].every(Boolean) && !isLoading;
  const canDelete = [ songId, userId, isLiked ].every(Boolean) && !deleteLoading;

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
        !isLiked && toast.warning('Remember likes are not saved when not logged in', { toastId: nanoid() })
        return;
      }
      if (canDelete) {
        try{
         await deleteASong(songObj).unwrap()
         console.log('Song like removed')
        } catch(error){
          console.error("Failed to delete liked song!")
        }
      }
      
    }
  }  
  
  return (
    <>    
    <div onClick={handleClick}>{isLiked ? <RiStarFill/> : <RiStarLine/>}</div>
    </>
  )
}
