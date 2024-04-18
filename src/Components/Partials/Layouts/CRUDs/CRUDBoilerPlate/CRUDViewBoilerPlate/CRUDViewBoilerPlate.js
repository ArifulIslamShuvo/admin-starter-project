import axios from 'axios'
import { useState, useEffect } from 'react'
import {  IMAGE_URL } from '../../../../../../Utilities/APIs/APIs';

import './CRUDViewBoilerPlate.css'

function CRUDViewBoilerPlate({

  //common props
  api, targetID, employee, screenTopicSingular,
  // field props
  hasName, hasDescription, hasImage, hasPrecedence, hasLink, hasAmount, hasEmail,
  hasText, textDBField, textName,
  hasLongText, longTextDBField, longTextName,
  hasBoolean, booleanName, booleanDBField,
  // select props
  hasSelect, selectApi, selectType, selectDBField, selectName,
  // secondSelect props
  hasSecondSelect, secondSelectItems, secondSelectName, secondSelectDBField

}) {

  const [item, setItem] = useState(null);
  const [selectItems, setSelectItems] = useState(null)

  useEffect(() => {

    const config = {
      headers: {
        Authorization: `Bearer ${employee.token}`
      }
    }

    async function fetchAndSetItem() {

      const { data } = await axios.get(api, config)

      const itemToView = data.find(element => element._id === targetID)

      setItem(itemToView);
    }

    fetchAndSetItem()

    if (hasSelect) {
      async function fetchAndSetSelectItems() {
        const { data } = await axios.get(selectApi, config)
        setSelectItems(data)
      }

      fetchAndSetSelectItems()
    }

  }, [api, selectApi, targetID, employee.token, hasSelect])

  return (

    <div className='crud_view_content'>

      {
        hasSelect && item &&
        <>
          <h1>{selectType === 'parent-child' ? selectName : screenTopicSingular}</h1>
          <p>{selectItems?.find(sItem => sItem._id === item[selectDBField])?.name}</p>
        </>
      }

      {
        hasSecondSelect && item &&
        <>
          <h1>{secondSelectName}</h1>
          <p>{secondSelectItems?.find(sItem => sItem._id === item[secondSelectDBField])?.name}</p>
        </>
      }
      {
        hasText && item &&
        <>
          <h1>{textName}</h1>
          <p>{item[textDBField]}</p>
        </>
      }
      {
        hasLongText && item &&
        <>
          <h1>{longTextName}</h1>
          <p>{item[longTextDBField]}</p>
        </>
      }
      {
        hasName &&
        <>
          <h1>{screenTopicSingular}</h1>
          <p>{item?.name}</p>
        </>
      }

      {
        hasAmount &&
        <>
          <h1>Amount</h1>
          <p>{item?.amount}</p>
        </>
      }

      {
        hasEmail &&
        <>
          <h1>Amount</h1>
          <p>{item?.email}</p>
        </>
      }

      {
        hasDescription &&
        <>
          <h1>Description</h1>
          <p>{item?.description}</p>
        </>
      }

      {
        hasImage && item &&
        <>
          <h1>Image</h1>
          <img
            src={IMAGE_URL + item.image}
            alt={item.name ? item.name : 'image'}
          />
        </>
      }

      {
        hasLink && item &&
        <>
          <h1>Link</h1>
          <p>{item.link}</p>
        </>
      }
      {
        hasBoolean && item &&
        <>
          <h1>{booleanName}</h1>
          <p>{item[booleanDBField] === true ? 'TRUE' : 'FALSE'}</p>
        </>
      }

      {
        hasPrecedence &&
        <>
          <h1>Precedence</h1>
          <p>{item?.precedence}</p>
        </>
      }

    </div>

  )
}

export default CRUDViewBoilerPlate