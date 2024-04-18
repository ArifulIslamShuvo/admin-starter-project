import CRUDHeading from './CRUDHeading/CRUDHeading';
import CreateButton from './CreateButton/CreateButton';

import './CRUDHeader.css';

function CRUDHeader({
   // common props
   screenTopicPlural,
   // props if we want to show total items in heading
   showTotalInHeading,totalItems,
   // props if create is allowed
   allowCreate, 
   screenTopicSingular, setShowModal, setShowCreateForm
}) {
  return (
    <div className="body_header">
        <CRUDHeading 
            screenTopicPlural = {screenTopicPlural}
            // props if we want to show total items in heading
            showTotalInHeading = {showTotalInHeading}
            totalItems = {totalItems}
        />
        
        {allowCreate && 
          <CreateButton 
              screenTopicSingular = {screenTopicSingular}
              setShowModal = {setShowModal}
              setShowCreateForm = {setShowCreateForm}
          />
        }
    </div>
  )
}

export default CRUDHeader