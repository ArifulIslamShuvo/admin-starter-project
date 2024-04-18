import CRUDBoilerPlate from "../../CRUDBoilerPlate/CRUDBoilerPlate"

function BLNCRUD({

    // common props
    api, screenTopicSingular, screenTopicPlural,

    // crud header props
    showTotalInHeading,

    // crud props
    allowCreate, allowUpdate, allowDelete,

    // field props
    booleanDBField, booleanName

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
            hasLink

            hasBoolean
            booleanDBField={booleanDBField}
            booleanName={booleanName}
            
        />
    )
}

export default BLNCRUD