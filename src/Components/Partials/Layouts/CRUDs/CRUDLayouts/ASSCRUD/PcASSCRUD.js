import PcCRUDBoilerPlate from "../../CRUDBoilerPlate/PcCRUDBoilerPlate";

function PcASSCRUD({

    // parentChild props
    parentDBField,

    // common props
    api, screenTopicSingular, screenTopicPlural,

    // crud header props
    showTotalInHeading,

    // crud props
    allowCreate, allowUpdate, allowDelete,

    // select props
    selectApi, selectType, selectDBField, selectName,

    // second select props
    secondSelectApi, secondSelectType, secondSelectDBField, secondSelectName

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
        
        //field props
        hasAmount
        
        // select props
        hasSelect
        selectApi={selectApi}
        selectType={selectType}
        selectDBField={selectDBField}
        selectName={selectName}

        // second select props
        hasSecondSelect
        secondSelectApi={secondSelectApi}
        secondSelectType={secondSelectType}
        secondSelectDBField={secondSelectDBField}
        secondSelectName={secondSelectName}
    />
  )
}

export default PcASSCRUD