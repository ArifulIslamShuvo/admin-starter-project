import React from 'react'
import CRUDBoilerPlate from '../CRUDBoilerPlate/CRUDBoilerPlate'

function INPTCRUPD({
     // common props
     api, screenTopicSingular, screenTopicPlural,

     // crud header props
     showTotalInHeading,
 
     // action button props
     extraActionButton, extraActionButtonHandleClick, extraActionButtonChildren,
 
     // crud props
     allowCreate, allowUpdate, allowDelete,
     maxPrecedence,
 
     //text props
     textDBField, textName
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
      hasPrecedence
      maxPrecedence={maxPrecedence}
  
 
      //text field props
      hasText
      textDBField={textDBField}
      textName={textName}
 
  
    />
  )
}

export default INPTCRUPD