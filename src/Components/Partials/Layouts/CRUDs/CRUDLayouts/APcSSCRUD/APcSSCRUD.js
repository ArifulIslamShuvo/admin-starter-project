import React from 'react'
import CRUDBoilerPlate from '../../CRUDBoilerPlate/CRUDBoilerPlate'

function APcSSCRUD({

    // common props
    api, screenTopicSingular, screenTopicPlural,

    // crud header props
    showTotalInHeading,

    // crud props
    allowCreate, allowUpdate, allowDelete,

    // select props
    selectApi, selectType, selectDBField, selectName,

    // second select props
    secondSelectApi, secondSelectType, secondSelectDBField, secondSelectName,

    // action button props
    extraActionButton, extraActionButtonHandleClick, extraActionButtonChildren

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
        
        hasAmount
        // second select props
        hasSecondSelect
        secondSelectApi={secondSelectApi}
        secondSelectType={secondSelectType}
        secondSelectDBField={secondSelectDBField}
        secondSelectName={secondSelectName}

        // action button props
        extraActionButton={extraActionButton}
        extraActionButtonHandleClick={extraActionButtonHandleClick}
        extraActionButtonChildren={extraActionButtonChildren}
    />
  )
}

export default APcSSCRUD