import axios from 'axios';
import { useEffect, useState } from 'react'

// import CloseImg from '../../../../Assets/icon/u_plus.svg'
import { PROPERTY_API } from '../../../../Utilities/APIs/APIs'

import './MIPreviewer.css'

function MIPreviewer({ index, imagePreview, propertyImages, setPropertyImages, propertyImagesInfos, setPropertyImagesInfos }) {

    const [tags, setTags] = useState(null);
    const [hoverd, setHoverd] = useState('');

    useEffect(() => {
        async function getTags() {
            const { data } = await axios.get(PROPERTY_API + 'propertyImageTags/')
            setTags(data)
        }
        getTags()
    }, [])

    function attachTag(value) {
        const newArray = propertyImagesInfos.map(propertyImagesInfo => {
            if (index === (propertyImagesInfo.precedence - 1)) {
                return {
                    ...propertyImagesInfo,
                    tag: value
                }
            } else {
                return propertyImagesInfo
            }
        })
        setPropertyImagesInfos(newArray)
    }


    return (

        <div className="mi_perviewer"

        >
            <img className='mi_perv_thumb' src={imagePreview} alt="thumb"
                onMouseEnter={() => setHoverd('show')}
            />
            <div
                className={`mi_select_tags ${((propertyImagesInfos[index].tag === '') || (hoverd === 'show')) ? 'show' : ''}`}
                onMouseLeave={() => setHoverd('')}
            >
                {/* <img className='mi_close' src={CloseImg} alt="icon" /> */}
                <div className='mi_select_box'  >
                    <select
                        className='mi_form_select'
                        onChange={e => attachTag(e.target.value)}
                        value={propertyImagesInfos[index].tag}
                    >
                        <option value="0" hidden>Select Tags</option>
                        {tags?.map(tag => (

                            <option
                                key={tag._id}
                                value={tag._id}
                            >
                                {tag.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default MIPreviewer