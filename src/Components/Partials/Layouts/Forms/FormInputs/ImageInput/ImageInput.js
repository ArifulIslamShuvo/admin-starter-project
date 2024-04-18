import { useState } from 'react'
import UploadThumb from '../../../../../../Assets/img_upload.svg'
import {  IMAGE_URL } from '../../../../../../Utilities/APIs/APIs'

import './ImageInput.css'

function ImageInput({ fieldId, state, setState, allowCreateImage, allowUpdateImage, children }) {
  //for image preview
  const [imagePreview, setImagePreview] = useState({ preview: '' })
  const handleChange = (e) => {
    setState(e.target.files[0])
    setImagePreview({
      preview: URL.createObjectURL(e.target.files[0])
    })
  }

  return (
    <>
      <label className='upload_file_wrapper' htmlFor={`fileInput${fieldId}`}>
        <span className='input_field_label'>{children}</span>
        <div className="preview_image">
          {allowUpdateImage && state &&
            <img src={imagePreview.preview ? imagePreview.preview : IMAGE_URL + state} alt="default thumb" />
          }


          {allowCreateImage &&
            <img src={imagePreview.preview ? imagePreview.preview : UploadThumb} alt="default thumb" />
          }
        </div>
      </label>

      <input
        id={`fileInput${fieldId}`}
        type='file'
        className='file_upload_input'
        onChange={handleChange}
      />
    </>
  )
}

export default ImageInput