import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useUpdateAvatarMutation } from '../../features/api/apiSlice';
import { getAuthUser, userSignedIn } from '../../features/auth/authSlice';
import { Button, CenterProfile } from '../../ui';

const AvatarUpload = () => {
  const [avatarFile, setAvatarFile] = useState('');
  const [avatarPreviewImg, setAvatarPreviewIng] = useState('');
  const { uid } = useSelector(getAuthUser);
  const [updateAvatar, { data: res, isLoading, isSuccess }] =
    useUpdateAvatarMutation();
  const formRef = useRef();
  const dispatch = useDispatch();
  const authUser = useSelector(getAuthUser);
  const handleChange = (e) => {
    setAvatarFile(e.target.files[0]);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(userSignedIn({ ...authUser, avatar: res[0].avatar }));
      console.log(res);
    }
  }, [res]);

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (avatarFile) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setAvatarPreviewIng(result);
        }
      };
      fileReader.readAsDataURL(avatarFile);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [avatarFile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('entered submit');
    const data = new FormData();
    data.append('image', avatarFile);
    data.append('uid', uid);
    updateAvatar(data);

    formRef.current.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data" ref={formRef}>
        <CenterProfile className="avatar__upload--form">
          <label style={{ color: '#fff' }} htmlFor="avatar">
            avatar
          </label>
          <div className="avatar-input">
            <input
              type="file"
              required
              onChange={handleChange}
              accept="image/*"
            />
            <img
              src={avatarPreviewImg}
              style={{ width: '50px', height: '50px' }}
              alt="avatar-preview"
            />
          </div>
          <Button className="profile__upload--btn" type="submit">
            Update Avatar
          </Button>
        </CenterProfile>
      </form>
    </>
  );
};

export default AvatarUpload;
