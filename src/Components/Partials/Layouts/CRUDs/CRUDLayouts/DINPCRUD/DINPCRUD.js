import CRUDBoilerPlate from "../../CRUDBoilerPlate/CRUDBoilerPlate";

function DINPCRUD({
    // common props
    api, screenTopicSingular, screenTopicPlural,

    // crud header props
    showTotalInHeading,

    // crud props
    allowCreate, allowUpdate, allowDelete,

    // field props
    maxPrecedence

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
        hasImage
        hasPrecedence
        maxPrecedence={maxPrecedence}
        
    />
  )
}

export default DINPCRUD