import PcCRUDBoilerPlate from "../../CRUDBoilerPlate/PcCRUDBoilerPlate";

function PcBESCRUD({

    // parentChild props
    parentDBField,

    // common props
    api, screenTopicSingular, screenTopicPlural,
    
    // crud header props
    showTotalInHeading,
    
    // crud props
    allowCreate, allowUpdate, allowDelete,
    
    // field props

    //boolean props
    booleanDBField, booleanName,
    
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
        
        // field props
        //text props
        hasEmail

        //boolean props
        hasBoolean
        booleanDBField={booleanDBField}
        booleanName={booleanName}
        
        // select props
        hasSelect
        selectApi={selectApi}
        selectType={selectType}
        selectDBField={selectDBField}
        selectName={selectName}
    />
  )
}

export default PcBESCRUD