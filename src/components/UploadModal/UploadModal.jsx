import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useAddSongMutation } from '../../features/api/apiSlice';
import {
  CenterArticle,
  Input,
  TitleSign,
  MainModal,
  UploadButton,
  Button,
} from '../../ui/index';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { nanoid } from '@reduxjs/toolkit';
import { getUserId } from '../../features/auth/authSlice';
import { useSelector } from 'react-redux';
import SelectOptions from './SelectOptions';

const initialFieldsState = {
  songTitle: '',
  artist: '',
  thumbnailFile: '',
  songFile: '',
  genre: '',
};

const UploadModal = () => {
  const [addSong, { isLoading, isSuccess, isError }] = useAddSongMutation();
  const [formFields, setFormFields] = useState(initialFieldsState);
  const userId = useSelector(getUserId);
  const formRef = useRef();

  const handleOnChange = (e) => {
    let { name, value, files } = e.target;
    files
      ? setFormFields((prevState) => ({ ...prevState, [name]: files[0] }))
      : setFormFields((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const { songTitle, artist, thumbnailFile, songFile, genre } = formFields;

    const song = new FormData();
    song.append('video', songFile);
    song.append('image', thumbnailFile);
    song.append('title', songTitle);
    song.append('artist', artist);
    song.append('userId', userId);
    song.append('genre', genre || 'Pop');

    addSong(song);
    formRef.current.reset();
    setFormFields(initialFieldsState);

    if (isSuccess) {
      toast.success('Song was uploaded successfully', { toastId: nanoid() });
    }
    isError ?? toast.error('Something went wrong', { toastId: nanoid() });
  };

  return (
    <>
      <form onSubmit={handleClick} encType="multipart/form-data" ref={formRef}>
        <CenterArticle>
          <TitleSign uploadModal>Upload your song</TitleSign>
          <label htmlFor="title">Title</label>
          <Input
            type="text"
            name="songTitle"
            id="songTitle"
            placeholder="Song title"
            onChange={handleOnChange}
            required
          />
          <label htmlFor="artist">Artist</label>
          <Input
            type="text"
            name="artist"
            id="artist"
            placeholder="Artist name"
            onChange={handleOnChange}
          />
          <label htmlFor="genre">Category</label>
          <select onChange={handleOnChange} name="genre" id="genre">
            <SelectOptions />
          </select>

          <input
            type="file"
            name="thumbnailFile"
            id="thumbnailFile"
            accept="image/png, image/jpeg, image/jpg"
            required
            onChange={handleOnChange}
          />
          <input
            type="file"
            name="songFile"
            id="songFile"
            accept=".mp3,audio/*"
            required
            onChange={handleOnChange}
          />
          <Button>Upload song</Button>
        </CenterArticle>
      </form>
      <ToastContainer />
    </>
  );
};

export default UploadModal;
