import PcCRUDBoilerPlate from "../../CRUDBoilerPlate/PcCRUDBoilerPlate";

function PcNSTCRUD({

  // parentChild props
  parentDBField,

  // common props
  api, screenTopicSingular, screenTopicPlural,

  // crud header props
  showTotalInHeading,

  // crud props
  allowCreate, allowUpdate, allowDelete,

  // extra button props
  extraActionButton, extraActionButtonHandleClick, extraActionButtonChildren,
  
  //text props
  textDBField, textName,

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

      // crud props
      allowCreate={allowCreate}
      allowUpdate={allowUpdate}
      allowDelete={allowDelete}

      // extra button prop
      extraActionButton={extraActionButton}
      extraActionButtonHandleClick={extraActionButtonHandleClick}
      extraActionButtonChildren={extraActionButtonChildren}

      // field props
      hasName

      //text props
      hasText
      textDBField={textDBField}
      textName={textName}

      // select props
      hasSelect
      selectApi={selectApi}
      selectType={selectType}
      selectDBField={selectDBField}
      selectName={selectName}
    />
  )
}

export default PcNSTCRUD