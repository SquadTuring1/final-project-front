import React, { useState } from 'react';
import axios from 'axios';

const FormCloudinary2 = () => {
  const [song, setSong] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [title, setTitle] = useState('');

  const handleSong = (e) => {
    const uploadedFile = e.target.files[0];
    setSong(uploadedFile);
  };

  const hanldeThumbnail = (e) => {
    const uploadThummail = e.target.files[0];
    setThumbnail(uploadThummail);
  };

  // const handleFile = (e) => {
  //   const { name, value } = e.target;
  //   setFile((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };
  const onClickHandler = (e) => {
    e.preventDefault();

    let data = new FormData();
    data.append('video', song);
    data.append('image', thumbnail);
    data.append('title', title);

    const config = {
      headers: { 'content-type': 'multipart/form-data' },
    };

    axios
      .post('http://localhost:4000/cloudinary3', data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form action="POST" encType="multipart/form-data">
        <label htmlFor="song" style={{ color: 'white' }}>
          pick a song
        </label>
        <input type="file" name="song" onChange={handleSong} />
        <label htmlFor="thumbnail" style={{ color: 'white' }}>
          pick a thumbnail
        </label>
        <input type="file" name="thumbnail" onChange={hanldeThumbnail} />
        <label htmlFor="title" style={{ color: 'white' }}>
          title
        </label>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" onClick={onClickHandler}>
          send
        </button>
      </form>
    </div>
  );
};

export default FormCloudinary2;
