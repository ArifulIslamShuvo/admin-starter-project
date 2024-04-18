import { useEffect, useState } from 'react';
import axios from 'axios';

import './CRUDDeleteBoilerPlate.css'

function CRUDDeleteBoilerPlate({

  // common props
  api, triggerFetch, targetID, employee, setShowModal,
  // delete props
  setShowDeleteSection,
  // field props
  hasName,
  // select props
  hasSelect, selectApi, selectDBField,
  // secondSelect props
  hasSecondSelect, secondSelectItems, secondSelectName, secondSelectDBField

}) {

  const [item, setItem] = useState(null)
  const [selectItems, setSelectItems] = useState(null)


  useEffect(() => {

    const config = {
      headers: {
        Authorization: `Bearer ${employee.token}`
      }
    }

    async function fetchAndSetItem() {

      const { data } = await axios.get(api, config)

      const itemToDelete = data.find(element => element._id === targetID)

      setItem(itemToDelete);
    }
    fetchAndSetItem()

    if (hasSelect) {

      async function fetchAndSetSelectItems() {
        const { data } = await axios.get(selectApi, config)
        setSelectItems(data)
      }


      fetchAndSetSelectItems()

    }

  }, [api, targetID, employee.token, hasSelect, selectApi])

  async function handleDelete(id) {
    const config = {
      headers: {
        Authorization: `Bearer ${employee.token}`
      }
    }

    await axios.delete(api + id, config)

    setShowModal(false)
    setShowDeleteSection(false)
    triggerFetch()
  }

  return (
    <div className='modal_delete_content'>
      <p>
        Are you sure you want to delete&nbsp;
        {
          item
            ?
            hasName
              ?
              item.name
              :
              hasSelect
                ?
                selectItems?.find(sItem => sItem._id === item[selectDBField])?.name
                  + (hasSecondSelect
                    ?
                    ` ${secondSelectName} ${secondSelectItems?.find(sItem => sItem._id === item[secondSelectDBField])?.name}`
                    :
                    ''
                    )
                :
                ''
            :
            ''
        }?
      </p>

      <div className="modal_group_buttons">
        <button
          className="delete" onClick={() => {
            handleDelete(targetID)
          }}
        >Delete</button>

        <button className="cancel" onClick={() => {
          setShowModal(false);
          setShowDeleteSection(false);
        }}>Cancel</button>
      </div>

    </div>
  )
}

export default CRUDDeleteBoilerPlate