import ViewButton from '../../../CRUDButtons/ViewButton/ViewButton'
import EditButton from '../../../CRUDButtons/EditButton/EditButton'
import DeleteButton from '../../../CRUDButtons/DeleteButton/DeleteButton'

import './ActionButtonsCell.css'
import CRUDButton from '../../../CRUDButtons/CRUDButton'
import { useNavigate } from 'react-router-dom'

function ActionButtonsCell({
  // action button props
  extraActionButton, extraActionButtonHandleClick, extraActionButtonChildren,
  secondExtraActionButton, secondExtraActionButtonHandleClick, secondExtraActionButtonChildren,
  allowUpdate, allowDelete, 
  setShowModal, targetID, setTargetID,
  setShowViewSection, setShowUpdateForm, setShowDeleteSection
}) {

  const navigate = useNavigate()

  return (
    <td className="action_button_cell">
        <ViewButton 
          setShowModal={setShowModal}
          setShowViewSection={setShowViewSection}
          targetID={targetID}
          setTargetID={setTargetID}
        />
        {allowUpdate && 
          <EditButton 
            setShowModal={setShowModal}
            setShowUpdateForm={setShowUpdateForm}
            targetID={targetID}
            setTargetID={setTargetID}
          />
        }
        {allowDelete && 
          <DeleteButton 
            setShowModal={setShowModal}
            setShowDeleteSection={setShowDeleteSection}
            targetID={targetID}
            setTargetID={setTargetID}
          />
        }
        {
          extraActionButton &&
          <CRUDButton
            handleClick={() => navigate(extraActionButtonHandleClick + '/' + targetID)}
            children={extraActionButtonChildren}
          />
        }
        {
          secondExtraActionButton &&
          <CRUDButton
            handleClick={() => navigate(secondExtraActionButtonHandleClick + '/' + targetID)}
            children={secondExtraActionButtonChildren}
          />
        }
    </td>
  )
}

export default ActionButtonsCell