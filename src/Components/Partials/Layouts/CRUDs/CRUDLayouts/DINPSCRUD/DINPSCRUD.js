import CRUDBoilerPlate from "../../CRUDBoilerPlate/CRUDBoilerPlate";

function DINPSCRUD({

  // common props
  api, screenTopicSingular, screenTopicPlural,

  // crud header props
  showTotalInHeading,

  // action button props
  extraActionButton, extraActionButtonHandleClick, extraActionButtonChildren,

  // crud props
  allowCreate, allowUpdate, allowDelete,

  // field props
  maxPrecedence,

  // select props
  selectApi, selectType, selectDBField, selectName

}) {
  
  return (
    <CRUDBoilerPlate
        // common props
        api={api}
        screenTopicSingular={screenTopicSingular}
        screenTopicPlural={screenTopicPlural}
        
        // crud header props
        showTotalInHeading={showTotalInHeading}

        // action button props
        extraActionButton={extraActionButton}
        extraActionButtonHandleClick={extraActionButtonHandleClick}
        extraActionButtonChildren={extraActionButtonChildren}
        
        // crud props
        allowCreate={allowCreate}
        allowUpdate={allowUpdate}
        allowDelete={allowDelete}
        
        // field props
        hasName
        hasImage
        hasDescription
        hasPrecedence
        maxPrecedence={maxPrecedence}
        
        // select props
        hasSelect
        selectApi={selectApi}
        selectType={selectType}
        selectDBField={selectDBField}
        selectName={selectName}
    />
  )
}

export default DINPSCRUD