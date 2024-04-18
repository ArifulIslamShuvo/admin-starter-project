import React from 'react'
import CRUDBoilerPlate from '../../CRUDBoilerPlate/CRUDBoilerPlate'

function ASSCRUD({

  // common props
  api, screenTopicSingular, screenTopicPlural,

  // crud header props
  showTotalInHeading,

  // crud props
  allowCreate, allowUpdate, allowDelete,

  // select props
  selectApi, selectType, selectDBField, selectName,

  // secondSelect props
  secondSelectApi, secondSelectName, secondSelectDBField,
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

      hasAmount
      // select props
      hasSelect
      selectApi={selectApi}
      selectType={selectType}
      selectDBField={selectDBField}
      selectName={selectName}

      // secondSelect props
      hasSecondSelect
      secondSelectApi={secondSelectApi}
      secondSelectName={secondSelectName}
      secondSelectDBField={secondSelectDBField}
      // action button props
      extraActionButton={extraActionButton}
      extraActionButtonHandleClick={extraActionButtonHandleClick}
      extraActionButtonChildren={extraActionButtonChildren}
    />
  )
}

export default ASSCRUD