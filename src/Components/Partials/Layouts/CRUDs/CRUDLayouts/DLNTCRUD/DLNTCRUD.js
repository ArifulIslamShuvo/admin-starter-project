import React from 'react'
import CRUDBoilerPlate from '../../CRUDBoilerPlate/CRUDBoilerPlate'

function DLNTCRUD({
    // common props
    api, screenTopicSingular, screenTopicPlural,

    // crud header props
    showTotalInHeading,

    // action button props
    extraActionButton, extraActionButtonHandleClick, extraActionButtonChildren,

    // crud props
    allowCreate, allowUpdate, allowDelete,

    //extra field props
    textDBField, textName, longTextDBField, longTextName
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

            hasName
            hasDescription
            // field props
            hasLongText
            longTextDBField={longTextDBField}
            longTextName={longTextName}

            //extra field props
            hasText
            textDBField={textDBField}
            textName={textName}
        />
    )
}

export default DLNTCRUD