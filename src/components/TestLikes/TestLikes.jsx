import React from 'react'
import { RiStarFill, RiStarLine } from 'react-icons/ri'
import { useState } from 'react';
import { getUserId } from '../../features/auth/authSlice'
import { useSelector } from 'react-redux';
import { useLikeASongMutation } from '../../features/api/apiSlice';



const TestLikes = ({ artist, title, cover, songId}) => {
  
  const [ liked, setLiked ] = useState();
  const userId = useSelector(getUserId);
  const [ likeASong, { isLoading } ] = useLikeASongMutation();

  const toggleLiked = () => {
    setLiked(current => !liked)
  }

  const canSave = [ songId, userId, !liked].every(Boolean) && !isLoading;

  const handleClick = async () => {    
    toggleLiked();
    const songObj = { songId, userId }; 

    if (canSave) {
      console.log(songObj)
      try {
        await likeASong({...songObj}).unwrap();
      } catch (error) {
        console.error('Failed to like song')
      }
    }
  }

  return (
    <div onClick={() => handleClick()}>{!liked ? <RiStarLine/> : <RiStarFill/>}</div>
  )
}

export default TestLikes