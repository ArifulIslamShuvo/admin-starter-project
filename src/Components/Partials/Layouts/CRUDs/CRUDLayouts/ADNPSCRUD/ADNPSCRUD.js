import React from 'react'
import CRUDBoilerPlate from '../../CRUDBoilerPlate/CRUDBoilerPlate'

function ADNPSCRUD({
    // common props
    api, screenTopicSingular, screenTopicPlural,

    // crud header props
    showTotalInHeading,

    // crud props
    allowCreate, allowUpdate, allowDelete,

    maxPrecedence,
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

            // field props
            hasName
            hasDescription
            hasAmount
            hasPrecedence

            maxPrecedence={maxPrecedence}

            hasSelect
            selectApi={selectApi}
            selectType={selectType}
            selectDBField={selectDBField}
            selectName={selectName}
        />
  )
}

export default ADNPSCRUD