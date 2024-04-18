import React from 'react'
import CRUDBoilerPlate from '../CRUDBoilerPlate/CRUDBoilerPlate'

function DNPTCRUD({
     // common props
     api, screenTopicSingular, screenTopicPlural,

     // crud header props
     showTotalInHeading,
 
     // action button props
     extraActionButton, extraActionButtonHandleClick, extraActionButtonChildren,
     secondExtraActionButton, secondExtraActionButtonHandleClick, secondExtraActionButtonChildren,
 
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
     secondExtraActionButton={secondExtraActionButton}
     secondExtraActionButtonHandleClick={secondExtraActionButtonHandleClick}
     secondExtraActionButtonChildren={secondExtraActionButtonChildren}

     // crud props
     allowCreate={allowCreate}
     allowUpdate={allowUpdate}
     allowDelete={allowDelete}

     // field props
     hasName
     hasDescription
     hasPrecedence
     maxPrecedence={maxPrecedence}
 

     //text field props
     hasText
     textDBField={textDBField}
     textName={textName}

    
    />
  )
}

export default DNPTCRUD