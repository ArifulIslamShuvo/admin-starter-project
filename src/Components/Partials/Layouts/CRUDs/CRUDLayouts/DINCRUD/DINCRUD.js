import CRUDBoilerPlate from "../../CRUDBoilerPlate/CRUDBoilerPlate";

function DINCRUD({
    // common props
    api, screenTopicSingular, screenTopicPlural,

    // crud header props
    showTotalInHeading,

    // action button props
    extraActionButton, extraActionButtonHandleClick, extraActionButtonChildren,
    secondExtraActionButton, secondExtraActionButtonHandleClick, secondExtraActionButtonChildren,

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
        secondExtraActionButton={secondExtraActionButton}
        secondExtraActionButtonHandleClick={secondExtraActionButtonHandleClick}
        secondExtraActionButtonChildren={secondExtraActionButtonChildren}
        
        // crud props
        allowCreate={allowCreate}
        allowUpdate={allowUpdate}
        allowDelete={allowDelete}
        
        // field props
        hasName
        hasDescription
        hasImage
        
    />
  )
}

export default DINCRUD