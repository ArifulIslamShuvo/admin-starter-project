// import ImgThumb from '../../../../Assets/icon/u_image-upload.svg'

import './MIUploader.css'

function MIUploader({ imagePreviews, setImagePreviews, propertyImages, setPropertyImages, propertyImagesInfos, setPropertyImagesInfos }) {

  const handleChange = (e) => {
    setImagePreviews([...imagePreviews, URL.createObjectURL(e.target.files[0])])
    setPropertyImages([...propertyImages, e.target.files[0]])
    setPropertyImagesInfos([...propertyImagesInfos, {
      tag: '',
      precedence: propertyImagesInfos.length + 1
    }])
  }

  return (
    <div className="mi_uploader">
      <label htmlFor="miUpload" className='miu_label'>
        {/* <img src={ImgThumb} alt="icon" /> */}
        <span>Add Image</span>
      </label>
      <input
        className='miu_input'
        type="file"
        id='miUpload'
        onChange={handleChange}
      />
    </div>
  )
}

export default MIUploader