import CRUDBoilerPlate from "../../CRUDBoilerPlate/CRUDBoilerPlate"

function ILtNPTCRUD({

    // common props
    api, screenTopicSingular, screenTopicPlural,

    // crud header props
    showTotalInHeading,

    // crud props
    allowCreate, allowUpdate, allowDelete,

    // field props
    maxPrecedence,
    textDBField, textName,
    longTextDBField, longTextName,


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
            hasImage

            hasPrecedence
            maxPrecedence={maxPrecedence}

            hasText
            textDBField={textDBField}
            textName={textName}

            hasLongText
            longTextDBField={longTextDBField}
            longTextName={longTextName}
            
        />
    )
}

export default ILtNPTCRUD