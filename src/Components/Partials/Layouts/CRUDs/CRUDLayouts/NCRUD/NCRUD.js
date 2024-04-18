import CRUDBoilerPlate from "../../CRUDBoilerPlate/CRUDBoilerPlate";

function NCRUD({

    // common props
    api, screenTopicSingular, screenTopicPlural,

    // crud header props
    showTotalInHeading,

     // action button props
     extraActionButton, extraActionButtonHandleClick, extraActionButtonChildren,

    // crud props
    allowCreate, allowUpdate, allowDelete,

}) {

    return (
        <CRUDBoilerPlate 
            // common props
            api={api}
            screenTopicSingular={screenTopicSingular}
            screenTopicPlural={screenTopicPlural}
            
            // crud header props
            showTotalInHeading={showTotalInHeading}
            
            // action button props
            extraActionButton={extraActionButton}
            extraActionButtonHandleClick={extraActionButtonHandleClick}
            extraActionButtonChildren={extraActionButtonChildren}
            
            // crud props
            allowCreate={allowCreate}
            allowUpdate={allowUpdate}
            allowDelete={allowDelete}
            
            // field props
            hasName
            
        />
    )
}

export default NCRUD