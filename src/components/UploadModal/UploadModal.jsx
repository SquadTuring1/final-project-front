import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAddSongMutation } from '../../features/api/apiSlice';
import { CenterArticle, Input, TitleSign, MainModal } from '../../ui/index';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { nanoid } from '@reduxjs/toolkit';
import { getAuthUser, getUserId } from '../../features/auth/authSlice';
import { useSelector } from 'react-redux';

const UploadModal = () => {
  const [addSong, { isLoading, isSuccess, isError }] = useAddSongMutation();
  const [formFields, setFormFields] = useState({
    songTitle: '',
    artist: '',
    thumbnailFile: '',
    songFile: '',
    category: '',
  });
  const userId = useSelector(getUserId);

  useEffect(() => {}, [formFields]);

  const handleOnChange = (e) => {
    const { name, value, files } = e.target;
    files
      ? setFormFields((prevState) => ({ ...prevState, [name]: files[0] }))
      : setFormFields((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const { songTitle, artist, thumbnailFile, songFile } = formFields;

    const song = new FormData();
    song.append('video', songFile);
    song.append('image', thumbnailFile);
    song.append('title', songTitle);
    song.append('artist', artist);
    song.append('userId', userId);

    addSong(song);

    isSuccess ??
      toast.success('Song was uploaded successfully', { toastId: nanoid() });
    isError ?? toast.error('Something went wrong', { toastId: nanoid() });

    console.log(isError);
  };

  return (
    <form onSubmit={handleClick} encType="multipart/form-data">
      <CenterArticle>
        <TitleSign uploadModal>Upload your song</TitleSign>
        <label htmlFor="title">Title</label>
        <Input
          type="text"
          name="songTitle"
          id="songTitle"
          placeholder="Song title"
          onChange={handleOnChange}
        />
        <label htmlFor="artist">Artist</label>
        <Input
          type="text"
          name="artist"
          id="artist"
          placeholder="Artist name"
          onChange={handleOnChange}
        />
        {/* <label htmlFor="album">Album</label>
        <Input type="text" name="album" id="album" /> */}
        <label htmlFor="category">Category</label>
        <select name="category" id="category">
          <option value="pop">Pop</option>
          <option value="jazz">Jazz</option>
        </select>

        <input
          type="file"
          name="thumbnailFile"
          id="thumbnailFile"
          accept="image/png, image/jpeg, image/jpg"
          onChange={handleOnChange}
        />
        <input
          type="file"
          name="songFile"
          id="songFile"
          accept=".mp3,audio/*"
          onChange={handleOnChange}
        />
        <button type="submit">Upload song</button>
      </CenterArticle>
    </form>
  );
};

export default UploadModal;
