import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useUpdateAvatarMutation } from '../../features/api/apiSlice';
import { getAuthUser } from '../../features/auth/authSlice';
import { Button } from '../../ui';

const AvatarUpload = () => {
  const [avatarFile, setAvatarFile] = useState('');
  const [avatarPreviewImg, setAvatarPreviewIng] = useState('');
  const { uid } = useSelector(getAuthUser);
  const [updateAvatar] = useUpdateAvatarMutation();
  const formRef = useRef();

  const handleChange = (e) => {
    setAvatarFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('image', avatarFile);
    data.append('uid', uid);
    updateAvatar(data);
    formRef.current.reset();
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" ref={formRef}>
      <label htmlFor="avatar">avatar</label>
      <div className="avatar-input">
        <input type="file" required onChange={handleChange} />
        <img
          src={avatarPreviewImg}
          style={{ width: '50px', height: '50px' }}
          alt="avatar-preview"
        />
      </div>
      <Button type="submit">Update Avatar</Button>
    </form>
  );
};

export default AvatarUpload;
