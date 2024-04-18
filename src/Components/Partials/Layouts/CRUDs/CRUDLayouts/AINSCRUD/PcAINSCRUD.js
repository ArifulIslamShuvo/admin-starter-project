import PcCRUDBoilerPlate from "../../CRUDBoilerPlate/PcCRUDBoilerPlate";

function PcAINSCRUD({

    // common props
    api, screenTopicSingular, screenTopicPlural,

    // crud header props
    showTotalInHeading,

    // crud props
    allowCreate, allowUpdate, allowDelete,

    // select props
    selectApi, selectType, selectDBField, selectName
    
}) {
  return (
    <PcCRUDBoilerPlate 
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
        hasAmount
        hasImage
        hasName

        // select props
        hasSelect
        selectApi={selectApi}
        selectType={selectType}
        selectDBField={selectDBField}
        selectName={selectName}
    />
  )
}

export default PcAINSCRUD