import PcCRUDBoilerPlate from "../../CRUDBoilerPlate/PcCRUDBoilerPlate";

function PcLtNSTCRUD({

    // common props
    api, screenTopicSingular, screenTopicPlural,

    // crud header props
    showTotalInHeading,

    // crud props
    allowCreate, allowUpdate, allowDelete,

    // field props
    textDBField, textName,
    longTextDBField, longTextName,

    // select props
    selectApi, selectType, selectDBField, selectName
    
}) {
    return (
        <PcCRUDBoilerPlate
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

            hasText
            textDBField={textDBField}
            textName={textName}

            hasLongText
            longTextDBField={longTextDBField}
            longTextName={longTextName}

            hasSelect
            selectApi={selectApi}
            selectType={selectType}
            selectDBField={selectDBField}
            selectName={selectName}
        />
    )
}

export default PcLtNSTCRUD