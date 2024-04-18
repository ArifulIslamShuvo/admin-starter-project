import React from 'react'
import CRUDBoilerPlate from '../../CRUDBoilerPlate/CRUDBoilerPlate'

function SCRUD({

    // common props
    api, screenTopicSingular, screenTopicPlural,

    // crud header props
    showTotalInHeading,

    // crud props
    allowCreate, allowUpdate, allowDelete,

    // select props
    selectApi, selectType, selectDBField, selectName,



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
    
    // select props
    hasSelect
    selectApi={selectApi}
    selectType={selectType}
    selectDBField={selectDBField}
    selectName={selectName}


/>
  )
}

export default SCRUD