import React from 'react'
import PcCRUDBoilerPlate from '../../../CRUDBoilerPlate/PcCRUDBoilerPlate'

function PcADNPSCRUD({
    parentDBField,
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
        <PcCRUDBoilerPlate
            // parentChild props
            parentDBField={parentDBField}

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

export default PcADNPSCRUD