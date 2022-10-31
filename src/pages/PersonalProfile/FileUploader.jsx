import styled from 'styled-components';
import { useRef } from 'react';
import { Button, Input } from '../../ui';

const FileUploader = ({ buttonName }) => {
  const hiddenFileInput = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };

  const handleChange = (e) => {
    const fileUploaded = e.target.files[0];
    // prop.handleFile(fileUploaded);
    // console.log(prop.handleFile);
  };

  return (
    <>
      <Button onClick={() => handleClick()}>{buttonName}</Button>
      <Input
        className="invisible"
        accept="image/png,image/jpeg"
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
      />
    </>
  );
};

export default FileUploader;
