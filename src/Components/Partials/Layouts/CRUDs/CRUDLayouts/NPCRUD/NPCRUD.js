import React from 'react'
import CRUDBoilerPlate from '../../CRUDBoilerPlate/CRUDBoilerPlate'

function NPCRUD({
  // common props
  api, screenTopicSingular, screenTopicPlural,

  // crud header props
  showTotalInHeading,

  // crud props
  allowCreate, allowUpdate, allowDelete,
  // action button props
  extraActionButton, extraActionButtonHandleClick, extraActionButtonChildren,

  maxPrecedence
}) {
  return (
    <CRUDBoilerPlate
      // common props
      api={api}
      screenTopicSingular={screenTopicSingular}
      screenTopicPlural={screenTopicPlural}

      // crud header props
      showTotalInHeading={showTotalInHeading}

      // crud props
      allowCreate={allowCreate}
      allowUpdate={allowUpdate}
      allowDelete={allowDelete}
      // action button props
      extraActionButton={extraActionButton}
      extraActionButtonHandleClick={extraActionButtonHandleClick}
      extraActionButtonChildren={extraActionButtonChildren}

      // field props
      hasPrecedence
      maxPrecedence={maxPrecedence}
      hasName
    />
  )
}

export default NPCRUD