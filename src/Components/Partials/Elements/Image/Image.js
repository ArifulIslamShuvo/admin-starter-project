import { IMAGE_URL } from "../../../../Utilities/APIs/APIs"

function Image({ imgLink, imgAlt }) {
  return (
    imgLink &&
    <img
      src={IMAGE_URL + imgLink}
      alt={imgAlt}
    />
  )
}

export default Image