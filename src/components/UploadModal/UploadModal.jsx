import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CenterArticle, Input, TitleSign, MainModal } from '../../ui/index'




const UploadModal = () => {
  return (
      <form>
        <CenterArticle>
          <TitleSign uploadModal>Upload your song</TitleSign>
          <label htmlFor="title">Title</label>
          <Input type="text" name="title" id="title" />
          <label htmlFor="artist">Artist</label>
          <Input type="text" name="artist" id="artist" />
          <label htmlFor="album">Album</label>
          <Input type="text" name="album" id="album" />
          <label htmlFor="category">Category</label>
          <Input type="text" name="category" id="category" />
          <input type="file" name="cover" id="cover" />
          <input type="file" name="song" id="song" />
          {/* <button type="submit">Upload song</button> */}
        </CenterArticle>
      </form>
  )
}

export default UploadModal