import styled from 'styled-components'
import { useRef } from 'react'
import { Button, Input } from '../../ui';



const FileUploader = () => {

  const hiddenFileInput = useRef(null);


  const handleClick = (e) => {
    hiddenFileInput.current.click();
  }



  const handleChange = (e) => {
    const fileUploaded = e.target.files[0];
    props.handleFile(fileUploaded);
  }



  return (
    <>
      <Button onClick={(e) => handleClick()}>
        Upload Avatar
      </Button>
      <Input className="invisible" type="file" ref={hiddenFileInput} onChange={handleChange}  />
    </>
  )
}

export default FileUploader