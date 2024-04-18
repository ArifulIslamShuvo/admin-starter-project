import Image from '../../../../../../../Elements/Image/Image'
import './ImageCell.css'

function ImageCell({imgSrc, imgAlt}) {
  return (
    <td>
      <Image 
      imgLink={imgSrc}
      imgAlt={imgAlt}
      />
    </td>
  )
}

export default ImageCell