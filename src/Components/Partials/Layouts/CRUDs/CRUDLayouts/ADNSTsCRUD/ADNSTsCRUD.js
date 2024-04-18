import CRUDBoilerPlate from '../../CRUDBoilerPlate/CRUDBoilerPlate'

function ADNSTsCRUD({
    // common props
    api, screenTopicSingular, screenTopicPlural,

    // crud header props
    showTotalInHeading,

    // crud props
    allowCreate, allowUpdate, allowDelete,

    // field props
    textDBField, textName,

    // select props
    selectApi, selectType, selectDBField, selectName,

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
            hasAmount

            hasText
            textDBField={textDBField}
            textName={textName}

            hasSelect
            selectApi={selectApi}
            selectType={selectType}
            selectDBField={selectDBField}
            selectName={selectName}
        />
    )
}

export default ADNSTsCRUD