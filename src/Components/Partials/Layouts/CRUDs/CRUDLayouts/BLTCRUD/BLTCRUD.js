import CRUDBoilerPlate from "../../CRUDBoilerPlate/CRUDBoilerPlate"

function BLTCRUD({

    // common props
    api, screenTopicSingular, screenTopicPlural,

    // crud header props
    showTotalInHeading,

    // crud props
    allowCreate, allowUpdate, allowDelete,

    // field props
    booleanDBField, booleanName,

    // Text field props
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
            hasLink

            hasBoolean
            booleanDBField={booleanDBField}
            booleanName={booleanName}

            hasText
            textDBField={textDBField}
            textName={textName}

            
        />
    )
}

export default BLTCRUD