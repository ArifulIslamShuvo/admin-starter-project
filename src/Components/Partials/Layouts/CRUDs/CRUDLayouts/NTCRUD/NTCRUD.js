import CRUDBoilerPlate from "../../CRUDBoilerPlate/CRUDBoilerPlate";

function NTCRUD({

    // common props
    api, screenTopicSingular, screenTopicPlural,
    
    // crud header props
    showTotalInHeading,
    
    // crud props
    allowCreate, allowUpdate, allowDelete,
    
    // field props
    //text props
    textDBField, textName

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

        //text props
        hasText
        textDBField={textDBField}
        textName={textName}
        
    />
  )
}

export default NTCRUD