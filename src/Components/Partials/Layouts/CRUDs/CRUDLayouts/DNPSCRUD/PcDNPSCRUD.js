import PcCRUDBoilerPlate from "../../CRUDBoilerPlate/PcCRUDBoilerPlate";

function PcDNPSCRUD({

  // parentChild props
  parentDBField,  

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
    <PcCRUDBoilerPlate

        // parentChild props
        parentDBField={parentDBField}

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

export default PcDNPSCRUD